// Cloudflare Pages Function: /api/ai/search
// Ultra-Low Latency Edge Semantic Vector Search using Cloudflare Vectorize + Workers AI
import { Env, jsonResponse } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    return handleSearch(context);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    return handleSearch(context);
};

async function handleSearch(context: EventContext<Env, any, any>) {
    const startTime = Date.now();
    try {
        let query = '';
        if (context.request.method === 'POST') {
            const body: any = await context.request.json().catch(() => ({}));
            query = body.query || body.q || '';
        } else {
            const url = new URL(context.request.url);
            query = url.searchParams.get('q') || url.searchParams.get('query') || '';
        }

        query = query.trim();
        if (!query) {
            return jsonResponse({ error: 'Search query is required' }, 400);
        }

        // Check KV Edge Cache for semantic query
        const cacheKey = `ai:search:${query.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        if (context.env.PRICE_KV) {
            try {
                const cached = await context.env.PRICE_KV.get(cacheKey, 'json');
                if (cached) {
                    return jsonResponse(cached, 200, {
                        'X-Cache-Status': 'HIT',
                        'X-Search-Engine': 'Cloudflare-Vectorize-Cached'
                    });
                }
            } catch {
                // fall through to live search
            }
        }

        let results: any[] = [];
        let engine = 'Cloudflare-Vectorize-Semantic';

        // 1. Vectorize Semantic Embedding Search using Workers AI
        if (context.env.AI && context.env.VECTORIZE) {
            try {
                const embeddingRes: any = await context.env.AI.run('@cf/baai/bge-base-en-v1.5', {
                    text: [query]
                });
                const vector = embeddingRes?.data?.[0];

                if (vector && Array.isArray(vector)) {
                    const vectorizeMatches = await context.env.VECTORIZE.query(vector, {
                        topK: 12,
                        returnMetadata: 'all'
                    });

                    if (vectorizeMatches?.matches?.length > 0) {
                        results = vectorizeMatches.matches.map((m: any) => ({
                            id: m.id,
                            score: Math.round(m.score * 100) / 100,
                            ...m.metadata
                        }));
                    }
                }
            } catch (err: any) {
                console.warn('[Vectorize] Vector search fallback to D1:', err.message);
            }
        }

        // 2. Graceful Fallback to D1 FTS5 BM25 if Vectorize returned no matches
        if (results.length === 0 && context.env.DB) {
            engine = 'Cloudflare-D1-FTS5-BM25-Fallback';
            const cleanTokens = query
                .replace(/[^a-zA-Z0-9\s]/g, ' ')
                .split(/\s+/)
                .filter(Boolean)
                .map(t => `"${t}"*`)
                .join(' ');

            if (cleanTokens) {
                const ftsQuery = `
                    SELECT p.id, p.title, p.slug, p.location, p.city, p.price_range as priceRange, 
                           p.type, b.name as builder, bm25(projects_fts) as score
                    FROM projects_fts fts
                    JOIN projects p ON fts.rowid = p.rowid
                    LEFT JOIN builders b ON p.builder_id = b.id
                    WHERE projects_fts MATCH ?
                    ORDER BY bm25(projects_fts) ASC
                    LIMIT 12
                `;
                const d1Res = await context.env.DB.prepare(ftsQuery).bind(cleanTokens).all();
                results = d1Res.results || [];
            }
        }

        const payload = {
            query,
            total: results.length,
            engine,
            latencyMs: Date.now() - startTime,
            data: results
        };

        // Cache in PRICE_KV for 1 hour
        if (context.env.PRICE_KV && results.length > 0) {
            try {
                context.waitUntil(context.env.PRICE_KV.put(cacheKey, JSON.stringify(payload), { expirationTtl: 3600 }));
            } catch {
                // ignore
            }
        }

        return jsonResponse(payload, 200, {
            'Cache-Control': 'public, max-age=120, s-maxage=3600, stale-while-revalidate=86400',
            'X-Search-Engine': engine,
            'X-Cache-Status': 'MISS'
        });

    } catch (err: any) {
        return jsonResponse({ error: 'Search failed', details: err.message }, 500);
    }
};
