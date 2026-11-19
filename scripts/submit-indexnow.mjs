import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = 'propsmart.co.in';
const BASE_URL = `https://${HOST}`;
const KEY = 'e8f49a37c2b54d6189e27bf89d04a621';
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

async function submitIndexNow() {
    console.log("⚡ Extracting all verified URLs from sitemaps for IndexNow bulk submission...");

    const sitemapFiles = [
        'sitemap-main.xml',
        'sitemap-projects.xml',
        'sitemap-builders.xml',
        'sitemap-localities.xml',
        'sitemap-pseo-configurations.xml',
        'sitemap-pseo-status.xml',
        'sitemap-pseo-budget.xml',
        'sitemap-pseo-builders.xml'
    ];

    const urlSet = new Set([
        `${BASE_URL}/`,
        `${BASE_URL}/llms.txt`,
        `${BASE_URL}/llms-full.txt`,
        `${BASE_URL}/feed.xml`,
        `${BASE_URL}/sitemap.xml`
    ]);

    for (const file of sitemapFiles) {
        const fullPath = resolve(__dirname, `../public/${file}`);
        if (existsSync(fullPath)) {
            const content = readFileSync(fullPath, 'utf-8');
            const locMatches = content.match(/<loc>(https:\/\/propsmart\.co\.in[^<]+)<\/loc>/g);
            if (locMatches) {
                for (const m of locMatches) {
                    const clean = m.replace('<loc>', '').replace('</loc>', '').trim();
                    urlSet.add(clean);
                }
            }
        }
    }

    const urls = Array.from(urlSet);
    console.log(`📡 Extracted ${urls.length} distinct canonical URLs ready for IndexNow submission.`);

    // IndexNow allows up to 10,000 URLs per request
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
        'https://search.seznam.cz/indexnow'
    ];

    for (const endpoint of endpoints) {
        try {
            console.log(`Submitting ${urls.length} URLs to ${endpoint}...`);
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            console.log(`Response from ${endpoint}: HTTP ${res.status} (${res.statusText || 'OK'})`);
        } catch (err) {
            console.warn(`Submission notice for ${endpoint}:`, err.message);
        }
    }

    console.log(`✅ IndexNow bulk push complete! ${urls.length} URLs submitted directly to Bing, Yandex, Seznam & AI engines.`);
}

submitIndexNow().catch(console.error);
