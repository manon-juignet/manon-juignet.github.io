// ===================================================================
//  PROJETS
//  Chaque projet est un bloc { … } suivi d'une virgule.
//  Pour AJOUTER un projet : copie un bloc entier (de { jusqu'à },),
//  colle-le dans la liste et change ses textes. L'ordre de la liste
//  = l'ordre sur la page Projets (ici : du plus récent au plus ancien).
//
//  Astuce apostrophe : dans un texte, utilise ’ (apostrophe courbe)
//  plutôt que ' qui fermerait le texte trop tôt.
//  Un texte entre [crochets] est provisoire : à remplacer.
//
//  - slug     : identifiant dans l'URL, en minuscules avec des tirets,
//               sans accents ni espaces (ex. 'robot-suiveur'). Unique.
//  - type     : 'pro', 'perso' ou 'cours' (couleur du badge)
//  - level    : 'BUT 1', 'BUT 2', 'BUT 3'… (sert au filtre de la page Projets)
//  - featured : 1, 2 ou 3 = mis en avant sur l'accueil dans cet ordre.
//               Supprime la ligne pour ne pas le mettre en avant.
//  - upcoming : true = badge « À venir » (projet pas encore réalisé).
//               Supprime la ligne quand le projet est fait.
//  - team     : coéquipiers à créditer, ou null
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
  // ----------------------------- BUT 3 -----------------------------
  {
    slug: 'onduleur',
    type: 'cours',
    level: 'BUT 3',
    featured: 2,
    upcoming: true,
    title: 'Création d’un onduleur',
    summary: 'Projet de BUT 3 à venir : conception d’un onduleur.',
    context: 'BUT 3 · à venir',
    team: null,
    tags: ['Électronique de puissance'],
    image: null,
    gallery: [],
    github: null,
    details: { story: [], stats: [], lesson: null },
  },

  // ----------------------------- BUT 2 -----------------------------
  {
    slug: 'refuge-autonome',
    type: 'cours',
    level: 'BUT 2',
    featured: 1,
    title: 'Refuge autonome',
    summary: 'Rendre un refuge de montagne autonome en électricité, puis simuler un compteur Linky.',
    context: 'Projet de groupe · BUT 2 · 2025-2026',
    team: 'Projet de groupe avec des camarades de classe',
    tags: ['Photovoltaïque', 'QElectroTech', 'AOP', 'Mesure'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le point de départ', body: 'Répondre à un appel d’offres avec un matériel imposé : 8 panneaux photovoltaïques, un régulateur de charge et un onduleur, dont il fallait vérifier la compatibilité.' },
        { title: 'Dimensionner la production', body: 'Estimation des besoins : 1 001 W de puissance et environ 6,7 kWh par jour. Objectif : produire environ 6 kWh, dont 2 kWh stockés en batteries pour le soir. Schéma de la chaîne d’énergie sous QElectroTech.' },
        { title: 'Ma partie : mesurer la puissance', body: 'Pour la simulation du compteur, chaque groupe gérait un appareil. Ma partie : mesurer la puissance des panneaux solaires (P = U × I, en courant continu) avec un pont diviseur pour la tension, un capteur à effet Hall pour le courant, un soustracteur et un amplificateur à AOP, et des borniers.' },
        { title: 'Résultats', body: 'Le microcontrôleur n’a pas été programmé, faute de temps.' },
      ],
      stats: [
        { value: '8', label: 'panneaux photovoltaïques' },
        { value: '1 001 W', label: 'de puissance estimée' },
        { value: '6,7 kWh', label: 'de besoins par jour' },
      ],
      lesson: null,
    },
  },
  {
    slug: 'trottinette-electrique',
    type: 'cours',
    level: 'BUT 2',
    featured: 3,
    title: 'Trottinette électrique',
    summary: 'Remplacer la commande « tout ou rien » d’une trottinette par une commande de vitesse variable.',
    context: 'Projet de cours · BUT 2 · 2025-2026',
    team: null,
    tags: ['PWM', 'NE555', 'MOSFET', 'Électronique de puissance'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'L’existant', body: 'Deux batteries 12 V en série (24 V), un moteur à courant continu, un relais et un interrupteur.' },
        { title: 'La solution', body: 'Un hacheur un quadrant piloté en PWM : MOSFET et diode, AOP en comparateur, NE555 pour le signal triangulaire, potentiomètre pour la consigne et régulateur de tension pour la partie commande.' },
        { title: 'Ce qui a coincé', body: 'Le condensateur de lissage C4 chauffait ou perturbait le PWM, sans solution trouvée. Les états transitoires du PWM, attribués aux effets capacitifs de la grille du transistor, ont mené à revenir au modèle initial.' },
        { title: 'Résultats', body: 'La carte a été conçue, mais pas imprimée.' },
      ],
      stats: [{ value: '24 V', label: 'deux batteries 12 V en série' }],
      lesson: null,
    },
  },
  {
    slug: 'nf-c-15-100',
    type: 'cours',
    level: 'BUT 2',
    title: 'NF C 15-100',
    summary: 'Électrifier une maison en respectant la norme NF C 15-100.',
    context: 'Projet de cours · BUT 2 · 2025-2026',
    team: null,
    tags: ['NF C 15-100', 'Tableau électrique', 'Nomenclature'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Ma démarche', body: 'Besoins définis selon la surface des pièces, répartition des appareils par disjoncteur (par exemple un circuit dédié de 32 A pour le four), choix des disjoncteurs (calibre et courbe), plans et nomenclature, puis vérification par rapport à la norme. Prix relevés sur les sites Legrand et RS.' },
        { title: 'Livrables', body: 'Schéma du tableau, plans des prises, de l’éclairage et du chauffage, et nomenclature.' },
      ],
      stats: [{ value: '5 163,40 €', label: 'de budget matériel estimé' }],
      lesson: null,
    },
  },
  {
    slug: 'installation-electrique',
    type: 'cours',
    level: 'BUT 2',
    title: 'Installation électrique',
    summary: 'Reprise d’une installation industrielle existante et vérification sous Elec Calc.',
    context: 'Projet de cours · BUT 2 · 2025-2026',
    team: null,
    tags: ['Elec Calc', 'NF C 15-100'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Ma démarche', body: 'Étude de l’installation, vérification des sections de conducteurs et des calibres de disjoncteurs selon la NF C 15-100, puis export du dossier technique et du schéma.' },
      ],
      stats: [],
      lesson: null,
    },
  },
  {
    slug: 'kart-electrique',
    type: 'cours',
    level: 'BUT 2',
    title: 'Kart électrique',
    summary: 'Reprise de la restauration d’un kart électrique commencée par les promotions précédentes.',
    context: 'Projet de groupe · BUT 2 · 2025-2026',
    team: 'En binôme, avec des camarades de classe',
    tags: ['Gestion de projet', 'Batteries'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'L’organisation', body: 'Le travail était réparti en cinq parties : batteries, acquisition de données, variateur de vitesse, arrêt d’urgence et contacteur, mécanique.' },
        { title: 'Ma partie : les batteries', body: 'Avec mon binôme : identifier le type de batteries et les ports de connexion, sécuriser les bornes et tester l’ancien chargeur.' },
        { title: 'Résultats', body: 'Une démarche de conception établie ; le travail n’a pas pu être terminé, faute de temps.' },
      ],
      stats: [{ value: '5', label: 'parties de travail' }],
      lesson: 'Évaluer l’existant, identifier les tâches et les prioriser.',
    },
  },
  {
    slug: 'cablage-gtb',
    type: 'cours',
    level: 'BUT 2',
    title: 'Câblage GTB',
    summary: 'Câblage d’une maquette de bâtiment en gestion technique du bâtiment (GTB), alimentée par panneaux solaires.',
    context: 'Projet de cours · BUT 2 · 2025-2026',
    team: null,
    tags: ['SEE Electrical', 'DALI', 'Automate', 'Câblage'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le système', body: 'Un automate au sous-sol, piloté par bus DALI et par signaux TOR 24 V DC. À l’étage : un couloir, un bureau et une salle de classe, avec détecteurs de présence, spots, prises et boutons-poussoirs.' },
        { title: 'Ma démarche', body: 'Analyse des fiches techniques du client, schéma de principe, schéma de câblage sous SEE Electrical, repérage des signaux aux borniers, fabrication de connecteurs, câblage de la maquette et réalisation de l’armoire.' },
      ],
      stats: [],
      lesson: null,
    },
  },

  // ----------------------------- BUT 1 -----------------------------
  {
    slug: 'console-retrogaming',
    type: 'cours',
    level: 'BUT 1',
    title: 'Console rétrogaming',
    summary: 'Un prototype complet de console de jeu rétro, de la carte électronique aux jeux programmés en Python.',
    context: 'Projet de cours · BUT 1 · 2024-2025',
    team: null,
    tags: ['PCB', 'Soudure', 'Python'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Ma démarche', body: 'Analyse du cahier des charges, schéma structurel, routage du PCB, perçage, soudure, puis tests.' },
        { title: 'Réparer la carte', body: 'Des pistes coupées ont été repérées au multimètre en mode continuité, puis réparées avec un fil étamé.' },
        { title: 'Les jeux', body: 'Space Rescue, où il faut esquiver des astéroïdes ; Pong ; et Gunfight, un duel où il faut tirer plus vite que l’adversaire au signal sonore.' },
        { title: 'Résultats', body: 'Une carte fonctionnelle et trois jeux développés.' },
      ],
      stats: [{ value: '3', label: 'jeux programmés en Python' }],
      lesson: null,
    },
  },
  {
    slug: 'variateur-de-lumiere',
    type: 'cours',
    level: 'BUT 1',
    title: 'Variateur de lumière',
    summary: 'Analyse d’un variateur existant, puis conception d’une version améliorée qui règle la lumière automatiquement.',
    context: 'Projet de cours · BUT 1 · 2024-2025',
    team: null,
    tags: ['Électronique', 'Dossier de fabrication', 'Tests'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le point de départ', body: 'Reconstituer le schéma du variateur à partir de documents partiels : un transistor et deux circuits intégrés.' },
        { title: 'Ma démarche', body: 'Conception de la version améliorée, réalisation d’un prototype et rédaction d’une procédure d’essai.' },
        { title: 'Résultats', body: 'Un prototype testé et un dossier de fabrication complet : schéma structurel, LED de puissance, calculs de taille et de densité de carte, nomenclature, typon, plans d’implantation et de perçage, routage.' },
      ],
      stats: [],
      lesson: null,
    },
  },
  {
    slug: 'borne-de-recharge',
    type: 'cours',
    level: 'BUT 1',
    title: 'Borne de recharge',
    summary: 'Étude d’une borne de recharge pour véhicule électrique et prototype de sa partie commande et protection.',
    context: 'Projet de cours · BUT 1 · 2024-2025',
    team: null,
    tags: ['Proteus', 'Analyse fonctionnelle', 'Prototypage'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Ma démarche', body: 'Analyse fonctionnelle (partie commande et partie puissance), schémas d’alimentation et de puissance, schéma structurel sous Proteus, puis maquette sur plaque Labdec.' },
        { title: 'Le fonctionnement', body: 'Un capteur mesure le courant, le signal est amplifié, puis un circuit détecte les surintensités et coupe la charge au-delà d’un seuil, avant la commande de charge.' },
        { title: 'Résultats', body: 'Maquette réalisée ; les dysfonctionnements ont été identifiés puis corrigés.' },
      ],
      stats: [],
      lesson: null,
    },
  },
  {
    slug: 'feux-de-route',
    type: 'cours',
    level: 'BUT 1',
    title: 'Feux de route',
    summary: 'Simulation de la gestion des feux d’un carrefour en T, programmée sous Codesys.',
    context: 'Projet de cours · BUT 1 · 2024-2025',
    team: null,
    tags: ['Codesys', 'Grafcet', 'Ladder', 'SCL', 'Python'],
    image: null,
    gallery: [],
    github: null,
    details: {
      story: [
        { title: 'Le fonctionnement', body: 'Feux de la route principale et de la route secondaire, avec des durées réglables (par défaut 5 s de vert, 1 s d’orange, 1 s de rouge). Des boutons simulent l’arrivée d’un piéton ou d’un véhicule.' },
        { title: 'Trois modes', body: 'Jour ; nuit, avec le vert permanent sur la route principale ; automatique, qui bascule toutes les 20 s.' },
        { title: 'Le menu technique', body: 'Il détecte un défaut sur un feu rouge : tous les feux clignotent alors à l’orange, et seul un technicien peut relancer le cycle.' },
        { title: 'Ma démarche', body: 'Maquette sur circuit imprimé, simulation sous Codesys et programme complémentaire pour le menu technique.' },
      ],
      stats: [
        { value: '3', label: 'modes : jour, nuit, automatique' },
        { value: '20 s', label: 'entre deux bascules en mode automatique' },
      ],
      lesson: null,
    },
  },
]
