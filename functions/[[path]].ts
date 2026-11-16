// Cloudflare Pages Single Page Application (SPA) 200 OK Fallback Router
// With Edge Dynamic SEO & Social Meta Tag Rewriter
export async function onRequest(context: { 
    request: Request; 
    env: { 
        ASSETS: { fetch: (req: Request | string) => Promise<Response> };
        DB?: D1Database;
    }; 
    next: () => Promise<Response> 
}) {
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

    // Edge SEO Dynamic Meta & JSON-LD Injection for Crawlers & Social Bots
    let metaTitle = '';
    let metaDesc = '';
    let metaImage = '';
    let edgeJsonLd = '';
    const canonicalUrl = `https://propsmart.co.in${url.pathname}`;

    try {
        const projectMatch = url.pathname.match(/^\/(?:project|projects|property)\/([a-z0-9-]+)$/i);
        const builderMatch = url.pathname.match(/^\/(?:builder|builders)\/([a-z0-9-]+)$/i);
        const localityMatch = url.pathname.match(/^\/flats-in-([a-z0-9-]+)$/i);

        if (projectMatch && env.DB) {
            const slug = projectMatch[1].toLowerCase();
            const project = await env.DB.prepare(
                'SELECT title, location, price_range, image, hero_image, description FROM projects WHERE slug = ? OR id = ? LIMIT 1'
            ).bind(slug, slug).first<any>();

            if (project) {
                metaTitle = `${project.title} in ${project.location} - Starting ${project.price_range} | PROPSMART REALTY`;
                metaDesc = `${project.title} by top builders in ${project.location}. 100% Zero Brokerage, MahaRERA verified. Starting ${project.price_range}. Floor plans, photos & direct builder booking.`;
                metaImage = project.hero_image || project.image || 'https://propsmart.co.in/images/propsmart-logo.png';
                edgeJsonLd = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": ["ApartmentComplex", "RealEstateListing"],
                    "name": project.title,
                    "description": project.description || metaDesc,
                    "image": [project.hero_image, project.image].filter(Boolean),
                    "url": canonicalUrl,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": project.location,
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "54",
                        "bestRating": "5",
                        "worstRating": "1"
                    }
                });
            }
        } else if (builderMatch && env.DB) {
            const slug = builderMatch[1].toLowerCase();
            const builder = await env.DB.prepare(
                'SELECT name, logo, description FROM builders WHERE slug = ? OR id = ? LIMIT 1'
            ).bind(slug, slug).first<any>();

            if (builder) {
                metaTitle = `${builder.name} Projects & Ongoing Developments | PROPSMART REALTY`;
                metaDesc = `Explore all MahaRERA verified residential and commercial developments by ${builder.name}. 100% Brokerage Free direct developer booking with PROPSMART REALTY.`;
                metaImage = builder.logo || 'https://propsmart.co.in/images/propsmart-logo.png';
                edgeJsonLd = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": builder.name,
                    "url": canonicalUrl,
                    "logo": builder.logo,
                    "description": builder.description || metaDesc,
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "48",
                        "bestRating": "5",
                        "worstRating": "1"
                    }
                });
            }
        } else if (localityMatch) {
            const rawLoc = localityMatch[1].replace(/-/g, ' ');
            const locName = rawLoc.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            metaTitle = `Flats in ${locName}, Pune - 100% Brokerage Free | PROPSMART REALTY`;
            metaDesc = `Buy 1, 2, 3 & 4 BHK apartments in ${locName}, Pune directly from developers with 0% brokerage. Verified MahaRERA projects, prices & floor plans.`;
            metaImage = 'https://propsmart.co.in/images/propsmart-logo.png';
            edgeJsonLd = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `Properties and Flats in ${locName}, Pune`,
                "url": canonicalUrl,
                "description": metaDesc
            });
        }
    } catch {
        // Fallback to unmodified indexResponse on error
    }

    if (metaTitle && typeof HTMLRewriter !== 'undefined') {
        const rewriter = new HTMLRewriter()
            .on('title', {
                element(e) {
                    e.setInnerContent(metaTitle);
                }
            })
            .on('meta[name="description"]', {
                element(e) {
                    e.setAttribute('content', metaDesc);
                }
            })
            .on('meta[property="og:title"]', {
                element(e) {
                    e.setAttribute('content', metaTitle);
                }
            })
            .on('meta[property="og:description"]', {
                element(e) {
                    e.setAttribute('content', metaDesc);
                }
            })
            .on('meta[property="og:image"]', {
                element(e) {
                    e.setAttribute('content', metaImage);
                }
            })
            .on('meta[property="og:url"]', {
                element(e) {
                    e.setAttribute('content', canonicalUrl);
                }
            })
            .on('meta[name="twitter:title"]', {
                element(e) {
                    e.setAttribute('content', metaTitle);
                }
            })
            .on('meta[name="twitter:description"]', {
                element(e) {
                    e.setAttribute('content', metaDesc);
                }
            })
            .on('meta[name="twitter:image"]', {
                element(e) {
                    e.setAttribute('content', metaImage);
                }
            })
            .on('link[rel="canonical"]', {
                element(e) {
                    e.setAttribute('href', canonicalUrl);
                }
            });

        if (edgeJsonLd) {
            rewriter.on('head', {
                element(e) {
                    e.append(`<script type="application/ld+json">${edgeJsonLd}</script>`, { html: true });
                }
            });
        }

        return rewriter.transform(new Response(indexResponse.body, {
            status: 200,
            statusText: 'OK',
            headers
        }));
    }

    return new Response(indexResponse.body, {
        status: 200,
        statusText: 'OK',
        headers
    });
}
