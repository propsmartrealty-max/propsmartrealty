// Cloudflare Pages Function: /api/image-proxy
// High-Speed Edge Image Proxy & Resilient CDN Cache
import { Env } from './_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const url = new URL(context.request.url);
        const targetUrl = url.searchParams.get('url');

        if (!targetUrl) {
            return new Response('Target image URL is required', { status: 400 });
        }

        // Only allow trusted HTTP/HTTPS image schemes
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
            return new Response('Invalid target URL protocol', { status: 400 });
        }

        // Fetch image with stripped referrer to bypass third-party hotlink blocks
        const imageRes = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; PropsmartCDN/1.0; +https://propsmart.co.in)'
            }
        });

        if (!imageRes.ok) {
            return new Response('Failed to retrieve upstream image', { status: imageRes.status });
        }

        const contentType = imageRes.headers.get('content-type') || 'image/jpeg';
        const headers = new Headers();
        headers.set('Content-Type', contentType);
        headers.set('Access-Control-Allow-Origin', '*');
        // Cache at Cloudflare Edge for 30 days (2,592,000s) and browser for 7 days (604,800s)
        headers.set('Cache-Control', 'public, max-age=604800, s-maxage=2592000, stale-while-revalidate=86400');
        headers.set('X-Edge-Image-Proxy', 'Cloudflare-Pages-Edge');

        return new Response(imageRes.body, {
            status: 200,
            headers
        });

    } catch (err: any) {
        return new Response(`Image proxy error: ${err.message}`, { status: 500 });
    }
};
