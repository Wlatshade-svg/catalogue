// ئەپی ووڵات شەید: پەڕەکان هەمیشە نوێترین وەشان لە ئینتەرنێتەوە وەردەگرن،
// و ئەگەر ئینتەرنێت نەبوو، دوایین وەشانی پاشەکەوتکراو دەکرێتەوە.
const CACHE = "wlat-hesab-v5";
const ASSETS = ["./", "giyotin", "logo-icon.png", "icons/giyotin-192.png", "icons/pergola-192.png", "fonts/zain-arabic-400-normal.woff2", "fonts/zain-arabic-700-normal.woff2", "fonts/zain-arabic-800-normal.woff2", "fonts/zain-arabic-900-normal.woff2", "fonts/zain-latin-400-normal.woff2", "fonts/zain-latin-700-normal.woff2", "fonts/zain-latin-800-normal.woff2", "fonts/zain-latin-900-normal.woff2", "images/giyotin/logo.webp", "images/giyotin/mark-white.webp", "images/giyotin/p1.webp", "images/giyotin/p10.webp", "images/giyotin/p11.webp", "images/giyotin/p12.webp", "images/giyotin/p13.webp", "images/giyotin/p14.webp", "images/giyotin/p15.webp", "images/giyotin/p16.webp", "images/giyotin/p17.webp", "images/giyotin/p18.webp", "images/giyotin/p19.webp", "images/giyotin/p2.webp", "images/giyotin/p21.webp", "images/giyotin/p22.webp", "images/giyotin/p23.webp", "images/giyotin/p24.webp", "images/giyotin/p25.webp", "images/giyotin/p26.webp", "images/giyotin/p27.webp", "images/giyotin/p28.webp", "images/giyotin/p29.webp", "images/giyotin/p3.webp", "images/giyotin/p30.webp", "images/giyotin/p31.webp", "images/giyotin/p32.webp", "images/giyotin/p33.webp", "images/giyotin/p34.webp", "images/giyotin/p35.webp", "images/giyotin/p36.webp", "images/giyotin/p37.webp", "images/giyotin/p38.webp", "images/giyotin/p39.webp", "images/giyotin/p4.webp", "images/giyotin/p40.webp", "images/giyotin/p41.webp", "images/giyotin/p42.webp", "images/giyotin/p43.webp", "images/giyotin/p44.webp", "images/giyotin/p45.webp", "images/giyotin/p46.webp", "images/giyotin/p47.webp", "images/giyotin/p48.webp", "images/giyotin/p49.webp", "images/giyotin/p5.webp", "images/giyotin/p50.webp", "images/giyotin/p51.webp", "images/giyotin/p52.webp", "images/giyotin/p53.webp", "images/giyotin/p54.webp", "images/giyotin/p55.webp", "images/giyotin/p56.webp", "images/giyotin/p57.webp", "images/giyotin/p58.webp", "images/giyotin/p59.webp", "images/giyotin/p6.webp", "images/giyotin/p60.webp", "images/giyotin/p61.webp", "images/giyotin/p62.webp", "images/giyotin/p63.webp", "images/giyotin/p7.webp", "images/giyotin/p8.webp", "images/giyotin/p9.webp"];

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
