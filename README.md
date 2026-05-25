# 🇻🇳 Vietnam 14j — App de voyage offline

App interactive pour votre voyage du **17 au 31 août 2026**. Fonctionne **100% hors ligne** une fois la page chargée.

## ✨ Fonctionnalités

- **14 jours détaillés** : Hanoi → Ninh Binh → Hoi An → Saigon → Mui Ne → Mékong → Da Lat → Hanoi
- **5 sections par jour** : 🎯 Activités · 🍜 Nourriture · 🛍️ Shopping · 🏨 Hôtel · 💎 Bonus secrets
- **5 bonus secrets** par jour (food caché, lieux insolites, must-see, expériences uniques)
- **Checkboxes persistantes** via localStorage — vos cochés sont sauvés entre les sessions
- **Bouton Maps** sur chaque adresse → ouvre Google Maps directement
- **Tags intensité** : 🛋️ Chill / 🚶 Modéré / 🚴 Actif / ⛰️ Sportif
- **Tags shopping** : Montre vintage, Montre neuve, Or, Argenterie, Sur-mesure, Perles, Soie, Textile/Mode, Ethnique, Bazar, Artisanat
- **Tags halal** : HALAL ✓ (certifié) / DEMANDER (option possible)
- **Plan B typhon** : si Hoi An menacée fin août, swap vers plus de Sud
- **Reset button** en bas à droite pour tout recocher

## 📲 Installation sur téléphone (3 méthodes)

### Méthode 1 — La plus simple (recommandée)
1. Téléchargez/copiez le fichier `vietnam-trip.html` joint à ce message
2. **iPhone** : envoyez-le sur votre Mail/iCloud Drive, ouvrez-le depuis l'app Fichiers → Safari l'ouvre
3. **Android** : envoyez-le sur Drive/Mail, ouvrez avec Chrome
4. Dans le navigateur : **Partager → Sur l'écran d'accueil** (iOS) ou **⋮ → Ajouter à l'écran** (Android)
5. Une icône Vietnam 🇻🇳 apparaît, vous l'ouvrez comme une vraie app

### Méthode 2 — Via email
1. Envoyez-vous le fichier .html par mail
2. Ouvrez la pièce jointe sur votre téléphone
3. Même flow que méthode 1 pour l'épingler

### Méthode 3 — GitHub Pages / hébergement
Si vous voulez le partager (avec madame), uploadez le .html sur GitHub Pages (gratuit) ou n'importe quel hébergeur. URL accessible partout.

## ⚙️ Fonctionnement offline

- Aucune dépendance externe (pas de CDN, pas d'API)
- Toutes les données et le code sont dans le fichier .html
- Une seule chose a besoin du réseau : les **liens Google Maps** qui ouvrent l'app Maps externe
- **Sauvegarde locale** : votre progression est stockée dans le navigateur via `localStorage`, persistera tant que vous n'effacez pas les données du site

## 🔧 Personnalisation (optionnel)

Pour modifier le contenu, ouvrez le `.html` avec un éditeur de texte. Tout est dans la constante `TRIP` au début du `<script>`. Format JS standard.

Pour changer la couleur thème, modifiez les variables CSS dans `:root` (lignes 17-22 du `<style>`).

---

## 📄 Code complet

> Si vous préférez recopier le code que d'utiliser le `.html` fourni : tout est ci-dessous. Sauvegardez dans un fichier `vietnam-trip.html` et ouvrez-le dans n'importe quel navigateur.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#020617">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Vietnam 14j">
<link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23DA251D'/%3E%3Cpolygon fill='%23FFFF00' points='50,15 60,42 88,42 65,58 75,85 50,68 25,85 35,58 12,42 40,42'/%3E%3C/svg%3E">
<title>Vietnam 14j • 17-31 août</title>
<style>
[... CSS complet ...]
</style>
</head>
<body>
<div id="app"></div>
<button class="reset-btn" onclick="resetProgress()">↻ Reset</button>
<script>
const TRIP = [/* 14 jours de données complètes */];
/* ... rendu vanilla JS, localStorage, toggle, etc. ... */
</script>
</body>
</html>
```

> **⚠️ Le code complet (~51 KB, 684 lignes) est dans le fichier `vietnam-trip.html` ci-joint.** Le coller intégralement ici doublerait la taille de ce document inutilement. Téléchargez directement le fichier joint.

---

## 🗒️ Notes pratiques pour le voyage

### À réserver MAINTENANT (avant départ)
- Vols intérieurs Hanoi-Da Nang, Da Nang-Saigon, Da Lat-Hanoi (Vietnam Airlines pour flexibilité)
- 3 nuits Hoi An (Maison Vy ou An Bang Hideaway) — se remplit en août
- 1ère et dernière nuit Hanoi (Essence Hanoi Hotel & Spa)

### À réserver 24-48h à l'avance
- Hôtels Mékong, Mui Ne, Da Lat (tarifs annulables sur Agoda/Booking)
- Cours cuisine Tra Que (chez Ruby)
- Excursion My Son privée tôt le matin
- Spectacle Hoi An Memories

### Last-minute / sur place
- Scooters journaliers
- Restaurants (sauf Mosque Restaurant Hoi An week-end, à réserver)
- Tailleur Yaly Couture (J4 sur place direct)

### Plan B typhon
Si alerte typhon Centre annoncée à J-5 :
1. Annulez les 2-3 dernières nuits Hoi An (tarifs flexibles)
2. Avancez le vol Da Nang→Saigon
3. Ajoutez nuits au Sud (Mui Ne ou Da Lat)

### Halal — adresses clés
- **Hanoi** : D'lions (112 Hang Trong), Tamarind Café (80 Ma May)
- **Hoi An** : Mosque Restaurant (en face mosquée Cham, Nguyen Thai Hoc)
- **Saigon** : Quartier Dong Du — D'Nyonya, VN Halal (mosquée Jamia Al-Musulman)
- **Ailleurs** : seafood + végétarien (com chay). Mots-clés : *không thịt lợn* (sans porc), *chay* (végé)

### Textile / Vêtements — éviter les contrefaçons
**Règles d'or pour acheter vrai (et de qualité)** :
- ❌ ÉVITER : Saigon Square, Ben Thanh (clothes), marchés touristiques pour "marques" (Nike, Adidas, Lacoste, Polo, etc.) = 99% contrefaçon
- ✅ PRÉFÉRER : marques **vietnamiennes originales** — souvent excellent rapport qualité/prix, designs uniques, pas de contrefaçon par définition

**Top marques vietnamiennes contemporaines (sans contrefaçon possible)** :
- **Metiseko** (Hanoi + Hoi An) — soie/coton bio, prints originaux, prix moyens
- **Magonn** (Hanoi) — womenswear contemporain
- **Marie-Linh** (Hanoi) — franco-vietnamien, coupes parfaites
- **L'Usine** (Saigon) — multimarques créateurs locaux
- **Catherine Denoual Maison** (Saigon) — luxe brodé main
- **Saigon Kitsch** (Saigon) — fun, abordable, original
- **Ginkgo T-shirts** (Hanoi/Saigon) — tees coton designs Vietnam
- **Things of Substance** (Hanoi) — multimarques sélection pointue

**Sur-mesure (Hoi An est LE spot)** :
- **Yaly Couture** — premium, tissus italiens, costumes hommes 150-400€
- **BeBe Tailor** — alternative qualité égale parfois moins chère
- **A Dong Silk** — robes en lin/soie, ao dai
- Compter 24-48h, 2 essayages

**Textiles ethniques (authentiques) à Da Lat** :
- Marché de nuit Da Lat — minorités K'Ho et Lat, tissages main
- Tricot et laines Da Lat (climat frais favorise cette spécialité)

**Comment repérer la qualité** :
- Touchez le tissu : la vraie soie est chaude, glisse, mate (pas brillante plastique)
- Vérifiez les coutures intérieures
- Demandez à voir l'étiquette d'origine "Made in Vietnam"
- Vraie marque vietnamienne = pas de logo Nike/Adidas dessus !
- Sur-mesure : insistez sur 2 essayages minimum

### Mots vietnamiens utiles
| Français | Vietnamien |
|---|---|
| Bonjour | Xin chào |
| Merci | Cảm ơn |
| Combien ? | Bao nhiêu? |
| Trop cher | Đắt quá |
| Sans porc | Không thịt lợn |
| Végétarien | Chay |
| Halal | Halal (compris) |
| Délicieux | Ngon |
| Toilettes ? | Nhà vệ sinh? |

### Numéros utiles
- Urgence générale : 113
- Ambulance : 115
- Pompiers : 114
- Ambassade France Hanoi : +84 24 3944 5700
- Ambassade France HCMC : +84 28 3520 6800

### Apps à installer avant départ
- **Grab** (taxi/scooter, Uber local) — inscription requise
- **Google Maps** (offline maps des régions à télécharger en wifi)
- **Google Translate** (pack vietnamien offline)
- **Vietjet Air** / **Vietnam Airlines** (gestion vols)
- **XE Currency** (taux change offline)
- **Booking** / **Agoda** (hôtels last-minute)

---

## 🎒 Checklist matériel

- [ ] Permis international (mention A pour scooter)
- [ ] Adaptateur prise Vietnam (type A, B, C — souvent compatibles UE)
- [ ] Crème solaire SPF 50+
- [ ] Anti-moustique DEET 50%
- [ ] Pharmacie : Imodium, paracétamol, désinfectant
- [ ] K-way léger (averses fréquentes)
- [ ] Chaussures fermées + tongs
- [ ] Power bank
- [ ] Lampe frontale (Hang Mua dawn, grottes)
- [ ] Petit cash USD en backup (~200$)
- [ ] Photocopies passeport + carte bleue
- [ ] Carte Revolut/Wise/N26 pour retraits

---

Bon voyage 🌏 ✈️
