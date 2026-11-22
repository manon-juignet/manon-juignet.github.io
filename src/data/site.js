// ===================================================================
//  INFOS GÉNÉRALES DU SITE
//  Pour modifier : change le texte entre les guillemets '…', enregistre,
//  le site se met à jour tout seul.
//  - Un texte entre [crochets] est un contenu provisoire à remplacer.
//  - Pour une info absente, mets null (sans guillemets) : elle sera masquée.
//  - Apostrophe dans un texte : utilise ’ (apostrophe courbe), car
//    l'apostrophe droite ' fermerait le texte trop tôt.
//  - Photo : dépose l'image dans public/images/ puis indique son nom
//    dans photo.src (texte alt = description de l'image, obligatoire).
//  - CV : dépose le PDF dans public/cv/ puis écris
//      cv: 'cv/CV_Juignet_Manon.pdf',
// ===================================================================

export default {
  name: 'Manon Juignet',

  // Une ligne sous le nom
  role: 'BUT GEII à l’IUT de Rennes · alternante chez Enedis',

  // Accroche : 1 à 2 phrases sur ce que tu cherches et pour quand
  tagline: '[Accroche à écrire : ce que Manon recherche (stage, alternance, école d’ingénieurs ?) et pour quand.]',

  // Disponibilité affichée sur l'accueil (null pour la masquer)
  availability: '[Recherche : type de contrat et date à préciser]',

  // « En bref » : petites cartes sous l'accroche (ajoute ou retire des lignes)
  highlights: [
    { label: 'Formation', value: 'BUT Génie Électrique et Informatique Industrielle, IUT de Rennes' },
    { label: 'Alternance', value: 'Enedis, Agence d’Interventions Spécialisées' },
    { label: 'Recherche', value: '[Stage, alternance ou poursuite d’études : à préciser]' },
  ],

  // Phrases d'introduction des pages (null pour les masquer)
  projectsIntro: 'Les projets réalisés pendant mon BUT GEII à l’IUT de Rennes : électronique, automatisme et installations électriques.',
  parcoursIntro: 'Mon BUT GEII à l’IUT de Rennes, en alternance chez Enedis.',

  email: '[email]',
  linkedin: 'https://www.linkedin.com/in/manon-juignet-/',
  github: null,

  photo: { src: 'images/manon-juignet.jpg', alt: 'Portrait de Manon Juignet' },
  cv: null,
}
