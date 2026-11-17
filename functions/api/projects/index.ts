// Cloudflare Pages Function: /api/projects
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const url = new URL(context.request.url);
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
        const limit = Math.min(1000, Math.max(1, parseInt(url.searchParams.get('limit') || '10')));
        const offset = (page - 1) * limit;

        const location = url.searchParams.get('location');
        const city = url.searchParams.get('city');
        const q = url.searchParams.get('q') || url.searchParams.get('query');
        const type = url.searchParams.get('type');
        const status = url.searchParams.get('status');
        const config = url.searchParams.get('config');

        const searchKeyword = q || location;
        const cleanFtsQuery = (searchKeyword || '')
            .trim()
            .replace(/[^a-zA-Z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter(Boolean)
            .map(token => `"${token}"*`)
            .join(' ');

        // Cloudflare Workers KV Cache Key
        const kvCacheKey = `projects:${city || 'all'}:${type || 'all'}:${status || 'all'}:${config || 'all'}:${page}:${limit}`;
        if (!cleanFtsQuery && context.env.PRICE_KV) {
            try {
                const cached = await context.env.PRICE_KV.get(kvCacheKey, 'json');
                if (cached) {
                    return jsonResponse(cached, 200, {
                        'Cache-Control': 'public, max-age=120, s-maxage=3600, stale-while-revalidate=86400',
                        'X-Edge-Engine': 'Cloudflare-KV-Edge-Cache',
                        'X-Cache-Status': 'HIT'
                    });
                }
            } catch {
                // KV lookup failure, fall through to D1
            }
        }

        let sql = '';
        let countSql = '';
        const params: any[] = [];
        const countParams: any[] = [];

        if (cleanFtsQuery) {
            sql = 'SELECT p.* FROM projects p JOIN projects_fts f ON p.id = f.id WHERE projects_fts MATCH ?';
            countSql = 'SELECT COUNT(*) as total FROM projects p JOIN projects_fts f ON p.id = f.id WHERE projects_fts MATCH ?';
            params.push(cleanFtsQuery);
            countParams.push(cleanFtsQuery);
        } else {
            sql = 'SELECT p.* FROM projects p WHERE 1=1';
            countSql = 'SELECT COUNT(*) as total FROM projects p WHERE 1=1';
        }

        if (city && city.trim() && city.toLowerCase() !== 'all') {
            sql += ' AND (p.location LIKE ? OR p.title LIKE ? OR p.description LIKE ?)';
            countSql += ' AND (p.location LIKE ? OR p.title LIKE ? OR p.description LIKE ?)';
            const wildcard = `%${city.trim()}%`;
            params.push(wildcard, wildcard, wildcard);
            countParams.push(wildcard, wildcard, wildcard);
        }

        if (type && type.trim() && type !== 'all') {
            sql += ' AND p.type LIKE ?';
            countSql += ' AND p.type LIKE ?';
            const wildcard = `%${type.trim()}%`;
            params.push(wildcard);
            countParams.push(wildcard);
        }

        if (status && status.trim()) {
            sql += ' AND LOWER(p.status) = LOWER(?)';
            countSql += ' AND LOWER(p.status) = LOWER(?)';
            params.push(status.trim());
            countParams.push(status.trim());
        }

        if (config && config.trim()) {
            sql += ' AND p.configurations LIKE ?';
            countSql += ' AND p.configurations LIKE ?';
            params.push(`%${config.trim()}%`);
            countParams.push(`%${config.trim()}%`);
        }

        // Count total matching
        const countResult = await context.env.DB
            .prepare(countSql)
            .bind(...countParams)
            .first<{ total: number }>();

        const total = countResult?.total || 0;

        // Paginated results with BM25 Rank priority when FTS is active
        if (cleanFtsQuery) {
            sql += ' ORDER BY f.rank ASC, p.created_at DESC LIMIT ? OFFSET ?';
        } else {
            sql += ' ORDER BY p.created_at DESC LIMIT ? OFFSET ?';
        }
        params.push(limit, offset);

        const { results } = await context.env.DB
            .prepare(sql)
            .bind(...params)
            .all();

        // Parse JSON fields and normalize snake_case DB columns to Project interface
        const formatted = (results || []).map((row: any) => ({
            ...row,
            builderId: row.builder_id || row.builderId,
            priceRange: row.price_range || row.priceRange || 'On Request',
            exactPrice: row.exact_price || row.exactPrice,
            heroImage: row.hero_image || row.heroImage,
            masterLayout: row.master_layout || row.masterLayout,
            possessionDate: row.possession_date || row.possessionDate,
            reraId: row.rera_id || row.reraId,
            pricePerSqft: row.price_per_sqft || row.pricePerSqft,
            verificationStatus: row.verification_status || row.verificationStatus,
            verificationSource: row.verification_source || row.verificationSource,
            metaDescription: row.meta_description || row.metaDescription,
            seoKeywords: typeof row.seo_keywords === 'string' ? safeJsonParse(row.seo_keywords, []) : row.seo_keywords,
            configurations: typeof row.configurations === 'string' ? safeJsonParse(row.configurations, []) : row.configurations,
            features: typeof row.features === 'string' ? safeJsonParse(row.features, []) : row.features,
            amenities: typeof row.amenities === 'string' ? safeJsonParse(row.amenities, []) : row.amenities,
            specs: typeof row.specs === 'string' ? safeJsonParse(row.specs, {}) : row.specs,
            highlights: typeof row.highlights === 'string' ? safeJsonParse(row.highlights, []) : row.highlights,
            floorPlans: typeof row.floor_plans === 'string' ? safeJsonParse(row.floor_plans, []) : row.floor_plans,
            images: typeof row.images === 'string' ? safeJsonParse(row.images, []) : row.images,
            configurationDetails: typeof row.configuration_details === 'string' ? safeJsonParse(row.configuration_details, []) : row.configuration_details,
            faqs: typeof row.faqs === 'string' ? safeJsonParse(row.faqs, []) : row.faqs,
        }));

        const payload = {
            data: formatted,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit) || 1,
            engine: cleanFtsQuery ? 'Cloudflare-D1-FTS5-BM25' : 'Cloudflare-D1-Indexed'
        };

        if (!cleanFtsQuery && context.env.PRICE_KV) {
            try {
                context.waitUntil(context.env.PRICE_KV.put(kvCacheKey, JSON.stringify(payload), { expirationTtl: 3600 }));
            } catch {
                // Ignore background caching error
            }
        }

        return jsonResponse(payload, 200, {
            'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400',
            'X-Edge-Engine': 'Cloudflare-D1-Enterprise-FTS5',
            'X-Cache-Status': 'MISS'
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to query projects', details: err.message }, 500);
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const body: any = await context.request.json();
        const id = body.id || `p-${Date.now().toString(36)}`;
        const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const sql = `
            INSERT INTO projects (
                id, title, slug, builder_id, location, price_range, exact_price,
                configurations, status, type, possession_date, image, hero_image,
                master_layout, floor_plans, description, features, specs, highlights,
                rera_id, price_per_sqft, verification_status, verification_source,
                seo_keywords, meta_description, city, lat, lng,
                configuration_details, amenities, faqs, brochure_url, images
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.title || '',
            slug,
            body.builderId || body.builder_id || null,
            body.location || '',
            body.priceRange || body.price_range || '',
            body.exactPrice || body.exact_price || null,
            JSON.stringify(body.configurations || []),
            body.status || 'Under Construction',
            body.type || 'Residential',
            body.possessionDate || body.possession_date || '',
            body.image || '',
            body.heroImage || body.hero_image || '',
            body.masterLayout || body.master_layout || '',
            JSON.stringify(body.floorPlans || body.floor_plans || []),
            body.description || '',
            JSON.stringify(body.features || []),
            JSON.stringify(body.specs || {}),
            JSON.stringify(body.highlights || []),
            body.reraId || body.rera_id || '',
            body.pricePerSqft || body.price_per_sqft || 0,
            body.verificationStatus || body.verification_status || 'Verified',
            body.verificationSource || body.verification_source || '',
            JSON.stringify(body.seoKeywords || body.seo_keywords || []),
            body.metaDescription || body.meta_description || '',
            body.city || 'Pune',
            body.lat !== undefined ? Number(body.lat) : 18.5204,
            body.lng !== undefined ? Number(body.lng) : 73.8567,
            JSON.stringify(body.configurationDetails || body.configuration_details || []),
            JSON.stringify(body.amenities || body.features || []),
            JSON.stringify(body.faqs || []),
            body.brochureUrl || body.brochure_url || '',
            JSON.stringify(body.images || [body.image || body.heroImage].filter(Boolean))
        ).run();

        return jsonResponse({ success: true, id, slug }, 201);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to create project', details: err.message }, 500);
    }
};

function safeJsonParse(val: string, fallback: any) {
    try {
        return JSON.parse(val);
    } catch {
        return fallback;
    }
}
