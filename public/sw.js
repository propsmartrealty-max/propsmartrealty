// PROPSMART REALTY Service Worker (PWA Offline Shield)
// Version: propsmart-cache-v1.0.0

const CACHE_NAME = 'propsmart-cache-v1.0.0';
const RUNTIME_CACHE = 'propsmart-runtime-v1';

// Core essential static assets to cache on install
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.svg',
    '/favicon-192x192.png',
    '/images/propsmart-logo.webp'
];

// Install Event: Precaching essential shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_URLS).catch((err) => {
                console.warn('Precache partial fail:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// Activate Event: Cleanup stale versioned caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Intelligent Strategy
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Bypass non-GET requests and API mutations
    if (request.method !== 'GET') return;
    if (url.pathname.startsWith('/api/')) return;
    if (url.pathname.startsWith('/admin')) return;

    // 1. Static Assets (JS, CSS, Fonts, Images) -> Stale-While-Revalidate
    if (
        request.destination === 'script' ||
        request.destination === 'style' ||
        request.destination === 'font' ||
        request.destination === 'image' ||
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com')
    ) {
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(async (cache) => {
                const cachedResponse = await cache.match(request);
                const fetchPromise = fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => cachedResponse);

                return cachedResponse || fetchPromise;
            })
        );
        return;
    }

    // 2. HTML Navigation Requests -> Network-First with Cache Fallback
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(async () => {
                const cache = await caches.open(CACHE_NAME);
                const cached = await cache.match('/index.html') || await cache.match('/');
                return cached || new Response('Offline: Please connect to the internet to view new properties.', {
                    headers: { 'Content-Type': 'text/html; charset=utf-8' }
                });
            })
        );
    }
});
