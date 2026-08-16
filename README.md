# 🇻🇳 Vietnam 13j — App de voyage offline

App interactive pour le voyage du **18 au 30 août 2026**. Fonctionne **100 % hors ligne** une fois la page chargée.

**Séquence :** Hanoi → Saigon → Ben Tre → Saigon → Da Nang → Hoi An → Hué → 🌙 couchette de nuit → Hanoi

L'itinéraire a été inversé en août 2026 : on n'attaque plus par le nord, on atterrit à Hanoi, on file au sud en avion, et on remonte en terminant par un train couchette Hué → Hanoi.

## ✨ Ce que fait l'app

- **13 journées** numérotées, du mardi 18 au dimanche 30 août
- **Indice d'intensité** sur 5 points par journée — pour voir d'un coup d'œil si deux journées lourdes s'enchaînent
- **Plan B** (météo) visible sur chaque jour, et **Plan B′** (typhon, vol annulé, train complet, maladie) repliable
- **Trois options d'hôtel par ville** : 📸 instagrammable · 💰 économique mais sympa · 🔑 secret bien gardé
- **Les 7 réservations** par ordre d'urgence, en tête de l'app
- **Badges** : halal ✓ / demander, à réserver, ☔ tient sous la pluie
- **Filtres** : Tout · À réserver · Halal · Sous la pluie · Reste à faire · Aujourd'hui
- **Ouverture automatique** sur la journée du jour pendant le voyage, compte à rebours avant
- **Cases à cocher persistantes** (`localStorage`), progression globale et par journée
- **Onglet Réf.** : urgences, vietnamien utile, argent, budget ventilé, apps, surveillance météo, halal en pratique
- **Marqueur fête nationale** sur les jours 12 et 13 (29 août → 2 septembre)

## 📲 Installation sur téléphone

Ouvrir <https://awlest.github.io/vietnam-trip/> puis **Partager → Sur l'écran d'accueil** (iOS) ou **⋮ → Ajouter à l'écran** (Android). Une icône 🇻🇳 apparaît et s'ouvre comme une vraie app.

Une fois la page ouverte une première fois, elle fonctionne en mode avion. Les cases cochées restent tant qu'on n'efface pas les données du site dans le navigateur.

## ⚙️ Fonctionnement offline

- Aucune dépendance externe : pas de CDN, pas d'API, pas de `fetch`, pas de police distante
- Tout le contenu, le CSS et le JS sont dans le seul fichier `index.html` (~97 KB)
- Une seule chose a besoin du réseau : les boutons **📍 Maps**, qui ouvrent une **recherche** Google Maps

### Le service worker

Une page HTML autonome n'est **pas** hors ligne pour autant : taper l'icône de l'écran d'accueil en mode avion envoie le navigateur chercher le fichier sur le réseau, et donne une page blanche. C'était le cas jusqu'en août 2026.

`sw.js` corrige ça. Il garde une copie locale de l'app et la sert sans connexion, en cache d'abord avec rafraîchissement en arrière-plan. Les requêtes hors origine (Google Maps) ne sont jamais interceptées.

**Vérification :** l'onglet **Réf.** affiche en tête une ligne « Hors ligne : prêt ✓ » en vert. Ouvrir l'app une fois avec du réseau, vérifier la ligne, puis passer en mode avion et rouvrir l'icône.

**Après un déploiement :** le service worker détecte la nouvelle version au chargement suivant et affiche une barre « Recharger » en bas d'écran. Bump `CACHE` dans `sw.js` à chaque modification de contenu pour forcer le renouvellement.

### Pourquoi des recherches Maps et pas des adresses

Les réorganisations administratives provinciales de 2025-2026 ont périmé beaucoup d'adresses écrites : rues renumérotées, communes fusionnées, provinces redécoupées. Une adresse figée dans une app hors ligne devient fausse sans prévenir. Les noms de lieux, eux, restent trouvables — d'où le choix systématique de la recherche.

Le geste utile sur place : dès qu'il y a du wifi, ouvrir les lieux du lendemain et les **épingler en favoris** dans Google Maps. Un favori fonctionne hors ligne, une recherche non.

## 🔧 Personnalisation

Tout le contenu est dans la constante `TRIP` au début du `<script>`, une entrée par journée :

```js
{
  n: 1, date: "Mar 18 août", code: "HAN", city: "Hanoi",
  title: "Atterrissage", line: "Résumé en une phrase.",
  intensity: 1,              // 1 à 5, affiché en cinq points
  nightTrain: false,         // true au jour 11
  peakAlert: false,          // true aux jours 12 et 13
  hotels: { insta: {...}, eco: {...}, secret: {...} },
  planB: "…", planBp: "…",
  groups: [ { title: "Faire", items: [ { t, n, p, m, halal, urgent, rain } ] } ]
}
```

Champs d'un item : `t` libellé · `n` note · `p` prix · `m` requête Maps · `halal` (`true` ou `"option"`) · `urgent` badge à réserver · `rain` tient sous la pluie.

Les 7 réservations sont dans `RESAS`, le thème dans `:root` en haut du `<style>`.

`vietnam-trip.html` est une copie identique de `index.html`, conservée pour les anciens signets. Garder les deux synchronisées après modification.

## 💾 Persistance et migration

- Clé actuelle : `vn-trip-2026-v2`, avec des identifiants stables dérivés du titre (`d7:billet-ba-na-hills`) plutôt que positionnels
- L'ancienne clé `vn-trip-2026` utilisait des index de position (`d1-0`) : après l'inversion de l'itinéraire, ces index ne désignaient plus les mêmes étapes
- Au premier chargement, l'app relit l'ancienne clé et **remigre par titre** les 20 items qui existent dans les deux versions. Les coches portant sur des étapes supprimées ne sont pas transférées, et une bannière le dit explicitement plutôt que de faire semblant

## 🗓️ Les 7 réservations, par ordre d'urgence

1. **Couchette Hué → Hanoi, nuit du 28/08** — SE2 ou SE4, cabine 4 couchettes molles, les deux basses, sur `dsvn.vn`. Veille du week-end de la fête nationale : c'est la plus tendue du voyage.
2. **Hôtel Hanoi, nuits du 29 et 30/08** — pic de tourisme domestique.
3. **Vols Hanoi → Saigon (19/08, après 10 h) et Saigon → Da Nang (23/08, le matin).**
4. **Hôtel Da Nang, nuit du 23/08** — les chambres avec vue sur le pont partent en premier.
5. **Billets Ba Na Hills + voiture privée du 24/08** — QR enregistré hors ligne.
6. **Hôtels Hoi An (24 → 26) et Hué (27)** — en annulation gratuite.
7. **Assurance Revolut Ultra** — vérifier rapatriement et conduite de scooter.

## ⚠️ Les trois points durs

- **Le pont du Dragon ne joue que vendredi, samedi et dimanche à 21 h.** Le dimanche 23 août est la seule occasion du séjour : les jours suivants à Hoi An sont un lundi, un mardi et un mercredi.
- **Les jours 6, 7 et 8 forment un bloc à 4-5-4.** Le jour 9 est la récupération, ne pas le remplir.
- **Halal :** faciles à Saigon (rue Đông Du), Da Nang (Hải Châu) et Hoi An (Mosque Restaurant). Difficiles dans le delta, au sommet de Ba Na et pendant les 13 h de train — dans les trois cas, acheter avant.

## 🎒 Checklist matériel

- [ ] Permis international (mention A pour le scooter) + vérifier que l'assurance couvre le deux-roues
- [ ] Adaptateur (types A, B, C — souvent compatibles UE)
- [ ] Crème solaire SPF 50+, anti-moustique DEET
- [ ] Pharmacie : réhydratation orale, Imodium, paracétamol, désinfectant
- [ ] Poncho plutôt que parapluie (averses fortes et courtes)
- [ ] Une couche longue pour le train couchette : la climatisation ne se coupe pas
- [ ] Kit de nuit train : bouchons, masque, lingettes, papier toilette, tongs
- [ ] Batterie externe
- [ ] Photocopies passeport + carte, ~200 $ en backup
- [ ] Carte Revolut/Wise/N26 pour les retraits

---

Bon voyage 🌏
