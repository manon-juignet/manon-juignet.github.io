// ===================================================================
//  PROJETS
//  Chaque projet est un bloc { … } suivi d'une virgule.
//  Pour AJOUTER un projet : copie un bloc entier (de { jusqu'à },),
//  colle-le dans la liste et change ses textes. L'ordre de la liste
//  = l'ordre sur la page Projets.
//
//  Astuce apostrophe : dans un texte, utilise ’ (apostrophe courbe)
//  plutôt que ' qui fermerait le texte trop tôt.
//
//  - slug     : identifiant dans l'URL, en minuscules avec des tirets,
//               sans accents ni espaces (ex. 'robot-suiveur'). Unique.
//  - type     : 'pro', 'perso' ou 'cours' (couleur du badge)
//  - featured : 1, 2 ou 3 = mis en avant sur l'accueil dans cet ordre.
//               Supprime la ligne pour ne pas le mettre en avant.
//  - image    : null = cadre « image à venir ». Sinon :
//               { src: 'images/mon-image.jpg', alt: 'Description de l’image' }
//               (dépose le fichier dans public/images/).
//  - gallery  : liste d'images du même format, légende facultative :
//               [{ src: 'images/a.jpg', alt: '…', caption: '…' }]
//  - github   : lien vers le code, ou null
//  - details.story  : un bloc par paragraphe (titre + texte)
//  - details.stats  : les gros chiffres (valeur + explication), ou []
//  - details.lesson : « Ce que j'en retiens », ou null
// ===================================================================

export default [
  {
    slug: 'projet-1',
    type: 'pro',
    featured: 1,
    title: '[Nom du projet 1]',
    summary: '[Résumé du projet 1 en une ou deux phrases : le problème et ce que tu as réalisé.]',
    context: '[Stage chez Entreprise X · 2025]',
    tags: ['[Outil 1]', '[Outil 2]', '[Méthode]'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le point de départ', body: '[Le contexte et le problème à résoudre. Qui en avait besoin, pourquoi c’était important.]' },
        { title: 'Ma démarche', body: '[Les étapes, les choix techniques et les outils utilisés. Ce que tu as fait toi-même.]' },
        { title: 'Résultats', body: '[Ce qui a été livré, mesuré ou amélioré. Ce que l’équipe en a fait ensuite.]' },
      ],
      stats: [
        { value: '[−X %]', label: '[Indicateur amélioré]' },
        { value: '[X semaines]', label: '[Durée du projet]' },
      ],
      lesson: '[Ce que ce projet t’a appris, en une ou deux phrases concrètes.]',
    },
  },
  {
    slug: 'projet-2',
    type: 'cours',
    featured: 2,
    title: '[Nom du projet 2]',
    summary: '[Résumé du projet 2 en une ou deux phrases.]',
    context: '[Projet de cours · 2025]',
    tags: ['[Outil 1]', '[Outil 2]'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le point de départ', body: '[Le sujet donné et les contraintes : durée, équipe, budget.]' },
        { title: 'Ma démarche', body: '[Ton rôle dans l’équipe et les étapes clés.]' },
        { title: 'Résultats', body: '[Le prototype, le rapport ou la note obtenue, et ce qui a fonctionné.]' },
      ],
      stats: [
        { value: '[X]', label: '[Personnes dans l’équipe]' },
        { value: '[X/20]', label: '[Note ou résultat]' },
      ],
      lesson: '[Ce que tu referais différemment.]',
    },
  },
  {
    slug: 'projet-3',
    type: 'perso',
    featured: 3,
    title: '[Nom du projet 3]',
    summary: '[Résumé du projet 3 en une ou deux phrases.]',
    context: '[Projet personnel · 2024]',
    tags: ['[Outil 1]', '[Outil 2]'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le point de départ', body: '[D’où est venue l’idée.]' },
        { title: 'Ma démarche', body: '[Comment tu t’y es prise, ce que tu as dû apprendre.]' },
        { title: 'Résultats', body: '[Où en est le projet aujourd’hui.]' },
      ],
      stats: [],
      lesson: null,
    },
  },
]
