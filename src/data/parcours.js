// ===================================================================
//  PARCOURS : formation, alternance, compétences et outils
//
//  Astuce apostrophe : dans un texte, utilise ’ (apostrophe courbe)
//  plutôt que ' qui fermerait le texte trop tôt.
//  Un texte entre [crochets] est provisoire : à remplacer.
//
//  FRISE (timeline) : une entrée par bloc { … }, de la plus récente à la
//  plus ancienne. Pour ajouter une entrée, copie un bloc et modifie-le.
//  - kind   : 'formation' ou 'experience' (icône et couleur)
//  - period : dates affichées telles quelles (ex. '2024 – 2026')
//  - points : liste de courtes lignes, ou []
//
//  ALTERNANCE : le bloc détaillé « Alternance chez Enedis ».
//  missions = une carte par mission (titre + texte).
//
//  COMPÉTENCES : les 4 compétences du BUT GEII, une carte chacune.
//  OUTILS : des groupes avec un titre et une liste d'outils.
//  Ajoute ou supprime des lignes librement, entre guillemets et
//  séparées par des virgules.
// ===================================================================

export const timeline = [
  {
    kind: 'experience',
    period: 'Sept. 2025 – août 2027',
    title: 'Alternance chez Enedis',
    place: 'Agence d’Interventions Spécialisées (AIS)',
    description: 'Technicienne, Agence d’Interventions Spécialisées',
    points: [],
  },
  {
    kind: 'formation',
    period: '2024 – 2027',
    title: 'BUT Génie Électrique et Informatique Industrielle (GEII)',
    place: 'IUT de Rennes',
    description: null,
    points: ['BUT 1 : 2024-2025', 'BUT 2 : 2025-2026', 'BUT 3 : 2026-2027, parcours Électricité et maîtrise de l’énergie (EME)'],
  },
  {
    kind: 'formation',
    period: '2024',
    title: 'Bac STI2D, option Énergies et environnement',
    place: null,
    description: null,
    points: [],
  },
]

export const alternance = {
  title: 'Alternance chez Enedis',
  place: 'Agence d’Interventions Spécialisées',
  intro: 'Mes missions, réalisées en binôme.',
  // Vidéo de présentation (null pour la masquer). Le MP4 et son image
  // d’aperçu sont dans public/videos/.
  video: { src: 'videos/alternance.mp4', poster: 'videos/alternance.webp', title: 'Mon alternance en 3 minutes' },
  missions: [
    {
      title: 'Protections HTA (20 kV)',
      body: 'Contrôle et maintenance des protections : essais avec un kit d’injection, vérification de toute la chaîne de protection et fiche de synthèse des valeurs. Réglage des seuils de déclenchement, parfois en configurant l’automate qui pilote le disjoncteur.',
    },
    {
      title: 'Chaînes de comptage',
      body: 'Maintenance chez les clients de plus de 36 kVA : vérification des mesures au vérificateur de branchement (diagramme de Fresnel), comparaison avec le compteur et les courants réels, relève des données, remplacement de la pile de sauvegarde, contrôle du boîtier IP, puis rapport d’intervention.',
    },
    {
      title: 'Mises en service',
      body: 'Mise en service de coffrets de comptage (compteur et boîtier IP) et aide à la mise en service de protections HTA.',
    },
    {
      title: 'Diagnostic et pertes non techniques',
      body: 'Localiser la panne, émettre des hypothèses, tester. Exemple : grâce au diagramme de Fresnel, j’ai trouvé deux mesures de courant inversées (deux fils permutés entre deux phases). La consommation mesurée était environ 2/3 plus basse que la réalité.',
    },
    {
      title: 'Sécurité',
      body: 'Analyse de risques, choix des EPI et des outils (gants adaptés au niveau de tension), temps d’observation préalable (TOP) et vérification d’absence de tension (VAT).',
    },
  ],
}

export const competences = [
  {
    name: 'Concevoir',
    title: 'Concevoir la partie GEII d’un système industriel',
    level: 'BUT 1 + BUT 2',
    items: ['Analyse fonctionnelle', 'Prototype matériel et logiciel', 'Dossier de fabrication', 'Propositions de solutions techniques', 'Dérisquage des solutions (normes)'],
  },
  {
    name: 'Vérifier',
    title: 'Vérifier la partie GEII d’un système industriel',
    level: 'BUT 1 + BUT 2',
    items: ['Procédures d’essai', 'Identification et description de dysfonctionnements', 'Choix des tests et des mesures', 'Certification d’équipements (protections HTA)'],
  },
  {
    name: 'Maintenir',
    title: 'Maintenir la partie GEII d’un système industriel',
    level: 'BUT 2',
    items: ['Inspection selon une procédure', 'Maintenance préventive', 'Diagnostic', 'Recherche de cause racine'],
  },
  {
    name: 'Installer',
    title: 'Installer la partie GEII d’un système industriel',
    level: 'BUT 2',
    items: ['Procédure d’installation', 'Mise en service', 'Analyse de risques', 'Compte rendu'],
  },
]

export const tools = [
  { title: 'Programmation et automatisme', items: ['Python', 'Codesys', 'Ladder', 'Grafcet', 'SCL'] },
  { title: 'Schémas et CAO', items: ['QElectroTech', 'SEE Electrical', 'Elec Calc', 'Proteus'] },
  { title: 'Électronique', items: ['Conception et routage de PCB', 'Soudure', 'NE555', 'AOP', 'MOSFET', 'Capteur à effet Hall', 'Plaque Labdec'] },
  { title: 'Terrain', items: ['Vérificateur de branchement', 'Kit d’injection', 'Bus DALI'] },
  { title: 'Normes', items: ['NF C 15-100'] },
  { title: 'Langues', items: ['Anglais B1 (TOEIC prévu cette année)'] },
]
