// Cloudflare Pages Function: /api/localities (Enterprise FTS5 Search)
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const url = new URL(context.request.url);
        const q = url.searchParams.get('q') || url.searchParams.get('search');
        const city = url.searchParams.get('city');

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
                SELECT l.* FROM localities l 
                JOIN localities_fts f ON l.id = f.id 
                WHERE localities_fts MATCH ?
            `;
            params.push(cleanFtsQuery);

            if (city && city.toLowerCase() !== 'all') {
                sql += ' AND LOWER(l.city) = LOWER(?)';
                params.push(city.trim());
            }

            sql += ' ORDER BY f.rank ASC, l.name ASC';
        } else {
            sql = 'SELECT * FROM localities WHERE 1=1';
            if (city && city.toLowerCase() !== 'all') {
                sql += ' AND LOWER(city) = LOWER(?)';
                params.push(city.trim());
            }
            sql += ' ORDER BY is_featured DESC, name ASC';
        }

        const { results } = await context.env.DB
            .prepare(sql)
            .bind(...params)
            .all();

        const formatted = (results || []).map((l: any) => ({
            id: l.id,
            name: l.name,
            slug: l.slug,
            city: l.city || 'Pune',
            zone: l.zone,
            isFeatured: Boolean(l.is_featured),
            projectCount: l.project_count || 0,
            tagline: l.tagline,
            avgPriceSqft: l.avg_price_sqft,
            appreciationRate: l.appreciation_rate,
            appreciation_rate: l.appreciation_rate,
            imageUrl: l.image_url,
            image_url: l.image_url,
            description: l.description
        }));

        return jsonResponse(formatted, 200, {
            'Cache-Control': 'public, max-age=120, s-maxage=600, stale-while-revalidate=86400',
            'X-Edge-Engine': cleanFtsQuery ? 'Cloudflare-D1-Enterprise-FTS5' : 'Cloudflare-D1-Enterprise',
            'X-Total-Count': String(formatted.length)
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to fetch localities', details: err.message }, 500);
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const body: any = await context.request.json();
        const id = body.id || `loc-${Date.now().toString(36)}`;
        const slug = body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const sql = `
            INSERT INTO localities (id, name, slug, city, zone, is_featured, project_count, tagline, avg_price_sqft, appreciation_rate, image_url, description)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(name) DO UPDATE SET
                slug = excluded.slug,
                city = excluded.city,
                zone = excluded.zone,
                is_featured = excluded.is_featured,
                project_count = excluded.project_count,
                tagline = excluded.tagline,
                avg_price_sqft = excluded.avg_price_sqft,
                appreciation_rate = excluded.appreciation_rate,
                image_url = excluded.image_url,
                description = excluded.description
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.name,
            slug,
            body.city || 'Pune',
            body.zone || '',
            body.isFeatured ? 1 : 0,
            body.projectCount || 0,
            body.tagline || '',
            body.avgPriceSqft || body.avg_price_sqft || 8000,
            body.appreciationRate || body.appreciation_rate || 7.5,
            body.imageUrl || body.image_url || '',
            body.description || ''
        ).run();

        return jsonResponse({ success: true, message: 'Locality saved', id, slug });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to save locality', details: err.message }, 500);
    }
};
