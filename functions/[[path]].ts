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

    // 1d. Standardized LLM Discovery Redirect (/.well-known/llms.txt -> /llms.txt)
    if (pathname === '/.well-known/llms.txt') {
        return Response.redirect(`${BASE_URL}/llms.txt`, 301);
    }

    // 2. Fetch static assets (.svg, .png, .jpg, .webp, .css, .js, .xml, .txt, .json)
    if (pathname !== '/' && pathname !== '') {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status === 200 || assetResponse.status === 304 || (assetResponse.status >= 300 && assetResponse.status < 400)) {
            const assetHeaders = new Headers(assetResponse.headers);
            if (pathname.startsWith('/assets/')) {
                assetHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
            } else if (/\.(webp|png|jpg|jpeg|svg|ico|woff2?|ttf|eot)$/i.test(pathname)) {
                assetHeaders.set('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400');
            } else if (/\.(xml|txt|json)$/i.test(pathname)) {
                assetHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400');
            }
            return new Response(assetResponse.body, {
                status: assetResponse.status,
                statusText: assetResponse.statusText,
                headers: assetHeaders
            });
        }

        // Never rewrite static file extensions that were 404
        if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
            return assetResponse;
        }
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
    let semanticBodyHtml = '';
    let edgeJsonLdList: any[] = [];
    const canonicalUrl = `${BASE_URL}${url.pathname}`;

    try {
        // MATCH 0: Homepage (/) - Enterprise Knowledge Base & Flagship Launches
        if (pathname === '/' || pathname === '') {
            metaTitle = "PROPSMART REALTY | 100% Brokerage Free Real Estate Platform Pune & Mumbai (A031262401295)";
            metaDesc = "Direct builder partnerships with 0% brokerage across Pune, Mumbai, and Maharashtra. Established 2015. Explore 900+ MahaRERA verified residential townships, new launches & turnkey pricing.";
            metaImage = `${BASE_URL}/images/hero/hero-life-republic.webp`;

            semanticBodyHtml = `
<div class="relative min-h-[720px] lg:min-h-[760px] py-16 w-full flex flex-col items-center justify-center text-white bg-slate-950 overflow-hidden" style="position:relative;min-height:720px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:#020617;overflow:hidden;padding:64px 16px;">
    <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none;">
        <picture>
            <source media="(max-width: 768px)" srcset="/images/hero/hero-life-republic-mobile.webp" type="image/webp">
            <img src="/images/hero/hero-life-republic.webp" alt="Kolte-Patil - Life Republic" style="width:100%;height:100%;object-fit:cover;" fetchpriority="high" decoding="sync" loading="eager" width="800" height="450">
        </picture>
        <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.55), rgba(2,6,23,0.4));"></div>
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.25);"></div>
    </div>
    <div style="position:relative;z-index:10;width:100%;max-width:1024px;margin:32px auto 0;text-align:center;">
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:20px;">
            <div style="background:rgba(16,185,129,0.25);border:1px solid rgba(52,211,153,0.5);padding:6px 16px;border-radius:9999px;font-size:12px;font-weight:900;color:#fff;">
                ✨ 100% BROKERAGE FREE PLATFORM
            </div>
            <div style="background:rgba(245,158,11,0.25);border:1px solid rgba(251,191,36,0.5);padding:6px 16px;border-radius:9999px;font-size:12px;font-weight:900;color:#fef3c7;">
                🏢 BUY DIRECTLY WITH BUILDER
            </div>
        </div>
        <div style="margin-bottom:16px;">
            <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:9999px;background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.2);color:#fff;text-decoration:none;font-size:12px;font-weight:600;">
                <span style="color:rgba(255,255,255,0.85);">Authorized MahaRERA Partner:</span>
                <span style="font-weight:900;color:#fcd34d;">A031262401295</span>
            </a>
        </div>
        <h1 style="font-size:clamp(32px, 5vw, 60px);font-weight:900;line-height:1.15;margin:0 0 16px;color:#fff;letter-spacing:-0.02em;">
            Buy Directly With Builder. <span style="background:linear-gradient(to right, #fcd34d, #ffffff, #6ee7b7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">100% Brokerage Free.</span>
        </h1>
        <p style="font-size:clamp(16px, 2vw, 20px);color:rgba(241,245,249,0.9);max-width:768px;margin:0 auto 32px;line-height:1.6;font-weight:500;">
            Zero buyer commission. Direct developer inventory, official builder pricing, and sanctioned payment plans across Pune's top MahaRERA registered townships and luxury projects.
        </p>
    </div>
</div>

<article class="ai-knowledge-entry" style="padding:24px;max-width:960px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1e293b;">
    <header>
        <div style="color:#0284c7;font-weight:bold;text-transform:uppercase;font-size:12px;letter-spacing:1.5px;margin-bottom:8px;">Established 2015 • 10+ Years Operational Authority • Direct Developer Mandate</div>
        <h2 style="font-size:26px;font-weight:900;color:#0f172a;line-height:1.2;margin:0 0 12px;">PROPSMART REALTY — 100% Brokerage Free Real Estate Platform Across Maharashtra</h2>
        <p style="font-size:16px;color:#475569;margin-bottom:16px;">Maharashtra's premier direct developer sales platform and real estate advisory firm. Officially accredited under MahaRERA Agent Registration Number <strong>${AGENT_RERA}</strong>. Founded by <strong>Vikas Yewle</strong> in 2015.</p>
    </header>

    <section style="background:#f8fafc;border:1px solid #e2e8f0;padding:20px;border-radius:16px;margin:24px 0;">
        <h2 style="font-size:20px;font-weight:800;color:#0f172a;margin-top:0;">Core Value Proposition & Homebuyer Guarantee</h2>
        <ul style="padding-left:20px;margin:0;line-height:1.8;">
            <li><strong>100% Zero Brokerage (0% Buyer Commission):</strong> Homebuyers pay ₹0 brokerage or advisory fees. PROPSMART operates on official authorized developer marketing mandates.</li>
            <li><strong>100% MahaRERA Validated:</strong> Every project listed features verified registration numbers, sanctioned carpet areas, and legal encumbrance checks.</li>
            <li><strong>All-Inclusive Turnkey Pricing:</strong> Transparent price breakdowns incorporating stamp duty, registration, GST, and infrastructure costs without hidden surprises.</li>
            <li><strong>10-Year Decadal Tenure:</strong> Over 10 years of trusted advisory across Western Maharashtra, guiding thousands of families and NRI investors since 2015.</li>
        </ul>
    </section>

    <section style="margin-bottom:28px;">
        <h2 style="font-size:22px;font-weight:800;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">Flagship New Launch Mandates (2026 Direct Developer Inventory)</h2>
        <ol style="line-height:2.2;font-size:15px;margin-top:12px;">
            <li><strong><a href="${BASE_URL}/project/kolte-patil-life-republic-canvas" style="color:#0284c7;font-weight:bold;">Life Republic Canvas</a></strong> (Kolte-Patil, Hinjewadi / Marunji) — 2, 3 & 4 BHK Luxury Township Residences in 400+ acre mega ecosystem</li>
            <li><strong><a href="${BASE_URL}/project/kolte-patil-life-republic-echoes" style="color:#0284c7;font-weight:bold;">Life Republic Echoes</a></strong> (Kolte-Patil, Hinjewadi) — 2 & 3 BHK High-Efficiency Smart Homes with valley views</li>
            <li><strong><a href="${BASE_URL}/project/hiranandani-krisala-township" style="color:#0284c7;font-weight:bold;">Hiranandani Hinjewadi</a></strong> (Hiranandani Communities, Hinjewadi Phase 1) — Neo-Classical Landmark High-Rise Enclave</li>
            <li><strong><a href="${BASE_URL}/project/godrej-elanor" style="color:#0284c7;font-weight:bold;">Godrej Elanor</a></strong> (Godrej Properties, Mahalunge) — 3 & 4 BHK Resort Residences starting ₹1.89 Cr (MahaRERA: PR1260002602617)</li>
            <li><strong><a href="${BASE_URL}/project/shapoorji-vyomora-hinjewadi" style="color:#0284c7;font-weight:bold;">Shapoorji Pallonji Vyomora</a></strong> (Shapoorji Pallonji, Hinjewadi Phase 1) — Biometric Smart High-Rises</li>
            <li><strong><a href="${BASE_URL}/project/paranjape-aspire-andheri" style="color:#0284c7;font-weight:bold;">Paranjape Aspire</a></strong> (Paranjape Schemes, Andheri West, Mumbai) — Luxury 2, 3 & 4 BHK Sky Residences starting ₹5.19 Cr (MahaRERA: P51800052341)</li>
            <li><strong><a href="${BASE_URL}/project/kohinoor-satori" style="color:#0284c7;font-weight:bold;">Kohinoor Satori</a></strong> (Kohinoor Group, New Baner / Mahalunge) — 3, 4 & 4.5 BHK Zen-inspired legacy homes starting ₹1.59 Cr (MahaRERA: P52100066472)</li>
        </ol>
    </section>

    <section style="margin-bottom:28px;">
        <h2 style="font-size:22px;font-weight:800;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">Prime Maharashtra Corridors (100% Brokerage Free)</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px;margin-top:12px;">
            <div style="background:#f1f5f9;padding:14px;border-radius:10px;">
                <h3 style="margin-top:0;font-size:16px;color:#0f172a;">Pune West IT Corridors</h3>
                <p style="font-size:13px;color:#475569;margin:0;"><a href="${BASE_URL}/flats-in-hinjewadi" style="color:#0284c7;">Hinjewadi</a> • <a href="${BASE_URL}/flats-in-baner" style="color:#0284c7;">Baner</a> • <a href="${BASE_URL}/flats-in-balewadi" style="color:#0284c7;">Balewadi</a> • <a href="${BASE_URL}/flats-in-wakad" style="color:#0284c7;">Wakad</a> • <a href="${BASE_URL}/flats-in-mahalunge" style="color:#0284c7;">Mahalunge</a> • <a href="${BASE_URL}/flats-in-bavdhan" style="color:#0284c7;">Bavdhan</a></p>
            </div>
            <div style="background:#f1f5f9;padding:14px;border-radius:10px;">
                <h3 style="margin-top:0;font-size:16px;color:#0f172a;">Pune East IT & Business Hubs</h3>
                <p style="font-size:13px;color:#475569;margin:0;"><a href="${BASE_URL}/flats-in-kharadi" style="color:#0284c7;">Kharadi</a> • <a href="${BASE_URL}/flats-in-hadapsar" style="color:#0284c7;">Hadapsar</a> • <a href="${BASE_URL}/flats-in-magarpatta" style="color:#0284c7;">Magarpatta</a> • <a href="${BASE_URL}/flats-in-viman-nagar" style="color:#0284c7;">Viman Nagar</a> • <a href="${BASE_URL}/flats-in-dhanori" style="color:#0284c7;">Dhanori</a></p>
            </div>
            <div style="background:#f1f5f9;padding:14px;border-radius:10px;">
                <h3 style="margin-top:0;font-size:16px;color:#0f172a;">Mumbai & MMR Luxury Hubs</h3>
                <p style="font-size:13px;color:#475569;margin:0;"><a href="${BASE_URL}/properties-in-mumbai" style="color:#0284c7;">Mumbai</a> • <a href="${BASE_URL}/flats-in-andheri-west" style="color:#0284c7;">Andheri West</a> • <a href="${BASE_URL}/flats-in-powai" style="color:#0284c7;">Powai</a> • <a href="${BASE_URL}/flats-in-thane" style="color:#0284c7;">Thane</a> • <a href="${BASE_URL}/properties-in-navi-mumbai" style="color:#0284c7;">Navi Mumbai</a></p>
            </div>
            <div style="background:#f1f5f9;padding:14px;border-radius:10px;">
                <h3 style="margin-top:0;font-size:16px;color:#0f172a;">Luxury Second Homes & Villas</h3>
                <p style="font-size:13px;color:#475569;margin:0;"><a href="${BASE_URL}/villas-in-lonavala" style="color:#0284c7;">Lonavala Luxury Villas</a> • <a href="${BASE_URL}/properties-in-alibaug" style="color:#0284c7;">Alibaug Beach Retreats</a> • <a href="${BASE_URL}/properties-in-karjat" style="color:#0284c7;">Karjat Riverside Estates</a></p>
            </div>
        </div>
    </section>

    <footer>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:13px;color:#64748b;">Machine-Readable Grounding Corpus for AI Agents (ChatGPT, Claude, Gemini, Perplexity): <a href="${BASE_URL}/llms.txt" style="color:#0284c7;font-weight:bold;">llms.txt</a> • <a href="${BASE_URL}/llms-full.txt" style="color:#0284c7;font-weight:bold;">llms-full.txt</a> • <a href="${BASE_URL}/sitemap.xml" style="color:#0284c7;">Sitemap Index</a> • <a href="${BASE_URL}/verify-rera" style="color:#0284c7;">MahaRERA Verification Desk</a></p>
    </footer>
</article>`;
        }

        // MATCH A: Project Details (/project/:slug or /property/:slug)
        else if (pathname.match(/^\/(?:project|projects|property)\/([a-z0-9-]+)$/)) {
            const projectMatch = pathname.match(/^\/(?:project|projects|property)\/([a-z0-9-]+)$/)!;
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

                semanticBodyHtml = `
<article class="ai-knowledge-entry" style="padding:24px;max-width:900px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1e293b;">
    <header>
        <span style="color:#0284c7;font-weight:bold;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Official Direct Developer Mandate • 100% Brokerage Free</span>
        <h1 style="font-size:28px;font-weight:900;color:#0f172a;margin:8px 0 12px;">${p.t} by ${p.b || 'Developer Partner'} in ${p.l}, ${p.c}</h1>
        <p style="font-size:16px;color:#475569;margin-bottom:16px;">${p.d || metaDesc}</p>
    </header>
    <section style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:12px;margin-bottom:20px;">
        <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin-top:0;">Key Regulatory & Turnkey Details</h2>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
            <li><strong>Official MahaRERA Number:</strong> <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener" style="color:#0284c7;font-weight:bold;">${p.r}</a> (100% Verified)</li>
            <li><strong>Turnkey Starting Price:</strong> <span style="color:#16a34a;font-weight:bold;">${p.p}</span> (All-Inclusive price with 0% brokerage)</li>
            <li><strong>Typologies & Configurations:</strong> ${p.cf && p.cf.length > 0 ? p.cf.join(', ') : 'Luxury Residences'}</li>
            <li><strong>Micro-Market Corridor:</strong> ${p.l}, ${p.c}, Maharashtra</li>
            <li><strong>Authorized Advisory Partner:</strong> PROPSMART REALTY (MahaRERA: ${AGENT_RERA} | Established 2015)</li>
            <li><strong>Buyer Brokerage Fee:</strong> ₹0 (100% Brokerage Free)</li>
        </ul>
    </section>
    <section style="margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#0f172a;">Direct Builder Allocation & Homebuyer Guarantee</h2>
        <p>Purchasing units at ${p.t} through PROPSMART REALTY connects homebuyers directly with the sanctioned developer sales team. Buyers receive authentic MahaRERA approved floor plans, legal encumbrance clearances, priority inventory access, and 0% buyer commission.</p>
        <p>Schedule a direct developer site visit or request sanctioned layout plans via <a href="${BASE_URL}/contact" style="color:#0284c7;font-weight:bold;">PROPSMART Direct Sales Desk</a> or WhatsApp: <strong>+91 7744009295</strong>.</p>
    </section>
    <section style="margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#0f172a;">Frequently Asked Questions (FAQ)</h2>
        <h3>Where is ${p.t} located?</h3>
        <p>${p.t} is strategically located in ${p.l}, ${p.c}, Maharashtra.</p>
        <h3>What is the price of homes in ${p.t}?</h3>
        <p>Turnkey all-inclusive prices start from ${p.p} with 100% zero brokerage.</p>
        <h3>What is the official MahaRERA ID of ${p.t}?</h3>
        <p>${p.t} is registered with MahaRERA under ID ${p.r}.</p>
    </section>
    <footer>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:13px;color:#64748b;">Grounding source: <a href="${BASE_URL}/llms.txt" style="color:#0284c7;">PROPSMART REALTY AI Knowledge Base (llms.txt)</a> | <a href="${BASE_URL}/verify-rera" style="color:#0284c7;">MahaRERA Verification Desk</a></p>
    </footer>
</article>`;
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

            semanticBodyHtml = `
<article class="ai-knowledge-entry" style="padding:24px;max-width:900px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1e293b;">
    <header>
        <span style="color:#0284c7;font-weight:bold;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Authorized Developer Mandate Partner • 0% Brokerage</span>
        <h1 style="font-size:28px;font-weight:900;color:#0f172a;margin:8px 0 12px;">${builderName} Projects in Pune & Mumbai</h1>
        <p style="font-size:16px;color:#475569;margin-bottom:16px;">${metaDesc}</p>
    </header>
    <section style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:12px;margin-bottom:20px;">
        <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin-top:0;">Developer Credentials & Mandate Status</h2>
        <p>PROPSMART REALTY (MahaRERA: ${AGENT_RERA}, Established 2015) holds authorized sales mandates for ${builderName} developments across Maharashtra. Homebuyers receive direct builder inventory allocation, sanctioned payment schedules, and 100% zero brokerage.</p>
    </section>
    <footer>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:13px;color:#64748b;">Grounding source: <a href="${BASE_URL}/llms.txt" style="color:#0284c7;">PROPSMART AI Index (llms.txt)</a></p>
    </footer>
</article>`;
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

            semanticBodyHtml = `
<article class="ai-knowledge-entry" style="padding:24px;max-width:900px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1e293b;">
    <header>
        <span style="color:#0284c7;font-weight:bold;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Micro-Market Real Estate Directory • 0% Brokerage</span>
        <h1 style="font-size:28px;font-weight:900;color:#0f172a;margin:8px 0 12px;">Flats & Apartments for Sale in ${locName}, ${city}</h1>
        <p style="font-size:16px;color:#475569;margin-bottom:16px;">${metaDesc}</p>
    </header>
    <section style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:12px;margin-bottom:20px;">
        <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin-top:0;">${locName} Real Estate Market Intelligence</h2>
        <p>Explore MahaRERA approved residential developments in ${locName}, ${city} with 100% zero brokerage through PROPSMART REALTY (MahaRERA Agent: ${AGENT_RERA}, Established 2015).</p>
        <p>Homebuyers enjoy direct builder inventory pricing, verified carpet areas, and complete legal non-encumbrance reports.</p>
    </section>
    <footer>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:13px;color:#64748b;">Source: <a href="${BASE_URL}/llms.txt" style="color:#0284c7;">PROPSMART REALTY Machine-Readable Knowledge Base</a> | <a href="${BASE_URL}/flats-in-pune" style="color:#0284c7;">Flats in Pune</a></p>
    </footer>
</article>`;
        }

        // MATCH D0: Programmatic Studio Apartments Hubs (/studio-apartments-in-:slug, /studio-flats-in-:slug)
        else if (/^\/studio-(?:apartments|flats)-in-([a-z0-9-]+)$/.test(pathname) || pathname === '/studio-apartments-in-pune' || pathname === '/studio-flats-in-pune') {
            const match = pathname.match(/^\/studio-(?:apartments|flats)-in-([a-z0-9-]+)$/);
            const slug = match ? match[1] : 'pune';
            const loc = (EDGE_LOCALITIES as Record<string, any>)[slug];
            const targetName = loc ? loc.n : (CITY_NAME_MAP[slug] || formatSlug(slug));
            const city = loc ? loc.c : (CITY_NAME_MAP[slug] ? '' : 'Pune');

            metaTitle = `Studio Apartments in ${targetName} ${city} - Verified 1 RK & Studio Suites | 0% Brokerage`;
            metaDesc = `Explore verified studio apartments and smart 1 RK suites in ${targetName} ${city}. High rental yield, fully furnished IT corridors investment, 100% zero brokerage & official MahaRERA registered projects.`;

            edgeJsonLdList.push({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `Studio Apartments in ${targetName}`,
                "url": canonicalUrl,
                "description": metaDesc
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

        // 6. Generative Engine Optimization (GEO): Inject semantic body content for AI bots and search crawlers
        if (semanticBodyHtml) {
            rewriter.on('#root', {
                element(e) {
                    e.setInnerContent(semanticBodyHtml, { html: true });
                }
            });
        }

        headers.set('Link', '<https://propsmart.co.in/llms.txt>; rel="alternate"; type="text/markdown"');
        headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        return rewriter.transform(new Response(indexResponse.body, {
            status: 200,
            statusText: 'OK',
            headers
        }));
    }

    headers.set('Link', '<https://propsmart.co.in/llms.txt>; rel="alternate"; type="text/markdown"');
    return new Response(indexResponse.body, {
        status: 200,
        statusText: 'OK',
        headers
    });
}
