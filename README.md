# Portfolio de Manon Juignet

Site : <https://manon-juignet.github.io/>

Vue 3 · Vite 5 · Tailwind CSS 3 · Vue Router 4 (hash history) · déploiement GitHub Actions → GitHub Pages.

👉 **Pour modifier le contenu sans toucher au code : voir [GUIDE-MANON.md](GUIDE-MANON.md).**

## Travailler en local

Node.js 20 ou plus.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml` (build puis publication sur Pages).
Prérequis, une seule fois : **Settings → Pages → Source : GitHub Actions** (droits admin du dépôt).

## Organisation

```
src/data/          tout le contenu (site, projets, parcours)
src/content.js     lit src/data/ et applique la typographie française
src/pages/         Home, Projects, ProjectDetail, Parcours, NotFound
src/components/    NavBar, SiteFooter, ContactModal, ProjectCard, StoryCards…
src/assets/styles.css   polices, couleurs (variables CSS), classes communes
public/404.html    redirige /chemin vers /#/chemin
```

Règles :
- les composants n'affichent que ce qui vient de `src/data/` ;
- couleurs uniquement via les rôles (`bg-page`, `text-ink`, `text-muted`, `bg-primary`…), définis dans `styles.css` : jamais de couleur en dur ;
- les espaces insécables avant `: ; ! ? »` sont ajoutées automatiquement (`src/utils/typo.js`).
