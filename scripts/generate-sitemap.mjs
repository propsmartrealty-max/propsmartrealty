import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://propsmart.co.in';

// Helper to escape XML entities
function escapeXml(unsafe) {
    if (!unsafe) return '';
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Format current date in W3C datetime format (ISO 8601 with timezone)
function getW3CDate() {
    return new Date().toISOString();
}

// Format RFC 822 date for RSS feeds
function getRfc822Date() {
    return new Date().toUTCString();
}

async function run() {
    console.log("🗺️  Generating Google & Multi-Engine Hardened Sitemaps & RSS Feed...");

    const mockDataPath = resolve('./src/data/mockData.ts');
    const mockDataContent = readFileSync(mockDataPath, 'utf-8');

    // 1. Extract LOCATIONS
    let locations = [];
    const locMatch = mockDataContent.match(/export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS/);
    if (locMatch) {
        try {
            locations = JSON.parse(locMatch[1]);
        } catch (e) {
            console.warn("Could not parse LOCATIONS as JSON");
        }
    }

    // 2. Extract BUILDERS
    let builders = [];
    const bMatch = mockDataContent.match(/export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\n\nexport const PROJECTS/);
    if (bMatch) {
        try {
            builders = JSON.parse(bMatch[1]);
        } catch (e) {
            console.warn("Could not parse BUILDERS as JSON");
        }
    }

    // 3. Extract PROJECTS
    let projects = [];
    const pMatch = mockDataContent.match(/export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);/);
    if (pMatch) {
        try {
            projects = JSON.parse(pMatch[1]);
        } catch (e) {
            console.warn("Could not parse PROJECTS as JSON");
        }
    }

    const lastmod = getW3CDate();
    const rfcDate = getRfc822Date();

    // -------------------------------------------------------------
    // FILE 1: sitemap-main.xml (Core Landing Pages)
    // -------------------------------------------------------------
    const staticPages = [
        { url: '/', changefreq: 'daily', priority: '1.0' },
        { url: '/directory', changefreq: 'daily', priority: '0.95' },
        { url: '/search', changefreq: 'daily', priority: '0.9' },
        { url: '/pune', changefreq: 'daily', priority: '0.95' },
        { url: '/mumbai', changefreq: 'daily', priority: '0.95' },
        { url: '/thane', changefreq: 'daily', priority: '0.9' },
        { url: '/navi-mumbai', changefreq: 'daily', priority: '0.9' },
        { url: '/properties-in-pune', changefreq: 'daily', priority: '0.95' },
        { url: '/properties-in-mumbai', changefreq: 'daily', priority: '0.95' },
        { url: '/properties-in-maharashtra', changefreq: 'daily', priority: '0.95' },
        { url: '/flats-in-pune', changefreq: 'daily', priority: '0.95' },
        { url: '/flats-in-mumbai', changefreq: 'daily', priority: '0.95' },
        { url: '/flats-in-thane', changefreq: 'daily', priority: '0.9' },
        { url: '/compare', changefreq: 'weekly', priority: '0.7' },
        { url: '/about', changefreq: 'monthly', priority: '0.6' },
        { url: '/contact', changefreq: 'monthly', priority: '0.6' },
        { url: '/post-property', changefreq: 'monthly', priority: '0.6' }
    ];

    let sitemapMainXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
    for (const page of staticPages) {
        sitemapMainXml += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    }
    sitemapMainXml += `</urlset>`;
    writeFileSync(resolve('./public/sitemap-main.xml'), sitemapMainXml.trim());

    // -------------------------------------------------------------
    // FILE 2: sitemap-projects.xml (All Pune Projects with Image Sitemaps)
    // -------------------------------------------------------------
    let sitemapProjectsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
    for (const p of projects) {
        const projectUrl = `${BASE_URL}/project/${escapeXml(p.slug)}`;
        sitemapProjectsXml += `  <url>
    <loc>${projectUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
`;
        const mainImage = p.heroImage || p.image;
        const projectCity = p.city || 'Pune';
        if (mainImage) {
            const fullImgUrl = mainImage.startsWith('http') ? mainImage : `${BASE_URL}${mainImage}`;
            sitemapProjectsXml += `    <image:image>
      <image:loc>${escapeXml(fullImgUrl)}</image:loc>
      <image:title>${escapeXml(p.title)} ${escapeXml(p.location)} ${escapeXml(projectCity)}</image:title>
      <image:caption>${escapeXml(p.title)} in ${escapeXml(p.location)}, ${escapeXml(projectCity)} - 100% Brokerage Free on PROPSMART REALTY (MahaRERA: ${escapeXml(p.reraId || 'Verified')})</image:caption>
    </image:image>
`;
        }

        if (Array.isArray(p.floorPlans)) {
            for (const fp of p.floorPlans.slice(0, 3)) {
                if (fp.image) {
                    const fpUrl = fp.image.startsWith('http') ? fp.image : `${BASE_URL}${fp.image}`;
                    sitemapProjectsXml += `    <image:image>
      <image:loc>${escapeXml(fpUrl)}</image:loc>
      <image:title>${escapeXml(p.title)} ${escapeXml(fp.name || 'Floor Plan')}</image:title>
      <image:caption>${escapeXml(p.title)} ${escapeXml(fp.name || '')} Floor Plan - ${escapeXml(fp.carpetArea || '')} sq.ft</image:caption>
    </image:image>
`;
                }
            }
        }

        sitemapProjectsXml += `  </url>
`;
    }
    sitemapProjectsXml += `</urlset>`;
    writeFileSync(resolve('./public/sitemap-projects.xml'), sitemapProjectsXml.trim());

    // -------------------------------------------------------------
    // FILE 3: sitemap-builders.xml (All Developers with Brand Logos)
    // -------------------------------------------------------------
    let sitemapBuildersXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
    for (const b of builders) {
        const builderUrl = `${BASE_URL}/builder/${escapeXml(b.slug)}`;
        sitemapBuildersXml += `  <url>
    <loc>${builderUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
`;
        if (b.logo) {
            const logoUrl = b.logo.startsWith('http') ? b.logo : `${BASE_URL}${b.logo}`;
            sitemapBuildersXml += `    <image:image>
      <image:loc>${escapeXml(logoUrl)}</image:loc>
      <image:title>${escapeXml(b.name)} Official Developer Logo</image:title>
      <image:caption>All ${escapeXml(b.name)} residential township projects with authorized direct builder partner</image:caption>
    </image:image>
`;
        }
        sitemapBuildersXml += `  </url>
`;
    }
    sitemapBuildersXml += `</urlset>`;
    writeFileSync(resolve('./public/sitemap-builders.xml'), sitemapBuildersXml.trim());

    // -------------------------------------------------------------
    // FILE 4: sitemap-localities.xml (All Pune & Maharashtra Micro-market Landing Pages)
    // -------------------------------------------------------------
    let sitemapLocalitiesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
    for (const loc of locations) {
        const locSlug = loc.name.toLowerCase().trim().replace(/\s+/g, '-');
        const locUrl = `${BASE_URL}/flats-in-${escapeXml(locSlug)}`;
        sitemapLocalitiesXml += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
`;
        if (loc.image_url || loc.imageUrl) {
            const locImg = (loc.image_url || loc.imageUrl).startsWith('http')
                ? (loc.image_url || loc.imageUrl)
                : `${BASE_URL}${loc.image_url || loc.imageUrl}`;
            sitemapLocalitiesXml += `    <image:image>
      <image:loc>${escapeXml(locImg)}</image:loc>
      <image:title>Flats &amp; Properties in ${escapeXml(loc.name)}, Pune</image:title>
      <image:caption>Verified residential properties and projects in ${escapeXml(loc.name)} - 100% Brokerage Free</image:caption>
    </image:image>
`;
        }
        sitemapLocalitiesXml += `  </url>
`;
    }
    sitemapLocalitiesXml += `</urlset>`;
    writeFileSync(resolve('./public/sitemap-localities.xml'), sitemapLocalitiesXml.trim());

    // -------------------------------------------------------------
    // FILE 5: sitemap.xml (Root Sitemap Index for Search Engines)
    // -------------------------------------------------------------
    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-main.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-projects.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-builders.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-localities.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
    writeFileSync(resolve('./public/sitemap.xml'), sitemapIndexXml.trim());

    // -------------------------------------------------------------
    // FILE 6: feed.xml (Fresh RSS 2.0 Feed for Search Crawlers & Aggregators)
    // -------------------------------------------------------------
    let feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PROPSMART REALTY - Pune Real Estate Feed</title>
    <link>${BASE_URL}</link>
    <description>Latest MahaRERA verified residential properties and direct builder projects in Pune with 100% Zero Brokerage.</description>
    <language>en-in</language>
    <lastBuildDate>${rfcDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
`;

    for (const p of projects.slice(0, 30)) {
        const pUrl = `${BASE_URL}/project/${escapeXml(p.slug)}`;
        const pImg = p.heroImage || p.image || '';
        feedXml += `    <item>
      <title>${escapeXml(p.title)} in ${escapeXml(p.location)}, Pune</title>
      <link>${pUrl}</link>
      <guid isPermaLink="true">${pUrl}</guid>
      <pubDate>${rfcDate}</pubDate>
      <description><![CDATA[${escapeXml(p.title)} in ${escapeXml(p.location)}, Pune. Pricing: ${escapeXml(p.priceRange || 'On Request')}. Direct builder mandate with 100% Zero Brokerage. Verified MahaRERA ID: ${escapeXml(p.reraId || 'A031262401295')}]]></description>
${pImg ? `      <enclosure url="${escapeXml(pImg)}" type="image/webp" />` : ''}
    </item>
`;
    }

    feedXml += `  </channel>
</rss>`;
    writeFileSync(resolve('./public/feed.xml'), feedXml.trim());

    console.log(`✅ Multi-Engine Sitemaps & Feed successfully generated:`);
    console.log(`   - Root Index:       public/sitemap.xml`);
    console.log(`   - Main Pages:       public/sitemap-main.xml (${staticPages.length} URLs)`);
    console.log(`   - Projects:         public/sitemap-projects.xml (${projects.length} URLs with Image Sitemaps)`);
    console.log(`   - Builders:         public/sitemap-builders.xml (${builders.length} URLs with Logos)`);
    console.log(`   - Localities:       public/sitemap-localities.xml (${locations.length} URLs with /flats-in-*)`);
    console.log(`   - Property RSS:     public/feed.xml (30 fresh projects)`);
    console.log(`   Total URLs Indexed: ${staticPages.length + projects.length + builders.length + locations.length}`);
}

run().catch(console.error);
