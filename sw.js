const CACHE_NAME = 'compass-cache-v2';
const urlsToCache = [
  '/', 
  '/index.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=JetBrains+Mono:wght@400&display=swap'
];

self.addEventListener('install', event => {
  // Only cache lightweight core files on install for fast startup
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Network first, fallback to cache for dynamic library loads
  event.respondWith(
    fetch(event.request).then(response => {
      // If it's a valid response, clone it and put it in the cache
      if (response && response.status === 200) {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
      }
      return response;
    }).catch(() => {
      // If offline, try to serve from cache
      return caches.match(event.request);
    })
  );
});
