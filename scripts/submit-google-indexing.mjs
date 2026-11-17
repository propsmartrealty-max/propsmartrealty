import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KEY_FILE = path.join(__dirname, 'propsmart-service-account.json');
const STATE_FILE = path.join(__dirname, '.google-indexing-state.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error('❌ Service account key file not found:', KEY_FILE);
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

// Parse CLI flags
const args = process.argv.slice(2);
let limit = 200; // Standard Google Indexing API daily quota per project
let force = false;
let singleUrl = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--limit' && args[i + 1]) {
    limit = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === '--force') {
    force = true;
  } else if (args[i] === '--url' && args[i + 1]) {
    singleUrl = args[i + 1];
    i++;
  }
}

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    } catch {
      return { indexed: {}, dailyCount: {} };
    }
  }
  return { indexed: {}, dailyCount: {} };
}

function saveState(state) {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.warn('⚠️ Could not save state file:', err.message);
  }
}

function base64url(obj) {
  return Buffer.from(typeof obj === 'string' ? obj : JSON.stringify(obj))
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken() {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: keyData.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: exp,
    iat: iat
  };

  const encodedHeader = base64url(header);
  const encodedClaimSet = base64url(claimSet);
  const signInput = `${encodedHeader}.${encodedClaimSet}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signInput);
  const signature = sign.sign(keyData.private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${signInput}.${signature}`;

  const params = new URLSearchParams();
  params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
  params.append('assertion', jwt);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Failed to obtain Google access token: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

function extractUrlsFromSitemap(xmlPath) {
  if (!fs.existsSync(xmlPath)) return [];
  const content = fs.readFileSync(xmlPath, 'utf8');
  const urls = [];
  const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function publishUrl(accessToken, url) {
  try {
    const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED'
      })
    });

    const data = await res.json();
    if (res.ok) {
      return { success: true, url, status: res.status };
    } else {
      const isQuota = res.status === 429 || data.error?.message?.toLowerCase().includes('quota');
      return { 
        success: false, 
        url, 
        status: res.status, 
        error: data.error?.message || JSON.stringify(data),
        isQuota
      };
    }
  } catch (err) {
    return { success: false, url, status: 0, error: err.message, isQuota: false };
  }
}

async function main() {
  console.log('🚀 Starting Google Web Search Indexing Publisher...');
  console.log(`🔑 Service Account: ${keyData.client_email}`);

  const state = loadState();
  const today = new Date().toISOString().slice(0, 10);
  const submissionsToday = state.dailyCount[today] || 0;

  console.log(`📅 Date: ${today} | Submissions completed today: ${submissionsToday}`);

  let accessToken;
  try {
    accessToken = await getAccessToken();
    console.log('✅ Authenticated successfully with Google OAuth2!\n');
  } catch (err) {
    console.error('❌ Authentication failed:', err.message);
    process.exit(1);
  }

  let targetUrls = [];

  if (singleUrl) {
    targetUrls = [singleUrl];
  } else {
    // Ordered sitemaps by strategic SEO priority
    const prioritizedSitemaps = [
      path.join(__dirname, '../public/sitemap-main.xml'),
      path.join(__dirname, '../public/sitemap-projects.xml'),
      path.join(__dirname, '../public/sitemap-builders.xml'),
      path.join(__dirname, '../public/sitemap-localities.xml'),
      path.join(__dirname, '../public/sitemap-pseo-configurations.xml'),
      path.join(__dirname, '../public/sitemap-pseo-status.xml'),
      path.join(__dirname, '../public/sitemap-pseo-budget.xml'),
      path.join(__dirname, '../public/sitemap-pseo-builders.xml')
    ];

    const seen = new Set();
    for (const sm of prioritizedSitemaps) {
      const urls = extractUrlsFromSitemap(sm);
      for (const u of urls) {
        if (!seen.has(u)) {
          seen.add(u);
          targetUrls.push(u);
        }
      }
    }

    console.log(`📋 Total unique URLs discovered across all sitemaps: ${targetUrls.length}`);
  }

  // Filter out URLs already indexed unless forced
  const pendingUrls = targetUrls.filter(u => {
    if (force) return true;
    return !state.indexed[u];
  });

  console.log(`🎯 Pending / Fresh URLs to index: ${pendingUrls.length} (Already indexed: ${targetUrls.length - pendingUrls.length})`);

  const batchToProcess = pendingUrls.slice(0, limit);
  console.log(`⚡ Processing batch of ${batchToProcess.length} URLs (Batch Limit: ${limit})...\n`);

  let successCount = 0;
  let failureCount = 0;
  let quotaHit = false;

  for (let i = 0; i < batchToProcess.length; i++) {
    const url = batchToProcess[i];
    const progress = `[${i + 1}/${batchToProcess.length}]`;
    const res = await publishUrl(accessToken, url);

    if (res.success) {
      successCount++;
      state.indexed[url] = new Date().toISOString();
      state.dailyCount[today] = (state.dailyCount[today] || 0) + 1;
      console.log(`✅ ${progress} Indexed: ${url}`);
    } else {
      failureCount++;
      console.warn(`⚠️ ${progress} [Status ${res.status}] Failed ${url}: ${res.error}`);

      if (res.isQuota) {
        console.warn('\n🛑 Daily Google Indexing API quota limit (200 publishes/day) reached!');
        console.warn('   Google automatically resets quota daily at 00:00 PST.');
        quotaHit = true;
        break;
      }
    }

    // Rate-limiting delay (250ms between requests)
    await new Promise(r => setTimeout(r, 250));
  }

  saveState(state);

  console.log('\n=============================================');
  console.log('📊 Google Indexing Submission Summary:');
  console.log(`   Processed in this batch: ${successCount + failureCount}`);
  console.log(`   Successfully Indexed:    ${successCount}`);
  console.log(`   Failed / Skipped:        ${failureCount}`);
  console.log(`   Total Indexed Lifetime:  ${Object.keys(state.indexed).length}`);
  console.log(`   Total Indexed Today:     ${state.dailyCount[today] || 0}`);
  if (quotaHit) {
    console.log('   Status: Quota exhausted for today. Will resume automatically tomorrow.');
  } else {
    console.log('   Status: Batch completed successfully.');
  }
  console.log('=============================================\n');

  // Trigger Google & Bing Sitemap Crawler Pings
  try {
    const sitemapUrl = 'https://propsmart.co.in/sitemap.xml';
    console.log(`📡 Pinging search engine sitemap crawlers with ${sitemapUrl}...`);
    await Promise.allSettled([
      fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`),
      fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`)
    ]);
    console.log('✅ Sitemap ping dispatched to Google and Bing.\n');
  } catch (pingErr) {
    console.warn('⚠️ Sitemap ping warning:', pingErr.message);
  }
}

main().catch(err => {
  console.error('Fatal error in indexing publisher:', err);
  process.exit(1);
});
