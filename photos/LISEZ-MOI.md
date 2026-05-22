# 📸 Comment ajouter vos photos

Bienvenue dans le dossier `photos/` de votre site.

## Étape 1 — Déposez vos photos ici

Mettez vos photos directement dans ce dossier.
Vous pouvez les nommer comme vous voulez : `pyramides.jpg`, `nil.jpg`, etc.

## Étape 2 — Mettez à jour le fichier data.js

Ouvrez le fichier `assets/data.js` avec n'importe quel éditeur de texte (Bloc-notes, etc.).

En haut du fichier, vous trouverez le tableau `window.PHOTOS` avec 28 lignes numérotées de `/* 00 */` à `/* 27 */`.

Pour remplacer une photo, changez l'URL Unsplash par le chemin de votre photo. Exemple :

**Avant :**
```
/* 00 */ 'https://images.unsplash.com/photo-1568322445389....',
```

**Après :**
```
/* 00 */ 'photos/ma-photo-pyramides.jpg',
```

## Conseils

- Format recommandé : **JPG** (qualité 80-90%)
- Largeur recommandée : **1200px minimum** pour la galerie, **1920px** pour les photos héro
- Les photos Unsplash restent actives tant que vous ne les remplacez pas
- Si une photo ne s'affiche pas, vérifiez le nom du fichier (majuscules/minuscules importent)

## Les 28 emplacements

| Numéro | Utilisé dans                          |
|--------|---------------------------------------|
| 00     | Fond hero (page d'accueil)            |
| 01     | Jour 1 & 2 (Le Caire), Chapitre I    |
| 02     | Jour 1 & 2 (Le Caire)                |
| 03     | Jour 4 & 6 (Assouan / Croisière)     |
| 04     | Jour 5 & 7 (Abou Simbel / Edfou)     |
| 05     | Jours 8, 10, 11 (Louxor)             |
| 06     | Jours 12-14 (Mer Rouge)              |
| 07     | Jour 7 (Edfou), Best of              |
| 08     | Jour 3 (Saqqara), Best of            |
| 09     | Jour 3 (Saqqara)                     |
| 10     | Galerie                              |
| 11     | Jours 1 & 5                          |
| 12     | Jour 3 (Saqqara)                     |
| 13     | Jour 8 (Louxor)                      |
| 14     | Jour 11 (Vallée des Rois), Best of   |
| 15     | Jour 4 (Assouan)                     |
| 16     | Jour 4 (Assouan)                     |
| 17     | Jour 5 (Philæ), Best of              |
| 18     | Jour 6 (Croisière)                   |
| 19     | Jour 6 (Croisière)                   |
| 20     | Jour 7 (Edfou)                       |
| 21     | Jour 8 (Louxor)                      |
| 22     | Jour 10 (Hatchepsout), Best of       |
| 23     | Jour 10 (Louxor de nuit)             |
| 24     | Jour 11 (Vallée des Rois)            |
| 25     | Jours 12-14 (Mer Rouge)              |
| 26     | Jours 12-14 (Mer Rouge)              |
| 27     | Galerie                              |
