const CACHE_NAME = 'iiko-v1';
const urlsToCache = [
  '/iiko-operator-helper/',
  '/iiko-operator-helper/index.html',
  '/iiko-operator-helper/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
