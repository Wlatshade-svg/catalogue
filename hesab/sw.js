// ئەپی ووڵات شەید: پەڕەکان هەمیشە نوێترین وەشان لە ئینتەرنێتەوە وەردەگرن،
// و ئەگەر ئینتەرنێت نەبوو، دوایین وەشانی پاشەکەوتکراو دەکرێتەوە.
const CACHE = "wlat-hesab-v4";
const ASSETS = ["./", "index.html", "giyotin.html", "logo-icon.png", "icons/giyotin-192.png", "icons/pergola-192.png", "fonts/zain-arabic-400-normal.woff2", "fonts/zain-arabic-700-normal.woff2", "fonts/zain-arabic-800-normal.woff2", "fonts/zain-arabic-900-normal.woff2", "fonts/zain-latin-400-normal.woff2", "fonts/zain-latin-700-normal.woff2", "fonts/zain-latin-800-normal.woff2", "fonts/zain-latin-900-normal.woff2", "images/giyotin/logo.webp", "images/giyotin/mark-white.webp", "images/giyotin/p1.webp", "images/giyotin/p10.webp", "images/giyotin/p11.webp", "images/giyotin/p12.webp", "images/giyotin/p13.webp", "images/giyotin/p14.webp", "images/giyotin/p15.webp", "images/giyotin/p16.webp", "images/giyotin/p17.webp", "images/giyotin/p18.webp", "images/giyotin/p19.webp", "images/giyotin/p2.webp", "images/giyotin/p21.webp", "images/giyotin/p22.webp", "images/giyotin/p23.webp", "images/giyotin/p24.webp", "images/giyotin/p25.webp", "images/giyotin/p26.webp", "images/giyotin/p27.webp", "images/giyotin/p28.webp", "images/giyotin/p29.webp", "images/giyotin/p3.webp", "images/giyotin/p30.webp", "images/giyotin/p31.webp", "images/giyotin/p32.webp", "images/giyotin/p33.webp", "images/giyotin/p34.webp", "images/giyotin/p35.webp", "images/giyotin/p36.webp", "images/giyotin/p37.webp", "images/giyotin/p38.webp", "images/giyotin/p39.webp", "images/giyotin/p4.webp", "images/giyotin/p40.webp", "images/giyotin/p41.webp", "images/giyotin/p42.webp", "images/giyotin/p43.webp", "images/giyotin/p44.webp", "images/giyotin/p45.webp", "images/giyotin/p46.webp", "images/giyotin/p47.webp", "images/giyotin/p48.webp", "images/giyotin/p49.webp", "images/giyotin/p5.webp", "images/giyotin/p50.webp", "images/giyotin/p51.webp", "images/giyotin/p52.webp", "images/giyotin/p53.webp", "images/giyotin/p54.webp", "images/giyotin/p55.webp", "images/giyotin/p56.webp", "images/giyotin/p57.webp", "images/giyotin/p58.webp", "images/giyotin/p59.webp", "images/giyotin/p6.webp", "images/giyotin/p60.webp", "images/giyotin/p61.webp", "images/giyotin/p62.webp", "images/giyotin/p63.webp", "images/giyotin/p7.webp", "images/giyotin/p8.webp", "images/giyotin/p9.webp"];
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
