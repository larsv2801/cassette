self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/cassette/All_I_Want_for_Christmas_Is_You.mp3',
        '/cassette/Last_Christmas.mp3',
        '/cassette/index.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
