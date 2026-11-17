// Drop this in as <folder>/sw.js when a page that had a service worker is
// replaced by one that has none. Old visitors' copies clear their caches and
// remove themselves on the next visit. Adjust the cache prefix if needed.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: "window" });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
