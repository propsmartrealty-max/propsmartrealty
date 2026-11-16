// Cloudflare Pages Single Page Application (SPA) 200 OK Fallback Router
export async function onRequest(context: { request: Request; env: { ASSETS: { fetch: (req: Request | string) => Promise<Response> } }; next: () => Promise<Response> }) {
    const { request, env } = context;
    const url = new URL(request.url);

    // If it's an API route, pass to next handlers in functions/api/
    if (url.pathname.startsWith('/api/')) {
        return context.next();
    }

    // Try fetching the exact static asset or redirect
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status === 200 || assetResponse.status === 304 || (assetResponse.status >= 300 && assetResponse.status < 400)) {
        return assetResponse;
    }

    // Do NOT serve index.html for missing static files (.svg, .png, .jpg, .webp, .css, .js, .ico, .xml)
    // This prevents <img> tags from receiving HTML and breaking image fallbacks
    const isStaticAsset = /\.[a-zA-Z0-9]+$/.test(url.pathname);
    if (isStaticAsset) {
        return assetResponse;
    }

    // Path did not match a static file: serve index.html with HTTP 200 OK for SPA client routing
    const indexUrl = new URL('/', request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));

    const headers = new Headers(indexResponse.headers);
    headers.set('content-type', 'text/html; charset=utf-8');
    headers.set('cache-control', 'public, max-age=0, must-revalidate');
    headers.delete('location');

    return new Response(indexResponse.body, {
        status: 200,
        statusText: 'OK',
        headers
    });
}
