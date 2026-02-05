const CACHE_NAME = 'my-pwa-v3';
const urlsToCache = [
  '/PWA-AppTest/',
  '/PWA-AppTest/index.html',
  '/PWA-AppTest/styles.css',
  '/PWA-AppTest/app.js',
  '/PWA-AppTest/logo.png'
];

// Install service worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force the waiting service worker to become active
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Activate and delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
