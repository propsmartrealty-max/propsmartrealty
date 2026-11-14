// Cloudflare Pages Function: /api/storage/upload (R2 Object Storage)
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestPost: PagesFunction<Env> = async (context) => {
    // Check authentication if needed (admin only for direct media uploads)
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required to upload assets' }, 401);
    }

    try {
        const formData = await context.request.formData();
        const file = formData.get('file') as File | null;
        const bucketType = (formData.get('bucket') as string) || 'website-assets';

        if (!file) {
            return jsonResponse({ error: 'No file provided' }, 400);
        }

        // Limit file size to 10MB
        if (file.size > 10 * 1024 * 1024) {
            return jsonResponse({ error: 'File size exceeds 10MB limit' }, 400);
        }

        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const key = `${bucketType}/${Date.now()}_${sanitizedName}`;

        const arrayBuffer = await file.arrayBuffer();

        if (context.env.ASSETS_BUCKET) {
            await context.env.ASSETS_BUCKET.put(key, arrayBuffer, {
                httpMetadata: {
                    contentType: file.type || 'application/octet-stream',
                    cacheControl: 'public, max-age=31536000, immutable'
                }
            });
        }

        // Public URL route for R2 stored assets
        const publicUrl = `/api/storage/raw/${encodeURIComponent(key)}`;

        return jsonResponse({
            success: true,
            publicUrl,
            key,
            name: file.name,
            size: file.size
        }, 201);
    } catch (err: any) {
        return jsonResponse({ error: 'R2 Upload failed', details: err.message }, 500);
    }
};
