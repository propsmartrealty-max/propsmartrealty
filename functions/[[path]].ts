// Cloudflare Pages Single Page Application (SPA) 200 OK Fallback Router
// With High-Performance Edge SSR Dynamic SEO, Social Meta & Schema.org Rewriter
import { EDGE_PROJECTS, EDGE_BUILDERS, EDGE_LOCALITIES } from './edgeSeoData';

const BASE_URL = 'https://propsmart.co.in';
const DEFAULT_IMAGE = `${BASE_URL}/images/propsmart-logo.png`;
const AGENT_RERA = 'A031262401295';

const CITY_NAME_MAP: Record<string, string> = {
    'pune': 'Pune',
    'mumbai': 'Mumbai',
    'thane': 'Thane',
    'navi-mumbai': 'Navi Mumbai',
    'lonavala': 'Lonavala',
    'khandala': 'Lonavala',
    'alibaug': 'Alibaug',
    'karjat': 'Karjat',
    'maharashtra': 'Maharashtra'
};

function formatSlug(slug: string): string {
    return slug
        .replace(/^b-/, '')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

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
    const pathname = url.pathname.toLowerCase().replace(/\/$/, '') || '/';

    // 1. API routes pass directly to functions/api/
    if (pathname.startsWith('/api/')) {
        return context.next();
    }

    // 1b. Trailing slash canonicalization (301 Permanent Redirect)
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
        const cleanPath = url.pathname.replace(/\/+$/, '');
        return Response.redirect(`${BASE_URL}${cleanPath}${url.search}`, 301);
    }

    // 1c. Historical 10-Year Domain Backlink Preservation (301 Permanent Redirects)
    const legacyProjectMatch = pathname.match(/^\/(?:property-detail|project-detail|properties-details|property-details|view-property|view-project)\/([a-z0-9-]+)$/);
    if (legacyProjectMatch) {
        return Response.redirect(`${BASE_URL}/project/${legacyProjectMatch[1]}`, 301);
    }

    const legacyBuilderMatch = pathname.match(/^\/(?:developer|developers)\/([a-z0-9-]+)$/);
    if (legacyBuilderMatch) {
        return Response.redirect(`${BASE_URL}/builder/${legacyBuilderMatch[1]}`, 301);
    }

    if (/^\/(?:blog|blogs|article|articles|post|posts|news|category|categories|tag|tags)(?:\/.*)?$/.test(pathname) || /^\/20\d\d(?:\/.*)?$/.test(pathname)) {
        return Response.redirect(`${BASE_URL}/directory`, 301);
    }

    // 2. Fetch static assets (.svg, .png, .jpg, .webp, .css, .js, .xml, .txt, .json)
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status === 200 || assetResponse.status === 304 || (assetResponse.status >= 300 && assetResponse.status < 400)) {
        return assetResponse;
    }

    // Never rewrite static file extensions that were 404
    if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
        return assetResponse;
    }

    // 3. Fallback to index.html with HTTP 200 OK for SPA routing
    const indexUrl = new URL('/', request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));

    const headers = new Headers(indexResponse.headers);
    headers.set('content-type', 'text/html; charset=utf-8');
    headers.set('cache-control', 'public, max-age=0, must-revalidate');
    headers.delete('location');

    // 4. Edge Dynamic SEO & Structured Data Generation
    let metaTitle = '';
    let metaDesc = '';
    let metaImage = DEFAULT_IMAGE;
    let edgeJsonLdList: any[] = [];
    const canonicalUrl = `${BASE_URL}${url.pathname}`;

    try {
        // MATCH A: Project Details (/project/:slug or /property/:slug)
        const projectMatch = pathname.match(/^\/(?:project|projects|property)\/([a-z0-9-]+)$/);
        if (projectMatch) {
            const slug = projectMatch[1];
            const p = (EDGE_PROJECTS as Record<string, any>)[slug];
            if (p) {
                const configStr = p.cf && p.cf.length > 0 ? ` (${p.cf.join(', ')})` : '';
                const priceStr = p.p && !p.p.toLowerCase().includes('request') ? ` - Starting ${p.p}` : '';
                const reraStr = p.r ? `MahaRERA: ${p.r}` : 'MahaRERA Verified';

                metaTitle = `${p.t}${configStr} in ${p.l}, ${p.c}${priceStr} | Floor Plans & ${reraStr} (0% Brokerage)`;
                metaDesc = `Explore ${p.t} in ${p.l}, ${p.c}. Direct builder inventory with 100% zero brokerage, official ${reraStr}, sanctioned usable carpet area floor plans & turnkey pricing starting ${p.p}.`;
                metaImage = p.i || DEFAULT_IMAGE;

                // Rich ApartmentComplex Schema
                edgeJsonLdList.push({
                    "@context": "https://schema.org",
                    "@type": ["ApartmentComplex", "RealEstateListing"],
                    "name": p.t,
                    "description": p.d || metaDesc,
                    "image": [p.i].filter(Boolean),
                    "url": canonicalUrl,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": p.l,
                        "addressLocality": p.l,
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "priceCurrency": "INR",
                        "price": p.p,
                        "availability": "https://schema.org/InStock"
                    },
                    "provider": {
                        "@type": "RealEstateAgent",
                        "@id": `${BASE_URL}/#organization`,
                        "name": "PROPSMART REALTY",
                        "url": BASE_URL,
                        "license": AGENT_RERA,
                        "foundingDate": "2015",
                        "telephone": "+91-7744009295"
                    }
                });

                // BreadcrumbList Schema
                edgeJsonLdList.push({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                        { "@type": "ListItem", "position": 2, "name": p.c, "item": `${BASE_URL}/properties-in-${p.c.toLowerCase().replace(/\s+/g, '-')}` },
                        { "@type": "ListItem", "position": 3, "name": p.l, "item": `${BASE_URL}/flats-in-${p.l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` },
                        { "@type": "ListItem", "position": 4, "name": p.t, "item": canonicalUrl }
                    ]
                });

                // FAQPage Schema
                edgeJsonLdList.push({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": `Where is ${p.t} located?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `${p.t} is located in ${p.l}, ${p.c}, offering prime connectivity to IT hubs and expressways.`
                            }
                        },
                        {
                            "@type": "Question",
                            "name": `What is the price of apartments in ${p.t}?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `Turnkey all-inclusive prices at ${p.t} start from ${p.p} with 100% zero brokerage through direct developer partner booking.`
                            }
                        },
                        {
                            "@type": "Question",
                            "name": `What is the MahaRERA registration number of ${p.t}?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `${p.t} is registered with the Maharashtra Real Estate Regulatory Authority under MahaRERA ID ${p.r}.`
                            }
                        }
                    ]
                });
            }
        }

        // MATCH B: Builder Profile (/builder/:slug)
        else if (pathname.startsWith('/builder/')) {
            const slug = pathname.replace('/builder/', '');
            const b = (EDGE_BUILDERS as Record<string, any>)[slug];
            const builderName = b ? b.n : formatSlug(slug);

            metaTitle = `${builderName} Projects in Pune & Mumbai - Ongoing & New Launches | 0% Brokerage`;
            metaDesc = `Explore all MahaRERA verified residential and commercial developments by ${builderName}. Direct developer inventory, zero buyer commission, verified floor plans & prices.`;
            metaImage = b ? b.l : DEFAULT_IMAGE;

            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": builderName,
                "url": canonicalUrl,
                "logo": metaImage,
                "description": b ? b.d : metaDesc
            });

            // Breadcrumbs for Builder
            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                    { "@type": "ListItem", "position": 2, "name": "Developers", "item": `${BASE_URL}/directory?view=builders` },
                    { "@type": "ListItem", "position": 3, "name": builderName, "item": canonicalUrl }
                ]
            });

            // FAQs for Builder
            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `How can I buy ${builderName} properties with 0% brokerage?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `PROPSMART REALTY is an authorized direct sales partner for ${builderName}. Homebuyers pay 100% zero brokerage and get direct developer pricing.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Are all ${builderName} projects on PROPSMART MahaRERA verified?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes. Every ${builderName} residential and commercial development listed on PROPSMART has verified MahaRERA registration numbers and sanctioned layout plans.`
                        }
                    }
                ]
            });
        }

        // MATCH C: Locality Hubs (/flats-in-:slug)
        else if (pathname.startsWith('/flats-in-')) {
            const slug = pathname.replace('/flats-in-', '');
            const loc = (EDGE_LOCALITIES as Record<string, any>)[slug];
            const locName = loc ? loc.n : formatSlug(slug);
            const city = loc ? loc.c : 'Pune';

            metaTitle = `Flats in ${locName}, ${city} - 1, 2, 3 BHK Apartments | 100% Brokerage Free`;
            metaDesc = `Buy verified 1, 2, 3 & 4 BHK apartments in ${locName}, ${city} directly from builders with 0% brokerage. Verified MahaRERA projects, sanctioned floor plans & direct prices.`;

            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `Properties and Flats in ${locName}, ${city}`,
                "url": canonicalUrl,
                "description": metaDesc
            });

            // Breadcrumbs for Locality
            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                    { "@type": "ListItem", "position": 2, "name": city, "item": `${BASE_URL}/properties-in-${city.toLowerCase().replace(/\s+/g, '-')}` },
                    { "@type": "ListItem", "position": 3, "name": `Flats in ${locName}`, "item": canonicalUrl }
                ]
            });

            // High-Intent Locality FAQs
            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Can I buy flats in ${locName}, ${city} with 0% brokerage?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes. PROPSMART REALTY operates strictly on direct builder sales mandates. Homebuyers pay 100% zero brokerage and get direct developer pricing in ${locName}.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Are residential projects in ${locName} MahaRERA verified?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `All residential developments in ${locName} featured on PROPSMART REALTY have verified MahaRERA registration numbers, sanctioned carpet areas, and government compliance certificates.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `What apartment configurations are available in ${locName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `${locName} offers 1 BHK, 2 BHK, 3 BHK, and 4 BHK luxury residences and penthouses across ready-to-move and new launch developments.`
                        }
                    }
                ]
            });
        }

        // MATCH D: Programmatic BHK Hubs (/:bhk-flats-in-:slug)
        else if (/^\/([1-5])-bhk-flats-in-([a-z0-9-]+)$/.test(pathname)) {
            const match = pathname.match(/^\/([1-5])-bhk-flats-in-([a-z0-9-]+)$/)!;
            const bhk = `${match[1]} BHK`;
            const slug = match[2];
            const loc = (EDGE_LOCALITIES as Record<string, any>)[slug];
            const targetName = loc ? loc.n : (CITY_NAME_MAP[slug] || formatSlug(slug));
            const city = loc ? loc.c : (CITY_NAME_MAP[slug] ? '' : 'Pune');

            metaTitle = `${bhk} Flats in ${targetName} ${city} - Prices, Floor Plans & RERA Verified | 0% Brokerage`;
            metaDesc = `Find verified ${bhk} apartments in ${targetName} ${city}. 100% zero brokerage through direct developer mandates. Sanctioned usable carpet area floor plans & pricing.`;

            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `${bhk} Flats in ${targetName}`,
                "url": canonicalUrl,
                "description": metaDesc
            });
        }

        // MATCH E: City Landings (/pune, /mumbai, /properties-in-*)
        else if (pathname.startsWith('/properties-in-') || CITY_NAME_MAP[pathname.replace(/^\//, '')]) {
            const raw = pathname.startsWith('/properties-in-') ? pathname.replace('/properties-in-', '') : pathname.replace(/^\//, '');
            const cityName = CITY_NAME_MAP[raw] || formatSlug(raw);

            metaTitle = `Properties in ${cityName} | Luxury Flats & Apartments - 100% Brokerage Free | PROPSMART`;
            metaDesc = `Explore verified luxury residential properties and apartments in ${cityName}, Maharashtra. Buy directly from top builders with 0% brokerage, MahaRERA verification & direct pricing.`;

            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `Real Estate Properties in ${cityName}`,
                "url": canonicalUrl,
                "description": metaDesc
            });
        }

        // MATCH F: Status Landings (/ready-to-move-flats-in-*, /new-launch-projects-in-*)
        else if (/^\/(ready-to-move-flats|new-launch-projects|upcoming-projects)-in-([a-z0-9-]+)$/.test(pathname)) {
            const match = pathname.match(/^\/(ready-to-move-flats|new-launch-projects|upcoming-projects)-in-([a-z0-9-]+)$/)!;
            const statusLabel = match[1].includes('ready') ? 'Ready to Move' : 'New Launch';
            const slug = match[2];
            const loc = (EDGE_LOCALITIES as Record<string, any>)[slug];
            const targetName = loc ? loc.n : (CITY_NAME_MAP[slug] || formatSlug(slug));

            metaTitle = `${statusLabel} Flats in ${targetName} - Direct Builder Booking | 0% Brokerage`;
            metaDesc = `Explore ${statusLabel.toLowerCase()} residential projects in ${targetName}. Verified MahaRERA certificates, sanctioned floor plans, 100% zero brokerage & instant site visits.`;
        }

        // MATCH G: Luxury Villas & Penthouses (/villas-in-*, /penthouses-in-*)
        else if (/^\/(?:luxury-)?villas-in-([a-z0-9-]+)$/.test(pathname) || pathname.startsWith('/penthouses-in-')) {
            const rawSlug = pathname.replace(/^\/(?:luxury-)?villas-in-/, '').replace(/^\/penthouses-in-/, '');
            const isVilla = pathname.includes('villa');
            const targetName = CITY_NAME_MAP[rawSlug] || formatSlug(rawSlug);

            metaTitle = `Luxury ${isVilla ? 'Villas & Row Houses' : 'Penthouses'} in ${targetName} - 100% Brokerage Free`;
            metaDesc = `Experience ultra-luxury ${isVilla ? 'villas and row houses' : 'penthouse suites'} in ${targetName}, Maharashtra. Direct developer mandates, private estates, zero brokerage.`;
        }

        // MATCH H: MahaRERA Verification Desk (/verify-rera, /maharera-verification)
        else if (pathname === '/verify-rera' || pathname === '/maharera-verification') {
            metaTitle = `MahaRERA Project & Agent Verification Desk (A031262401295) | PROPSMART REALTY`;
            metaDesc = `Verify any Maharashtra real estate project registration, QR code, promoter legal title, and CERSAI encumbrance report under MahaRERA Circular 46/2023 with PROPSMART REALTY.`;
        }
    } catch {
        // Fallback to unmodified response
    }

    // 5. HTMLRewriter Edge Streaming Transformation
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

        if (edgeJsonLdList.length > 0) {
            const scriptsHtml = edgeJsonLdList
                .map(json => `<script type="application/ld+json">${JSON.stringify(json)}</script>`)
                .join('\n');
            rewriter.on('head', {
                element(e) {
                    e.append(scriptsHtml, { html: true });
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
