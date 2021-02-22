var CACHE_NAME = "my-pwa-cache-v1";
var urlsToCache = [
  "/",
  "/App",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/favicon.ico",
  "/manifest.json"
];

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log("err", err);
      })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        console.log("result", result);
        if (result) {
          return result;
        }
      })
    );
  }
});
