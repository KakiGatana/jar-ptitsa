// Service worker : l’appli fonctionne hors ligne après la première visite.
const CACHE = "jar-ptitsa-v1";
const FILES = [
  "./", "index.html", "css/style.css", "manifest.webmanifest", "icons/icon.svg", "icons/maskable.svg",
  "js/app.js", "js/util.js", "js/store.js", "js/quiz.js", "js/logo.js",
  "js/data/curriculum.js", "js/data/alphabet.js", "js/data/lessons-a.js", "js/data/lessons-b.js",
  "js/data/grammar.js", "js/data/conversations.js", "js/data/phrases.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Réseau d’abord (pour recevoir les mises à jour), cache en secours.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("fonts.g"))) {
        const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then((m) => m || caches.match("index.html")))
  );
});
