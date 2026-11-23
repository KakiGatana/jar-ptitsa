// Service worker : l’appli fonctionne hors ligne après la première visite.
// Toute modification de ce fichier (au moins le numéro de CACHE) déclenche le bandeau « Actualiser ».
// Sur GitHub Pages, toutes les applis d’un compte partagent la même origine (kakigatana.github.io)
// et donc le même stockage de caches : on ne touche qu’aux caches préfixés « jar-ptitsa- ».
const PREFIX = "jar-ptitsa-";
const CACHE = PREFIX + "v4";
const FONT_HOSTS = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
const FILES = [
  "./", "index.html", "css/style.css", "manifest.webmanifest", "icons/icon.svg", "icons/maskable.svg",
  "js/app.js", "js/util.js", "js/store.js", "js/quiz.js", "js/logo.js",
  "js/data/curriculum.js", "js/data/alphabet.js", "js/data/lessons-a.js", "js/data/lessons-b.js", "js/data/lessons-c.js", "js/data/lessons-d.js", "js/data/culture.js",
  "js/data/grammar.js", "js/data/conversations.js", "js/data/phrases.js", "js/stats.js"
];

// La nouvelle version s’installe puis attend : l’appli affiche un bandeau « Actualiser »
// et n’active la mise à jour que quand l’utilisateur clique (pas de rechargement surprise).
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((u) => new Request(u, { cache: "reload" })))));
});
self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Réseau d’abord (pour recevoir les mises à jour), cache en secours.
// Seuls nos propres fichiers (sous le périmètre du service worker) et les polices Google sont mis en cache.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const own = url.origin === location.origin && url.pathname.startsWith(new URL(self.registration.scope).pathname);
  const font = FONT_HOSTS.includes(url.origin);
  if (!own && !font) return;
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok && (r.type === "basic" || r.type === "cors")) {
        const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request, { cacheName: CACHE }).then((m) => m || (e.request.mode === "navigate" ? caches.match("index.html", { cacheName: CACHE }) : Response.error())))
  );
});
