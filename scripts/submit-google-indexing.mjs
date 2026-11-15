import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KEY_FILE = path.join(__dirname, 'propsmart-service-account.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error('❌ Service account key file not found:', KEY_FILE);
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

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
      console.log(`✅ [SUCCESS] Indexed: ${url}`);
      return { success: true, url };
    } else {
      console.warn(`⚠️ [STATUS ${res.status}] ${url}: ${data.error?.message || JSON.stringify(data)}`);
      return { success: false, url, error: data.error?.message };
    }
  } catch (err) {
    console.error(`❌ [ERROR] ${url}:`, err.message);
    return { success: false, url, error: err.message };
  }
}

async function main() {
  console.log('🚀 Starting Google Real Estate Indexing API Publisher...');
  console.log(`🔑 Service Account: ${keyData.client_email}`);

  let accessToken;
  try {
    accessToken = await getAccessToken();
    console.log('🔑 Authenticated successfully with Google OAuth2!');
  } catch (err) {
    console.error('❌ Authentication failed:', err.message);
    process.exit(1);
  }

  const sitemaps = [
    path.join(__dirname, '../public/sitemap-main.xml'),
    path.join(__dirname, '../public/sitemap-projects.xml'),
    path.join(__dirname, '../public/sitemap-builders.xml'),
    path.join(__dirname, '../public/sitemap-localities.xml')
  ];

  const allUrls = new Set();
  for (const sm of sitemaps) {
    const urls = extractUrlsFromSitemap(sm);
    urls.forEach(u => allUrls.add(u));
  }

  console.log(`📋 Discovered ${allUrls.size} URLs across sitemaps for Google Indexing.`);

  let successCount = 0;
  let failureCount = 0;

  for (const url of allUrls) {
    const res = await publishUrl(accessToken, url);
    if (res.success) successCount++;
    else failureCount++;
    // Google Indexing API rate limit grace delay
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n📊 Google Indexing Publishing Summary:');
  console.log(`   Total URLs: ${allUrls.size}`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Failed/Pending: ${failureCount}`);
}

main().catch(console.error);
