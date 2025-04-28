const CACHE_NAME = "rythmStudio";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/classes.html",
  "/schedule.html",
  "/instructors.html",
  "/gallery.html",
  "/events.html",
  "/pricing.html",
  "/contact.html",
  "/hello.jpg",
  "/rythem.png",
  "/style.css",
  "/script.js",
  "/offline.html"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          if (event.request.destination === "document") {
            return caches.match("/offline.html"); 
          }
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});