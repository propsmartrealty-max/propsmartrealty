// Cloudflare Pages Function: /api/projects
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const url = new URL(context.request.url);
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
        const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '10')));
        const offset = (page - 1) * limit;

        const location = url.searchParams.get('location');
        const q = url.searchParams.get('q') || url.searchParams.get('query');
        const type = url.searchParams.get('type');
        const status = url.searchParams.get('status');
        const config = url.searchParams.get('config');

        let sql = 'SELECT * FROM projects WHERE 1=1';
        let countSql = 'SELECT COUNT(*) as total FROM projects WHERE 1=1';
        const params: any[] = [];
        const countParams: any[] = [];

        const searchKeyword = q || location;
        if (searchKeyword && searchKeyword.trim()) {
            sql += ' AND (location LIKE ? OR title LIKE ? OR slug LIKE ? OR builder_id LIKE ?)';
            countSql += ' AND (location LIKE ? OR title LIKE ? OR slug LIKE ? OR builder_id LIKE ?)';
            const wildcard = `%${searchKeyword.trim()}%`;
            params.push(wildcard, wildcard, wildcard, wildcard);
            countParams.push(wildcard, wildcard, wildcard, wildcard);
        }

        if (type && type.trim() && type !== 'all') {
            sql += ' AND type LIKE ?';
            countSql += ' AND type LIKE ?';
            const wildcard = `%${type.trim()}%`;
            params.push(wildcard);
            countParams.push(wildcard);
        }

        if (status && status.trim()) {
            sql += ' AND LOWER(status) = LOWER(?)';
            countSql += ' AND LOWER(status) = LOWER(?)';
            params.push(status.trim());
            countParams.push(status.trim());
        }

        if (config && config.trim()) {
            sql += ' AND configurations LIKE ?';
            countSql += ' AND configurations LIKE ?';
            params.push(`%${config.trim()}%`);
            countParams.push(`%${config.trim()}%`);
        }

        // Count total matching
        const countResult = await context.env.DB
            .prepare(countSql)
            .bind(...countParams)
            .first<{ total: number }>();

        const total = countResult?.total || 0;

        // Paginated results
        sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
        params.push(limit, offset);

        const { results } = await context.env.DB
            .prepare(sql)
            .bind(...params)
            .all();

        // Parse JSON fields
        const formatted = (results || []).map((row: any) => ({
            ...row,
            configurations: typeof row.configurations === 'string' ? safeJsonParse(row.configurations, []) : row.configurations,
            features: typeof row.features === 'string' ? safeJsonParse(row.features, []) : row.features,
            specs: typeof row.specs === 'string' ? safeJsonParse(row.specs, {}) : row.specs,
            highlights: typeof row.highlights === 'string' ? safeJsonParse(row.highlights, []) : row.highlights,
            floorPlans: typeof row.floor_plans === 'string' ? safeJsonParse(row.floor_plans, []) : row.floor_plans,
        }));

        return jsonResponse({
            data: formatted,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit) || 1
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
                seo_keywords, meta_description
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            body.metaDescription || body.meta_description || ''
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
