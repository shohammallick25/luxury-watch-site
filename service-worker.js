const CACHE_NAME = "luxury-watch-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/manifest.json",
  "/assets/logo-dark.png",
  "/assets/logo-white.png",
  // Add more assets like images/icons/fonts
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
