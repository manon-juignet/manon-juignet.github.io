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
- `featured` : `1`, `2` ou `3` pour le mettre en avant sur l'accueil (sinon supprime la ligne).

---

## Contenus provisoires à remplacer

### `src/data/site.js`
- [ ] `role` : formation et spécialité
- [ ] `tagline` : accroche (1 à 2 phrases, concrètes)
- [ ] `availability` : type de contrat, durée, date de début, rythme
- [ ] `highlights` : Formation, Recherche, Mobilité
- [ ] `projectsIntro` et `parcoursIntro` : phrases d'introduction (ou `null`)
- [ ] `email` : adresse de contact
- [ ] `linkedin`, `github` : liens (ou laisser `null`)
- [ ] `photo` : portrait (+ texte `alt`)
- [ ] `cv` : PDF du CV

### `src/data/projects.js` (×3 projets)
- [ ] `title`, `summary`, `context`, `tags`
- [ ] `image` et éventuellement `gallery`
- [ ] `github` si le code est public
- [ ] `details.story` : point de départ, démarche, résultats
- [ ] `details.stats` : chiffres clés (ou `[]`)
- [ ] `details.lesson` : ce que tu en retiens (ou `null`)
- [ ] `slug` : à renommer d'après le vrai nom du projet

### `src/data/parcours.js`
- [ ] Expérience : période, intitulé, entreprise, description, missions
- [ ] Formation : période, diplôme, école, spécialité, matières
- [ ] Compétences techniques, logiciels et langages, niveaux de langue

### Hors `src/data/` (pour quelqu'un à l'aise avec le code)
- [ ] `index.html` : `<meta name="description">` et balises `og:` si la spécialité change
- [ ] Image d'aperçu pour LinkedIn (`og:image`), une fois la photo disponible
