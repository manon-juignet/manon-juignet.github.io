// ===================================================================
//  INFOS GÉNÉRALES DU SITE
//  Pour modifier : change le texte entre les guillemets '…', enregistre,
//  le site se met à jour tout seul.
//  - Un texte entre [crochets] est un contenu provisoire à remplacer.
//  - Pour une info absente, mets null (sans guillemets) : elle sera masquée.
//  - Photo : dépose l'image dans public/images/ puis écris
//      photo: { src: 'images/ma-photo.jpg', alt: 'Portrait de Manon' },
//  - CV : dépose le PDF dans public/cv/ puis écris
//      cv: 'cv/CV-Manon-Juignet.pdf',
//  - Apostrophe dans un texte : utilise ’ (apostrophe courbe), car
//    l'apostrophe droite ' fermerait le texte trop tôt.
// ===================================================================

export default {
  name: 'Manon Juignet',

  // Une ligne sous le nom (formation, spécialité)
  role: '[Formation et spécialité, ex. Élève ingénieure en …]',

  // Accroche : 1 à 2 phrases sur ce que tu cherches et ce que tu apportes
  tagline: '[Accroche de Manon à écrire : le type de poste recherché et ce qui la distingue, en une ou deux phrases.]',

  // Disponibilité affichée sur l'accueil
  availability: '[Stage de X mois à partir de … / alternance au rythme …]',

  // « En bref » : 3 petites cartes sous l'accroche (ajoute ou retire des lignes)
  highlights: [
    { label: 'Formation', value: '[École et année en cours]' },
    { label: 'Recherche', value: '[Stage ou alternance, durée, date]' },
    { label: 'Mobilité', value: '[Ville ou région, télétravail…]' },
  ],

  // Phrases d'introduction des pages (mettre null pour les masquer)
  projectsIntro: '[Phrase d’introduction de la page Projets.]',
  parcoursIntro: '[Phrase d’introduction de la page Parcours.]',

  email: '[email@exemple.fr]',
  linkedin: null, // ex. 'https://www.linkedin.com/in/…'
  github: null, // ex. 'https://github.com/manon-juignet'

  photo: null,
  cv: null,
}
