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
- `featured` : `1`, `2` ou `3` pour le mettre en avant sur l'accueil (sinon supprime la ligne).

---

## Infos encore à compléter (entre crochets sur le site)

Les textes du site reprennent l'ancien site Google Sites, reformulés sans rien ajouter : **relis-les et corrige ce qui ne te convient pas.**

### `src/data/site.js`
- [ ] `tagline` : accroche (ce que tu recherches : stage, alternance, école d'ingénieurs ? pour quand ?)
- [ ] `availability` : type de contrat et date
- [ ] `highlights` : la carte « Recherche »
- [ ] `email` : adresse de contact à afficher
- [ ] `cv` : CV à jour en PDF (l'ancien site avait `CV_Juignet_Manon.pdf`)
- [ ] `github` : lien si tu en as un (sinon laisser `null`)

### `src/data/parcours.js`
- [ ] Alternance Enedis : dates et intitulé du poste
- [ ] BUT GEII : année en cours, parcours suivi, bac d'origine
- [ ] Langues et niveaux
- [ ] Centres d'intérêt, si tu veux les afficher (à ajouter)
- [ ] Vidéo « alternance en 3 min » de l'ancien site : la remettre ?

### `src/data/projects.js`
- [ ] Coéquipiers à créditer : Refuge autonome, Kart électrique (et les autres projets de groupe)
- [ ] Projets mis en avant sur l'accueil : Refuge autonome, Console rétrogaming, Trottinette électrique, à confirmer
- [ ] Photos et vidéos des projets à garder (console, maquettes, cartes…)
- [ ] Projets récents (BUT 3) à ajouter
- [ ] « Proteus » : vérifier le nom du logiciel (écrit « Protheus » sur l'ancien site)
