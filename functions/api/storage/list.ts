// Cloudflare Pages Function: /api/storage/list
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const url = new URL(context.request.url);
        const prefix = url.searchParams.get('prefix') || '';

        if (!context.env.ASSETS_BUCKET) {
            return jsonResponse([]);
        }

        const listed = await context.env.ASSETS_BUCKET.list({
            prefix,
            limit: 100
        });

        const files = listed.objects.map(obj => ({
            name: obj.key.split('/').pop() || obj.key,
            key: obj.key,
            url: `/api/storage/raw/${encodeURIComponent(obj.key)}`,
            size: obj.size,
            created_at: obj.uploaded.toISOString()
        }));

        return jsonResponse(files);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to list R2 files', details: err.message }, 500);
    }
};
