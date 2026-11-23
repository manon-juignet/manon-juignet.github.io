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
//  - image    : vignette de la carte. null = cadre « image à venir ». Sinon :
//               { src: 'images/projets/mon-slug/photo.webp', alt: 'Description',
//                 kind: 'photo', w: 1200, h: 800 }
//               (dépose le fichier dans public/images/projets/mon-slug/).
//  - gallery  : liste d'images du même format, avec une légende :
//               [{ src: '…', alt: '…', caption: '…', kind: 'photo', w: …, h: … }]
//               kind : 'photo' = l'image peut être recadrée dans la grille ;
//                      'schema' = jamais recadrée, sur fond blanc (schémas,
//                      plans, tableaux). Un schéma large prend toute la ligne.
//               w et h : largeur et hauteur de l'image en pixels (visibles
//               dans les propriétés du fichier) : évitent que la page saute.
//               Un clic sur une image l'affiche en grand.
//  - video    : vidéo en tête de galerie, ou absent :
//               { src: '…mp4', poster: '…webp', caption: '…' }
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
    image: { src: 'images/projets/refuge-autonome/photo-de-la-carte-electronique.webp', alt: 'Photo de la carte électronique', kind: 'photo', w: 745, h: 546 },
    gallery: [
      { src: 'images/projets/refuge-autonome/photo-de-la-carte-electronique-vue-du-dessus.webp', alt: 'Photo de la carte électronique vue du dessus', caption: 'Photo de la carte électronique vue du dessus', kind: 'photo', w: 564, h: 535 },
      { src: 'images/projets/refuge-autonome/photo-de-la-carte-electronique.webp', alt: 'Photo de la carte électronique', caption: 'Photo de la carte électronique', kind: 'photo', w: 745, h: 546 },
      { src: 'images/projets/refuge-autonome/energie-consommee-estimee.webp', alt: 'Énergie consommée estimée', caption: 'Énergie consommée estimée', kind: 'schema', w: 658, h: 634 },
      { src: 'images/projets/refuge-autonome/analyse-fonctionnelle-d-un-compteur-linky.webp', alt: 'Analyse fonctionnelle d’un compteur linky', caption: 'Analyse fonctionnelle d’un compteur linky', kind: 'schema', w: 558, h: 738 },
      { src: 'images/projets/refuge-autonome/puissance-consommee-estimee.webp', alt: 'Puissance consommée estimée', caption: 'Puissance consommée estimée', kind: 'schema', w: 652, h: 612 },
      { src: 'images/projets/refuge-autonome/schema-qet.webp', alt: 'Schéma de la chaîne d’énergie (QElectroTech)', caption: 'Schéma de la chaîne d’énergie (QElectroTech)', kind: 'schema', w: 769, h: 475 },
      { src: 'images/projets/refuge-autonome/schema-structurel.webp', alt: 'Schéma structurel', caption: 'Schéma structurel', kind: 'schema', w: 1060, h: 744 },
      { src: 'images/projets/refuge-autonome/synthese-de-la-chaine-d-energie.webp', alt: 'Synthèse de la chaîne d’énergie', caption: 'Synthèse de la chaîne d’énergie', kind: 'schema', w: 906, h: 375 },
    ],
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
    image: { src: 'images/projets/trottinette-electrique/carte-de-commande.webp', alt: 'Carte de commande', kind: 'photo', w: 664, h: 370 },
    gallery: [
      { src: 'images/projets/trottinette-electrique/carte-de-commande.webp', alt: 'Carte de commande', caption: 'Carte de commande', kind: 'photo', w: 664, h: 370 },
      { src: 'images/projets/trottinette-electrique/carte-de-puissance-vue-du-dessous.webp', alt: 'Carte de puissance vue du dessous', caption: 'Carte de puissance vue du dessous', kind: 'photo', w: 426, h: 328 },
      { src: 'images/projets/trottinette-electrique/carte-de-puissance-vue-du-dessus-avec-les-condensa.webp', alt: 'Carte de puissance vue du dessus, avec les condensateurs C4 à tester', caption: 'Carte de puissance vue du dessus, avec les condensateurs C4 à tester', kind: 'photo', w: 543, h: 430 },
      { src: 'images/projets/trottinette-electrique/trottinette-electrique-demontee.webp', alt: 'Trottinette électrique démontée', caption: 'Trottinette électrique démontée', kind: 'photo', w: 348, h: 739 },
      { src: 'images/projets/trottinette-electrique/chaine-d-information-et-d-energie-avec-les-amelior.webp', alt: 'Chaîne d’information et d’énergie avec les améliorations en rouge', caption: 'Chaîne d’information et d’énergie avec les améliorations en rouge', kind: 'schema', w: 1161, h: 505 },
      { src: 'images/projets/trottinette-electrique/schema-structurel.webp', alt: 'Schéma structurel', caption: 'Schéma structurel', kind: 'schema', w: 723, h: 487 },
    ],
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
    image: { src: 'images/projets/nf-c-15-100/tableau-de-repartition.webp', alt: 'Tableau de répartition', kind: 'schema', w: 960, h: 649 },
    gallery: [
      { src: 'images/projets/nf-c-15-100/nomenclature-1-2.webp', alt: 'Nomenclature (1/2)', caption: 'Nomenclature (1/2)', kind: 'schema', w: 967, h: 537 },
      { src: 'images/projets/nf-c-15-100/nomenclature-2-2.webp', alt: 'Nomenclature (2/2)', caption: 'Nomenclature (2/2)', kind: 'schema', w: 960, h: 441 },
      { src: 'images/projets/nf-c-15-100/prises-et-eclairage.webp', alt: 'Prises et éclairage', caption: 'Prises et éclairage', kind: 'schema', w: 966, h: 651 },
      { src: 'images/projets/nf-c-15-100/prises-eclairage-et-chauffage.webp', alt: 'Prises, éclairage et chauffage', caption: 'Prises, éclairage et chauffage', kind: 'schema', w: 960, h: 649 },
      { src: 'images/projets/nf-c-15-100/tableau-de-repartition.webp', alt: 'Tableau de répartition', caption: 'Tableau de répartition', kind: 'schema', w: 960, h: 649 },
    ],
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
    image: { src: 'images/projets/installation-electrique/schema-rendu-avec-la-version-education-du-logiciel.webp', alt: 'Schéma rendu avec Elec Calc, version éducation (2/2)', kind: 'schema', w: 594, h: 526 },
    gallery: [
      { src: 'images/projets/installation-electrique/schema-rendu-avec-la-version-education-du-logiciel.webp', alt: 'Schéma rendu avec Elec Calc, version éducation (2/2)', caption: 'Schéma rendu avec Elec Calc, version éducation (2/2)', kind: 'schema', w: 594, h: 526 },
      { src: 'images/projets/installation-electrique/schema-rendu-avec-la-version-education-du-logiciel.webp', alt: 'Schéma rendu avec Elec Calc, version éducation (1/2)', caption: 'Schéma rendu avec Elec Calc, version éducation (1/2)', kind: 'schema', w: 753, h: 424 },
    ],
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
    image: { src: 'images/projets/cablage-gtb/couloir-et-bureau.webp', alt: 'Couloir et bureau', kind: 'photo', w: 904, h: 516 },
    gallery: [
      { src: 'images/projets/cablage-gtb/borniers-vers-les-etages-et-dispositif-du-sous-sol.webp', alt: 'Borniers vers les étages et dispositif du sous-sol', caption: 'Borniers vers les étages et dispositif du sous-sol', kind: 'photo', w: 919, h: 522 },
      { src: 'images/projets/cablage-gtb/couloir-et-bureau.webp', alt: 'Couloir et bureau', caption: 'Couloir et bureau', kind: 'photo', w: 904, h: 516 },
      { src: 'images/projets/cablage-gtb/maquette-a-cabler.webp', alt: 'Maquette à câbler', caption: 'Maquette à câbler', kind: 'photo', w: 268, h: 679 },
      { src: 'images/projets/cablage-gtb/salle-de-classe.webp', alt: 'Salle de classe', caption: 'Salle de classe', kind: 'photo', w: 937, h: 510 },
      { src: 'images/projets/cablage-gtb/schema-de-principe.webp', alt: 'Schéma de principe', caption: 'Schéma de principe', kind: 'schema', w: 1161, h: 436 },
      { src: 'images/projets/cablage-gtb/folio-04-tableau-de-distribution.webp', alt: 'Folio 4 : tableau de distribution', caption: 'Folio 4 : tableau de distribution', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-05-couloir.webp', alt: 'Folio 5 : couloir', caption: 'Folio 5 : couloir', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-06-prises-bureau-salle-de-classe.webp', alt: 'Folio 6 : prises du bureau et de la salle de classe', caption: 'Folio 6 : prises du bureau et de la salle de classe', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-07-alimentation-led-capteur.webp', alt: 'Folio 7 : alimentation des LED 24 V et capteur de la salle de classe', caption: 'Folio 7 : alimentation des LED 24 V et capteur de la salle de classe', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-08-module-entree-capteur.webp', alt: 'Folio 8 : commande du module d’entrée et capteur', caption: 'Folio 8 : commande du module d’entrée et capteur', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-09-repartiteur-dali.webp', alt: 'Folio 9 : répartiteur DALI', caption: 'Folio 9 : répartiteur DALI', kind: 'schema', w: 1800, h: 1273 },
      { src: 'images/projets/cablage-gtb/folio-13-code-couleurs-cables.webp', alt: 'Folio 13 : code couleurs et sections des câbles', caption: 'Folio 13 : code couleurs et sections des câbles', kind: 'schema', w: 1123, h: 344 },
      { src: 'images/projets/cablage-gtb/folio-14-nomenclature.webp', alt: 'Folio 14 : nomenclature du matériel', caption: 'Folio 14 : nomenclature du matériel', kind: 'schema', w: 1800, h: 1273 },
    ],
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
    image: { src: 'images/projets/console-retrogaming/face-avant-de-la-carte.webp', alt: 'Face avant de la carte', kind: 'photo', w: 1041, h: 652 },
    gallery: [
      { src: 'images/projets/console-retrogaming/face-avant-de-la-carte.webp', alt: 'Face avant de la carte', caption: 'Face avant de la carte', kind: 'photo', w: 1041, h: 652 },
      { src: 'images/projets/console-retrogaming/reparations-de-la-carte-entourees-en-rouge.webp', alt: 'Réparations de la carte, entourées en rouge', caption: 'Réparations de la carte, entourées en rouge', kind: 'photo', w: 1021, h: 715 },
      { src: 'images/projets/console-retrogaming/schema-structurel-1-2.webp', alt: 'Schéma structurel (1/2)', caption: 'Schéma structurel (1/2)', kind: 'schema', w: 1053, h: 718 },
      { src: 'images/projets/console-retrogaming/schema-structurel-2-2.webp', alt: 'Schéma structurel (2/2)', caption: 'Schéma structurel (2/2)', kind: 'schema', w: 1065, h: 718 },
    ],
    video: { src: 'images/projets/console-retrogaming/video-de-demo.mp4', poster: 'images/projets/console-retrogaming/video-de-demo.webp', caption: 'Démo du jeu Space Rescue sur la console' },
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
    image: { src: 'images/projets/variateur-de-lumiere/la-face-du-dessus-du-prototype-avec-les-composants.webp', alt: 'Face du dessus du prototype, avec les composants traversants', kind: 'photo', w: 432, h: 424 },
    gallery: [
      { src: 'images/projets/variateur-de-lumiere/la-face-du-dessous-du-prototype-on-peut-y-voire-le.webp', alt: 'Face du dessous du prototype : tracé des pistes et soudures', caption: 'Face du dessous du prototype : tracé des pistes et soudures', kind: 'photo', w: 513, h: 522 },
      { src: 'images/projets/variateur-de-lumiere/la-face-du-dessus-du-prototype-avec-les-composants.webp', alt: 'Face du dessus du prototype, avec les composants traversants', caption: 'Face du dessus du prototype, avec les composants traversants', kind: 'photo', w: 432, h: 424 },
      { src: 'images/projets/variateur-de-lumiere/le-prototype-existant-dont-nous-sommes-parti-compo.webp', alt: 'Le prototype de départ : un transistor (1) et deux circuits intégrés (2 et 3) qui amplifient le courant', caption: 'Le prototype de départ : un transistor (1) et deux circuits intégrés (2 et 3) qui amplifient le courant', kind: 'photo', w: 504, h: 357 },
    ],
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
    image: { src: 'images/projets/borne-de-recharge/maquette-de-la-partie-commande-et-protection-2.webp', alt: 'Maquette de la partie commande et protection (vue 2)', kind: 'photo', w: 958, h: 442 },
    gallery: [
      { src: 'images/projets/borne-de-recharge/maquette-de-la-partie-commande-et-protection-2.webp', alt: 'Maquette de la partie commande et protection (vue 2)', caption: 'Maquette de la partie commande et protection (vue 2)', kind: 'photo', w: 958, h: 442 },
      { src: 'images/projets/borne-de-recharge/maquette-de-la-partie-commande-et-protection.webp', alt: 'Maquette de la partie commande et protection', caption: 'Maquette de la partie commande et protection', kind: 'photo', w: 339, h: 526 },
      { src: 'images/projets/borne-de-recharge/schema-electrique-de-la-partie-alimentation-couran.webp', alt: 'Schéma électrique de la partie alimentation courant fort', caption: 'Schéma électrique de la partie alimentation courant fort', kind: 'schema', w: 924, h: 633 },
      { src: 'images/projets/borne-de-recharge/schema-electrique-de-la-partie-puissance.webp', alt: 'Schéma électrique de la partie puissance', caption: 'Schéma électrique de la partie puissance', kind: 'schema', w: 850, h: 703 },
      { src: 'images/projets/borne-de-recharge/schema-fonctionnel.webp', alt: 'Schéma fonctionnel', caption: 'Schéma fonctionnel', kind: 'schema', w: 1036, h: 598 },
      { src: 'images/projets/borne-de-recharge/schema-structurel-de-la-partie-commande-et-protect.webp', alt: 'Schéma structurel de la partie commande et protection', caption: 'Schéma structurel de la partie commande et protection', kind: 'schema', w: 1069, h: 612 },
    ],
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
    image: { src: 'images/projets/feux-de-route/grafcet-du-carrefour.webp', alt: 'Grafcet du carrefour', kind: 'schema', w: 1128, h: 709 },
    gallery: [
      { src: 'images/projets/feux-de-route/disposition-des-elements-sur-la-maquette.webp', alt: 'Disposition des éléments sur la maquette', caption: 'Disposition des éléments sur la maquette', kind: 'schema', w: 445, h: 469 },
      { src: 'images/projets/feux-de-route/grafcet-du-carrefour.webp', alt: 'Grafcet du carrefour', caption: 'Grafcet du carrefour', kind: 'schema', w: 1128, h: 709 },
    ],
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
