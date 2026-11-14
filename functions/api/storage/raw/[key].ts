// Cloudflare Pages Function: /api/storage/raw/[key]
import { Env } from '../../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const key = decodeURIComponent(context.params.key as string);
        if (!context.env.ASSETS_BUCKET) {
            return new Response('R2 Storage Not Configured', { status: 503 });
        }

        const object = await context.env.ASSETS_BUCKET.get(key);
        if (!object) {
            return new Response('File Not Found', { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        headers.set('Access-Control-Allow-Origin', '*');

        return new Response(object.body, { headers });
    } catch (err: any) {
        return new Response(`Error retrieving file: ${err.message}`, { status: 500 });
    }
};
