// ===================================================================
//  PARCOURS : formation, expériences et compétences
//
//  Astuce apostrophe : dans un texte, utilise ’ (apostrophe courbe)
//  plutôt que ' qui fermerait le texte trop tôt.
//
//  FRISE (timeline) : une entrée par bloc { … }, de la plus récente à la
//  plus ancienne. Pour ajouter une entrée, copie un bloc et modifie-le.
//  - kind   : 'formation' ou 'experience' (icône et couleur)
//  - period : dates affichées telles quelles (ex. '2023 – 2026')
//  - points : liste de courtes lignes (missions, matières clés…), ou []
//
//  COMPÉTENCES (skills) : des groupes avec un titre et une liste.
//  Ajoute ou supprime des lignes librement, entre guillemets et
//  séparées par des virgules.
// ===================================================================

export const timeline = [
  {
    kind: 'experience',
    period: '[Mois année – mois année]',
    title: '[Intitulé du poste ou du stage]',
    place: '[Entreprise · Ville]',
    description: '[Une phrase sur la mission principale.]',
    points: ['[Mission ou réalisation 1]', '[Mission ou réalisation 2]'],
  },
  {
    kind: 'formation',
    period: '[Année – année]',
    title: '[Diplôme préparé, ex. Cycle ingénieur en …]',
    place: '[École · Ville]',
    description: '[Spécialité ou option suivie.]',
    points: ['[Matière ou projet marquant 1]', '[Matière ou projet marquant 2]'],
  },
]

export const skills = [
  {
    title: 'Compétences techniques',
    items: ['[Conception mécanique / CAO]', '[Analyse de données]', '[Gestion de projet]', '[Prototypage]'],
  },
  {
    title: 'Logiciels et langages',
    items: ['[Logiciel de CAO, ex. SolidWorks]', '[Calcul, ex. MATLAB]', '[Python]', '[Suite bureautique]'],
  },
  {
    title: 'Langues',
    items: ['Français : langue maternelle', '[Anglais : niveau à préciser]', '[Autre langue : niveau]'],
  },
]
