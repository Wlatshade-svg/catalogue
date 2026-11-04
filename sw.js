// ئەپی ووڵات شەید: پەڕەکان هەمیشە نوێترین وەشان لە ئینتەرنێتەوە وەردەگرن،
// و ئەگەر ئینتەرنێت نەبوو، دوایین وەشانی پاشەکەوتکراو دەکرێتەوە.
const CACHE = "wlat-nirx-v5";
const ASSETS = ["./", "logo-icon.png", "images/mark-white.webp", "icons/icon-192.png", "fonts/zain-arabic-400-normal.woff2", "fonts/zain-arabic-700-normal.woff2", "fonts/zain-arabic-800-normal.woff2", "fonts/zain-arabic-900-normal.woff2", "fonts/zain-latin-400-normal.woff2", "fonts/zain-latin-700-normal.woff2", "fonts/zain-latin-800-normal.woff2", "fonts/zain-latin-900-normal.woff2"];

// سەفاری (ئایفۆن) پەڕەیەکی سپی پیشان دەدات ئەگەر service worker وەڵامێکی
// گوازراوە (redirect) بداتەوە، بۆیە هەر وەڵامێکی وا دەکەینەوە بە وەڵامێکی ئاسایی.
async function clean(res) {
  if (!res || !res.redirected) return res;
  const body = await res.blob();
  return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
}
async function put(req, res) {
  if (res && res.ok) { const c = await caches.open(CACHE); await c.put(req, res.clone()); }
  return res;
}

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(ASSETS.map((u) =>
    fetch(u, { cache: "reload" }).then(clean).then((r) => r.ok && c.put(u, r)).catch(() => {})))));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith("wlat-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // پەڕە: لە ئینتەرنێتەوە (گواستنەوەکان لێرە دەکرێن، نەک لە سەفاری)، ئەگەر نەبوو لە پاشەکەوت
    e.respondWith((async () => {
      try { return await put(req.url, await clean(await fetch(req.url, { credentials: "same-origin" }))); }
      catch (err) {
        const hit = await caches.match(req, { ignoreSearch: true }) || await caches.match(req.url.replace(/\.html$/, ""), { ignoreSearch: true });
        return hit || Response.error();
      }
    })());
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then(clean).then((r) => put(req, r))));
});
