import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = 'propsmart.co.in';
const BASE_URL = `https://${HOST}`;
const KEY = 'e8f49a37c2b54d6189e27bf89d04a621';
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

async function submitIndexNow() {
    console.log("⚡ Submitting all URLs to IndexNow (Bing, Yandex, Seznam, Naver)...");

    const mockDataPath = resolve(__dirname, '../src/data/mockData.ts');
    const mockDataContent = readFileSync(mockDataPath, 'utf-8');

    // Extract all URLs
    const urls = [
        `${BASE_URL}/`,
        `${BASE_URL}/llms.txt`,
        `${BASE_URL}/llms-full.txt`,
        `${BASE_URL}/feed.xml`,
        `${BASE_URL}/directory`,
        `${BASE_URL}/search`,
        `${BASE_URL}/compare`,
        `${BASE_URL}/about`,
        `${BASE_URL}/contact`,
        `${BASE_URL}/post-property`,
        `${BASE_URL}/pune`
    ];

    // Localities
    const locMatch = mockDataContent.match(/export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS/);
    if (locMatch) {
        try {
            const locs = JSON.parse(locMatch[1]);
            locs.forEach(loc => {
                const slug = loc.name.toLowerCase().trim().replace(/\s+/g, '-');
                urls.push(`${BASE_URL}/flats-in-${slug}`);
            });
        } catch (e) {}
    }

    // Builders
    const bMatch = mockDataContent.match(/export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\n\nexport const PROJECTS/);
    if (bMatch) {
        try {
            const builders = JSON.parse(bMatch[1]);
            builders.forEach(b => urls.push(`${BASE_URL}/builder/${b.slug}`));
        } catch (e) {}
    }

    // Projects
    const pMatch = mockDataContent.match(/export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);/);
    if (pMatch) {
        try {
            const projects = JSON.parse(pMatch[1]);
            projects.forEach(p => urls.push(`${BASE_URL}/project/${p.slug}`));
        } catch (e) {}
    }

    console.log(`📡 Preparing batch payload with ${urls.length} URLs...`);

    const payload = {
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
    };

    const endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
        'https://yandex.com/indexnow',
        'https://search.seznam.cz/indexnow',
        'https://indexnow.naver.com/indexnow'
    ];

    for (const endpoint of endpoints) {
        try {
            console.log(`Submitting to ${endpoint}...`);
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            console.log(`Response from ${endpoint}: HTTP ${res.status} (${res.statusText || 'OK'})`);
        } catch (err) {
            console.warn(`Submission failed for ${endpoint}:`, err.message);
        }
    }

    // Ping Google & Bing Sitemap Crawlers
    const sitemapPings = [
        `https://www.google.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/sitemap.xml`)}`,
        `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/sitemap.xml`)}`
    ];

    for (const pingUrl of sitemapPings) {
        try {
            console.log(`Pinging search engine sitemap: ${pingUrl}...`);
            const pRes = await fetch(pingUrl);
            console.log(`Sitemap ping response: HTTP ${pRes.status}`);
        } catch (pErr) {
            console.warn(`Sitemap ping notice: ${pErr.message}`);
        }
    }

    console.log("✅ IndexNow submission complete!");
}

submitIndexNow().catch(console.error);
