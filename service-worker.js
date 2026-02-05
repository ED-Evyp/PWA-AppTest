const CACHE_NAME = 'my-pwa-v1';
const urlsToCache = [
  '/my-first-pwa/',
  '/my-first-pwa/index.html',
  '/my-first-pwa/styles.css',
  '/my-first-pwa/app.js',
  '/my-first-pwa/logo.png'
];

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
