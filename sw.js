// ئەپی ووڵات شەید: پەڕەکان هەمیشە نوێترین وەشان لە ئینتەرنێتەوە وەردەگرن،
// و ئەگەر ئینتەرنێت نەبوو، دوایین وەشانی پاشەکەوتکراو دەکرێتەوە.
const CACHE = "wlat-nirx-v4";
const ASSETS = ["./", "index.html", "logo-icon.png", "images/mark-white.webp", "icons/icon-192.png", "fonts/zain-arabic-400-normal.woff2", "fonts/zain-arabic-700-normal.woff2", "fonts/zain-arabic-800-normal.woff2", "fonts/zain-arabic-900-normal.woff2", "fonts/zain-latin-400-normal.woff2", "fonts/zain-latin-700-normal.woff2", "fonts/zain-latin-800-normal.woff2", "fonts/zain-latin-900-normal.woff2"];
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith("wlat-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
const save = (req, res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; };
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => save(req, r)).catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => save(req, r))));
});
