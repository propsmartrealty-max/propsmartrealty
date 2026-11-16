// Cloudflare Pages Function: /api/builders (Enterprise FTS5 Search)
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const url = new URL(context.request.url);
        const q = url.searchParams.get('q') || url.searchParams.get('search');
        const isVerifiedParam = url.searchParams.get('verified');
        const limit = Math.min(300, Math.max(1, parseInt(url.searchParams.get('limit') || '300')));

        let sql = '';
        const params: any[] = [];

        const cleanFtsQuery = (q || '')
            .trim()
            .replace(/[^a-zA-Z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter(Boolean)
            .map(token => `"${token}"*`)
            .join(' ');

        if (cleanFtsQuery) {
            sql = `
                SELECT b.* FROM builders b 
                JOIN builders_fts f ON b.id = f.id 
                WHERE builders_fts MATCH ?
            `;
            params.push(cleanFtsQuery);

            if (isVerifiedParam !== null && isVerifiedParam !== undefined) {
                sql += ' AND b.is_verified = ?';
                params.push(isVerifiedParam === 'true' || isVerifiedParam === '1' ? 1 : 0);
            }

            sql += ' ORDER BY f.rank ASC, b.trust_score DESC LIMIT ?';
            params.push(limit);
        } else {
            sql = 'SELECT * FROM builders WHERE 1=1';
            if (isVerifiedParam !== null && isVerifiedParam !== undefined) {
                sql += ' AND is_verified = ?';
                params.push(isVerifiedParam === 'true' || isVerifiedParam === '1' ? 1 : 0);
            }
            sql += ' ORDER BY is_verified DESC, trust_score DESC, name ASC LIMIT ?';
            params.push(limit);
        }

        const { results } = await context.env.DB
            .prepare(sql)
            .bind(...params)
            .all();

        const formatted = (results || []).map((b: any) => ({
            ...b,
            heroImage: b.hero_image,
            establishedYear: b.established_year,
            totalProjects: b.total_projects,
            ongoingProjects: b.ongoing_projects,
            trustScore: b.trust_score,
            isVerified: Boolean(b.is_verified),
            locations: typeof b.locations === 'string' ? safeJsonParse(b.locations, []) : b.locations
        }));

        return jsonResponse(formatted, 200, {
            'Cache-Control': 'public, max-age=120, s-maxage=600, stale-while-revalidate=86400',
            'X-Edge-Engine': cleanFtsQuery ? 'Cloudflare-D1-Enterprise-FTS5' : 'Cloudflare-D1-Enterprise',
            'X-Total-Count': String(formatted.length)
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to fetch builders', details: err.message }, 500);
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const body: any = await context.request.json();
        const id = body.id || `b-${Date.now().toString(36)}`;
        const slug = body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const sql = `
            INSERT INTO builders (
                id, name, slug, logo, hero_image, description,
                established_year, total_projects, ongoing_projects,
                trust_score, is_verified, mobile, experience, locations
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.name,
            slug,
            body.logo || '',
            body.heroImage || body.hero_image || '',
            body.description || '',
            body.establishedYear || body.established_year || null,
            body.totalProjects || body.total_projects || 0,
            body.ongoingProjects || body.ongoing_projects || 0,
            body.trustScore || body.trust_score || 9.0,
            body.isVerified !== undefined ? (body.isVerified ? 1 : 0) : 1,
            body.mobile || '',
            body.experience || 0,
            JSON.stringify(body.locations || [])
        ).run();

        return jsonResponse({ success: true, id, slug }, 201);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to create builder', details: err.message }, 500);
    }
};

function safeJsonParse(val: string, fallback: any) {
    try {
        return JSON.parse(val);
    } catch {
        return fallback;
    }
}
