// Cloudflare Pages Function: /api/banners
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const { results } = await context.env.DB
            .prepare('SELECT * FROM banners WHERE is_active = 1 ORDER BY sort_order ASC, created_at DESC')
            .all();

        const formatted = (results || []).map((b: any) => ({
            id: b.id,
            title: b.title,
            imageUrl: b.image_url,
            image_url: b.image_url,
            link: b.link,
            isActive: Boolean(b.is_active),
            is_active: Boolean(b.is_active),
            sortOrder: b.sort_order,
            sortorder: b.sort_order,
            createdAt: b.created_at
        }));

        return jsonResponse(formatted);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to fetch banners', details: err.message }, 500);
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const body: any = await context.request.json();
        const id = body.id || `banner-${Date.now().toString(36)}`;

        const sql = `
            INSERT INTO banners (id, title, image_url, link, is_active, sort_order)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                title = excluded.title,
                image_url = excluded.image_url,
                link = excluded.link,
                is_active = excluded.is_active,
                sort_order = excluded.sort_order
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.title || '',
            body.imageUrl || body.image_url || '',
            body.link || '',
            body.isActive !== undefined ? (body.isActive ? 1 : 0) : 1,
            body.sortOrder || body.sortorder || 0
        ).run();

        return jsonResponse({ success: true, id }, 201);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to save banner', details: err.message }, 500);
    }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const url = new URL(context.request.url);
        const id = url.searchParams.get('id');
        if (!id) return jsonResponse({ error: 'Banner ID required' }, 400);

        await context.env.DB
            .prepare('DELETE FROM banners WHERE id = ?')
            .bind(id)
            .run();

        return jsonResponse({ success: true, message: 'Banner deleted' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to delete banner', details: err.message }, 500);
    }
};
