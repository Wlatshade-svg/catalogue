// /3d/ used to host an offline-capable app with a service worker here.
// The 3D Studio that lives here now has none, so any copy still installed
// in a browser clears its caches and removes itself on the next visit.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith("wlat-3d")).map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: "window" });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
