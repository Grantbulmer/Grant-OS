const CACHE_NAME = 'grant-os-v252-input-focus-fix';
const FILES = [
  './',
  './index.html?v=201',
  './manifest.json?v=201',
  './icon-192.png?v=201',
  './icon-512.png?v=201',
  './apple-touch-icon.png?v=201',
  './favicon-32.png?v=201',
  './favicon.ico?v=201'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request))
  );
});
