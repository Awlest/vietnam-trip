/* Service worker de l'app Vietnam 13j.
   Objectif unique : que la page s'ouvre en mode avion, depuis l'icône de l'écran
   d'accueil, sans réseau, y compris plusieurs jours après la dernière connexion.

   Stratégie : cache d'abord, rafraîchissement en arrière-plan.
   - hors ligne  -> réponse instantanée depuis le cache
   - en ligne    -> réponse instantanée depuis le cache + mise à jour silencieuse
   Les liens Google Maps sortent du scope et ne sont jamais interceptés. */

/* Bumper cette version à chaque modification du contenu de l'app : c'est ce
   qui fait détecter la nouvelle version au navigateur et afficher la barre
   « Recharger » à l'utilisateur. */
const CACHE = "vietnam-13j-v7";

const ASSETS = [
  "./",
  "./index.html",
  "./vietnam-trip.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll échoue en bloc si un seul fichier manque : on met en cache un par un
      .then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;   // laisse passer maps.google.com

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      const fromNet = fetch(req).then(res => {
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => {
        if (hit) return hit;
        // repli uniquement pour une navigation : on renvoie l'app.
        // Pour un fichier absent, on laisse une vraie erreur plutôt qu'un faux 200.
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });

      // le cache répond tout de suite, le réseau met à jour pour la fois d'après
      return hit || fromNet;
    })
  );
});

// Permet à la page de forcer l'activation d'une version fraîchement installée.
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
