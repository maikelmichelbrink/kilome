// Verhoog dit nummer bij elke update van de app
const CACHE = 'ritten-v5';
const FONTS = 'ritten-fonts';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Eigen bestanden: eerst netwerk (zodat updates doorkomen), anders uit cache.
// Externe diensten (zoeken, routes) gaan altijd direct naar het netwerk.
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // Lettertype (Raleway): eenmalig ophalen en bewaren, zodat het ook offline werkt
  if (u.host === 'fonts.googleapis.com' || u.host === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(e.request).then(m => m || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }))));
    return;
  }
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
