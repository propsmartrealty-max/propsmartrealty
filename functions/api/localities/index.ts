// Cloudflare Pages Function: /api/localities
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const { results } = await context.env.DB
            .prepare('SELECT * FROM localities ORDER BY name ASC')
            .all();

        const formatted = (results || []).map((l: any) => ({
            id: l.id,
            name: l.name,
            avgPriceSqft: l.avg_price_sqft,
            appreciationRate: l.appreciation_rate,
            appreciation_rate: l.appreciation_rate,
            imageUrl: l.image_url,
            image_url: l.image_url,
            description: l.description
        }));

        return jsonResponse(formatted, 200, {
            'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400',
            'X-Edge-Engine': 'Cloudflare-D1-Enterprise'
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

        const sql = `
            INSERT INTO localities (id, name, avg_price_sqft, appreciation_rate, image_url, description)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(name) DO UPDATE SET
                avg_price_sqft = excluded.avg_price_sqft,
                appreciation_rate = excluded.appreciation_rate,
                image_url = excluded.image_url,
                description = excluded.description
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.name,
            body.avgPriceSqft || body.avg_price_sqft || 8000,
            body.appreciationRate || body.appreciation_rate || 7.5,
            body.imageUrl || body.image_url || '',
            body.description || ''
        ).run();

        return jsonResponse({ success: true, message: 'Locality saved' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to save locality', details: err.message }, 500);
    }
};
