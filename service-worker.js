const CACHE_NAME = 'my-pwa-v1';
const urlsToCache = [
  '/PWA-AppTest/',
  '/PWA-AppTest/index.html',
  '/PWA-AppTest/styles.css',
  '/PWA-AppTest/app.js',
  '/PWA-AppTest/logo.png'
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
