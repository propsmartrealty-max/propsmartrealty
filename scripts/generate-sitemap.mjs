import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://propsmart.co.in';

const STATIC_ROUTES = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/search', changefreq: 'daily', priority: 0.9 },
    { url: '/directory', changefreq: 'weekly', priority: 0.8 },
    { url: '/compare', changefreq: 'weekly', priority: 0.7 },
    { url: '/about', changefreq: 'monthly', priority: 0.6 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/post-property', changefreq: 'monthly', priority: 0.6 }
];

const LOCALITIES = [
    'hinjewadi', 'baner', 'wakad', 'kharadi', 'balewadi', 'mahalunge',
    'pimple-nilakh', 'wagholi', 'tathawade', 'bavdhan', 'viman-nagar',
    'kothrud', 'magarpatta-city', 'ravet', 'punawale', 'aundh'
];

const FLAGSHIP_PROJECTS = [
    'kolte-patil-life-republic',
    'godrej-woodsville',
    'vtp-blue-waters',
    'gera-planet-of-joy',
    'panchshil-towers',
    'vj-yashwin-enchante',
    'kasturi-balmoral-riverside',
    'godrej-hillside',
    'kolte-patil-24k-opula',
    'vtp-altair'
];

const BUILDERS = [
    'kolte-patil-developers',
    'godrej-properties',
    'vtp-realty',
    'gera-developments',
    'panchshil-realty',
    'kasturi-housing',
    'vilas-javdekar-developers',
    'kumar-properties',
    'pride-purple-group',
    'rohan-builders',
    'nyati-group',
    'bramhacorp'
];

async function generateSitemap() {
    console.log("🗺️  Generating Cloudflare-optimized Sitemap...");

    const smStream = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

    smStream.pipe(writeStream);

    // 1. Static Routes
    STATIC_ROUTES.forEach(r => smStream.write(r));

    // 2. Project Pages
    FLAGSHIP_PROJECTS.forEach(slug => {
        smStream.write({
            url: `/project/${slug}`,
            changefreq: 'weekly',
            priority: 0.9
        });
    });

    // 3. Builder Pages
    BUILDERS.forEach(slug => {
        smStream.write({
            url: `/builder/${slug}`,
            changefreq: 'monthly',
            priority: 0.7
        });
    });

    // 4. Locality Pages
    LOCALITIES.forEach(slug => {
        smStream.write({
            url: `/flats-in-${slug}`,
            changefreq: 'weekly',
            priority: 0.85
        });
    });

    smStream.end();

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });

    console.log("✅ Cloudflare Sitemap generated successfully at public/sitemap.xml");
}

generateSitemap();
