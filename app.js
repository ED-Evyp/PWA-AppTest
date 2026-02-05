// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA-AppTest/service-worker.js')
        .then(() => console.log('Service Worker registered!'))
        .catch(err => console.log('Service Worker registration failed:', err));
}
