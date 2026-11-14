// Cloudflare Pages Function: /api/storage/delete
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const body: any = await context.request.json();
        const key = body.key || body.fileName;

        if (!key) return jsonResponse({ error: 'Storage key required' }, 400);

        if (context.env.ASSETS_BUCKET) {
            await context.env.ASSETS_BUCKET.delete(key);
        }

        return jsonResponse({ success: true, message: 'File deleted from R2' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to delete file from R2', details: err.message }, 500);
    }
};
