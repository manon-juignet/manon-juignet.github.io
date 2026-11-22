# Guide : modifier le site sans toucher au code

Tout le contenu du site est dans le dossier **`src/data/`** :

| Fichier | Contenu |
|---|---|
| `src/data/site.js` | nom, accroche, disponibilité, « En bref », e-mail, LinkedIn, GitHub, photo, CV |
| `src/data/projects.js` | les projets (cartes + fiches détaillées) |
| `src/data/parcours.js` | formation, expériences, compétences |

Chaque fichier commence par un mode d'emploi en commentaire.

## Modifier un texte depuis GitHub (rien à installer)

1. Sur github.com, ouvre le dépôt `manon-juignet.github.io`.
2. Va dans `src/data/` et clique sur le fichier à modifier.
3. Clique sur le crayon ✏️ (« Edit this file »).
4. Change le texte **entre les guillemets** `'…'`.
5. Clique sur **Commit changes…**, écris un petit message (ex. « Accroche mise à jour ») puis valide.
6. Le site se met à jour tout seul en 1 à 2 minutes (onglet **Actions** pour suivre).

## Les 4 règles à respecter

- Garde les guillemets droits `'` **autour** du texte, et la virgule à la fin de la ligne.
- **Dans** un texte, utilise l'apostrophe courbe `’` (ex. `'l’alternance'`) : une `'` droite fermerait le texte trop tôt.
- Pour masquer une info, écris `null` (sans guillemets).
- Un texte entre `[crochets]` est provisoire : à remplacer.

Pas besoin de taper d'espace spéciale avant `: ; ! ?` : le site s'en charge.

Si le site ne se met pas à jour, ouvre l'onglet **Actions** : une croix rouge indique une erreur de saisie, souvent un guillemet ou une virgule oubliée.

## Ajouter une image

1. Dans `public/images/`, **Add file → Upload files**, dépose l'image (JPG ou WebP, moins de 500 Ko de préférence, nom sans espaces ni accents : `robot-suiveur.jpg`).
2. Dans le fichier de données, remplace `image: null` par :
   ```js
   image: { src: 'images/robot-suiveur.jpg', alt: 'Le robot sur sa piste d’essai' },
   ```
   Le texte `alt` décrit l'image pour les personnes qui ne la voient pas : il est obligatoire.

Même principe pour la photo (`photo:` dans `site.js`).

## Ajouter le CV

1. Dépose le PDF dans `public/cv/` (ex. `CV-Manon-Juignet.pdf`).
2. Dans `site.js`, remplace `cv: null` par `cv: 'cv/CV-Manon-Juignet.pdf',`.
Le bouton de téléchargement apparaît alors sur la page Parcours.

## Ajouter un projet

Dans `src/data/projects.js`, copie un bloc entier de `{` à `},`, colle-le dans la liste, puis change :
- `slug` : un identifiant unique, en minuscules, avec des tirets (il apparaît dans l'adresse : `#/projets/mon-slug`) ;
- `type` : `'pro'`, `'perso'` ou `'cours'` ;
- `level` : `'BUT 1'`, `'BUT 2'`, `'BUT 3'`… (un nouveau niveau ajoute tout seul son filtre sur la page Projets) ;
- `featured` : `1`, `2` ou `3` pour le mettre en avant sur l'accueil (sinon supprime la ligne) ;
- `upcoming: true` affiche un badge « À venir » : supprime la ligne une fois le projet réalisé.

## Ajouter ou changer la vidéo d'alternance

1. Dépose la vidéo (MP4) et une image d'aperçu (WebP ou JPG) dans `public/videos/`.
2. Dans `parcours.js`, bloc `alternance`, remplace `video: null` par :
   ```js
   video: { src: 'videos/alternance.mp4', poster: 'videos/alternance.webp', title: 'Mon alternance en 3 minutes' },
   ```

---

## Infos encore à compléter

Les textes du site reprennent l'ancien site Google Sites, reformulés sans rien ajouter : **relis-les et corrige ce qui ne te convient pas.**

- [ ] `site.js` → `cv` : CV à jour en PDF (voir « Ajouter le CV »)
- [ ] `site.js` → `github` : lien si tu en as un (sinon laisser `null`)
- [ ] `parcours.js` → vidéo « alternance en 3 min » (voir plus haut)
- [ ] `parcours.js` → centres d'intérêt, si tu veux les afficher (à ajouter)
- [ ] `projects.js` → photos et vidéos des projets (voir « Ajouter une image »)
- [ ] `projects.js` → détails du projet onduleur, puis tes autres projets de BUT 3
- [ ] « Proteus » : vérifier le nom du logiciel (écrit « Protheus » sur l'ancien site)
