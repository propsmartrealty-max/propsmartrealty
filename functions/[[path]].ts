// Cloudflare Pages Single Page Application (SPA) 200 OK Fallback Router
export async function onRequest(context: { request: Request; env: { ASSETS: { fetch: (req: Request | string) => Promise<Response> } }; next: () => Promise<Response> }) {
    const { request, env } = context;
    const url = new URL(request.url);

    // If it's an API route, pass to next handlers in functions/api/
    if (url.pathname.startsWith('/api/')) {
        return context.next();
    }

    // Try fetching the exact static asset (e.g. sitemaps, static files)
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
        return assetResponse;
    }

    // Path did not match a static file: serve index.html with HTTP 200 OK for SPA client routing
    const indexUrl = new URL('/index.html', request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));

    const headers = new Headers(indexResponse.headers);
    headers.set('content-type', 'text/html; charset=utf-8');
    headers.set('cache-control', 'public, max-age=0, must-revalidate');

    return new Response(indexResponse.body, {
        status: 200,
        statusText: 'OK',
        headers
    });
}
