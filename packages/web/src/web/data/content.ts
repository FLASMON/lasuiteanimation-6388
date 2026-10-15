export const image = (path: string) => `/images/${path}`;
export const formations = [
  {
    slug: "art-dramatique-theatre",
    title: "Art dramatique et théâtre",
    category: "Théâtre",
    img: "01",
    price: 250,
    desc: "Trouvez votre voix, explorez le jeu scénique et développez votre présence grâce à des ateliers pratiques.",
    modules: [
      "Les fondamentaux du jeu",
      "Voix, respiration et expression",
      "Improvisation et travail collectif",
      "Interprétation et mise en scène",
    ],
    outcome: "Créer et interpréter une scène avec assurance.",
  },
  {
    slug: "art-design",
    title: "Art et design",
    category: "Design",
    img: "02",
    price: 320,
    desc: "Donnez forme à vos idées. Explorez la couleur, la composition et les méthodes du design visuel.",
    modules: [
      "Culture visuelle et inspiration",
      "Dessin et composition",
      "Couleurs et typographie",
      "Conception d’un projet créatif",
    ],
    outcome: "Concevoir un projet visuel et présenter votre démarche créative.",
  },
  {
    slug: "sciences-ingenierie",
    title: "Sciences et ingénierie",
    category: "Sciences",
    img: "03",
    price: 350,
    desc: "Apprenez à observer, expérimenter et résoudre des problèmes à travers une approche concrète des sciences.",
    modules: [
      "Méthode scientifique",
      "Modélisation et calcul",
      "Expérimentation en équipe",
      "Projet de conception",
    ],
    outcome: "Analyser un problème et proposer une solution argumentée.",
  },
  {
    slug: "communication-medias",
    title: "Communication et médias",
    category: "Médias",
    img: "04",
    price: 280,
    desc: "Construisez des messages clairs et découvrez comment raconter une histoire pour les médias contemporains.",
    modules: [
      "Stratégie de communication",
      "Écriture et narration",
      "Création de contenus",
      "Présentation d’une campagne",
    ],
    outcome: "Construire une campagne de communication adaptée à son public.",
  },
  {
    slug: "finance-comptabilite",
    title: "Finance et comptabilité",
    category: "Finance",
    img: "05",
    price: 300,
    desc: "Comprenez les chiffres, apprenez les bases de la gestion et prenez des décisions financières éclairées.",
    modules: [
      "Principes comptables",
      "Lecture des états financiers",
      "Budgets et prévisions",
      "Étude de cas pratique",
    ],
    outcome: "Lire un bilan simplifié et préparer un budget prévisionnel.",
  },
  {
    slug: "informatique-technologie",
    title: "Informatique et technologie",
    category: "Informatique",
    img: "06",
    price: 380,
    desc: "Passez de la curiosité à la pratique. Découvrez la logique informatique et construisez votre premier projet.",
    modules: [
      "Logique et algorithmes",
      "Bases de la programmation",
      "Données et outils numériques",
      "Projet collaboratif",
    ],
    outcome: "Réaliser un prototype numérique et expliquer son fonctionnement.",
  },
];
export const courseSlug = (img: string) => formations.find((f) => f.img === img)?.slug ?? "";
export const articles = [
  {
    slug: "apprendre-ensemble",
    title: "Apprendre ensemble, réussir ensemble",
    category: "Pédagogie",
    img: "01",
    date: "15 octobre 2026",
    minutes: 5,
    excerpt:
      "L’entraide transforme l’apprentissage. Découvrez comment un groupe peut devenir un véritable moteur de progression.",
    intro:
      "Apprendre ne consiste pas seulement à recevoir des informations. C’est aussi confronter ses idées, formuler des questions et construire une compréhension avec les autres.",
    sections: [
      {
        title: "Le collectif, un levier pour apprendre",
        text: "Dans un groupe, chaque personne apporte un regard différent. Expliquer une notion à un camarade aide à clarifier sa propre compréhension. Écouter une autre approche permet de repérer des pistes que l’on n’avait pas envisagées. Le travail collaboratif gagne à être structuré : un objectif commun, des rôles explicites et un temps d’échange dédié.",
      },
      {
        title: "Créer de bonnes habitudes de travail",
        text: "Commencez chaque séance par une question précise. Répartissez les tâches, puis rassemblez vos conclusions. Un groupe de trois ou quatre personnes est souvent suffisant pour permettre à chacun de s’exprimer. Gardez quelques minutes pour identifier ce qui a été appris et les points qui restent à éclaircir.",
      },
      {
        title: "Faire une place à chaque voix",
        text: "La coopération fonctionne lorsque chacun se sent libre de poser une question. Une réponse imparfaite peut être un excellent point de départ pour réfléchir. Encouragez les échanges respectueux et évitez de confondre vitesse et compréhension : prendre le temps de reformuler est parfois la meilleure manière d’avancer.",
      },
    ],
  },
  {
    slug: "campus-avenir",
    title: "Un campus tourné vers l’avenir",
    category: "Vie du campus",
    img: "02",
    date: "12 octobre 2026",
    minutes: 4,
    excerpt:
      "Espaces de travail, lieux de rencontre et ressources : ce qui fait d’un campus un environnement pour s’épanouir.",
    intro:
      "Un campus est plus qu’un ensemble de bâtiments. C’est un cadre de vie où se croisent apprentissages, rencontres et projets. Son organisation peut aider chacun à trouver son rythme.",
    sections: [
      {
        title: "Des espaces pour différents rythmes",
        text: "Une journée d’étude alterne concentration individuelle, échanges et activités pratiques. Une bibliothèque calme, des tables de travail en groupe et des salles adaptées permettent de choisir l’environnement qui convient au moment. Le confort et la simplicité d’accès aux ressources comptent autant que les équipements.",
      },
      {
        title: "La rencontre fait partie du parcours",
        text: "Participer à un atelier, partager une pause ou rejoindre un groupe d’étude ouvre de nouvelles perspectives. Ces moments développent la confiance et le sentiment d’appartenance. Ils permettent aussi de découvrir des disciplines et des métiers auxquels on n’avait pas encore pensé.",
      },
      {
        title: "Construire un quotidien plus responsable",
        text: "Limiter le gaspillage, prendre soin des espaces communs et partager les ressources sont des gestes accessibles. Un campus vivant se construit avec les personnes qui le fréquentent. Les initiatives étudiantes sont une occasion concrète de passer de l’idée à l’action.",
      },
    ],
  },
  {
    slug: "donner-vie-ambitions",
    title: "Donnez une nouvelle vie à vos ambitions",
    category: "Orientation",
    img: "03",
    date: "8 octobre 2026",
    minutes: 6,
    excerpt:
      "Choisir une formation ne se résume pas à choisir un intitulé. Voici des repères pour préparer un projet qui vous ressemble.",
    intro:
      "Un projet d’études peut évoluer. Pour lui donner une direction, il est utile de distinguer ce qui vous intéresse, ce que vous souhaitez apprendre et le quotidien que vous imaginez.",
    sections: [
      {
        title: "Partir de vos centres d’intérêt",
        text: "Repensez aux activités qui vous donnent envie de persévérer. Aimez-vous créer, analyser, expliquer ou expérimenter ? Notez des situations concrètes plutôt que des qualités abstraites. Cette liste vous aide à comparer les contenus des formations et à repérer les apprentissages qui vous motivent.",
      },
      {
        title: "Comparer les parcours concrètement",
        text: "Regardez les modules, le volume de travail, les prérequis et la place des projets pratiques. Renseignez-vous aussi sur l’accompagnement proposé. Une journée portes ouvertes ou un échange avec un enseignant peut vous aider à mettre des images sur un programme. Préparez vos questions avant la rencontre.",
      },
      {
        title: "Se donner une première étape",
        text: "Vous n’avez pas besoin de tout décider immédiatement. Une lecture, un petit projet ou un atelier constitue déjà une action utile. Fixez une étape réalisable, puis faites le point sur ce qu’elle vous a appris. L’orientation est une démarche progressive, pas un choix figé une fois pour toutes.",
      },
    ],
  },
  {
    slug: "methode-revisions",
    title: "Réviser autrement : des habitudes qui durent",
    category: "Pédagogie",
    img: "01",
    date: "5 octobre 2026",
    minutes: 4,
    excerpt:
      "Organiser ses révisions et pratiquer régulièrement pour mieux comprendre, sans tout reporter à la dernière minute.",
    intro:
      "Une routine d’étude efficace n’a pas besoin d’être compliquée. Elle doit surtout être réaliste, régulière et centrée sur la compréhension.",
    sections: [
      {
        title: "Planifier de petites séances",
        text: "Découpez votre travail en objectifs précis. Une séance dédiée à une notion est plus facile à commencer qu’un programme trop large. Alternez travail et pauses, et adaptez la durée à votre attention.",
      },
      {
        title: "Se tester pour comprendre",
        text: "Fermez vos notes et essayez de reformuler une idée avec vos propres mots. Résoudre un exercice ou expliquer un principe permet d’identifier les zones d’incertitude. Revenez ensuite aux ressources pour compléter votre compréhension.",
      },
      {
        title: "Observer ses progrès",
        text: "Gardez une trace des notions que vous avez travaillées et des questions qui restent ouvertes. Ce suivi vous permet de voir vos progrès et de préparer les échanges avec vos enseignants.",
      },
    ],
  },
  {
    slug: "premier-projet-creatif",
    title: "Votre premier projet créatif, pas à pas",
    category: "Orientation",
    img: "03",
    date: "1 octobre 2026",
    minutes: 5,
    excerpt:
      "De l’intuition à la présentation : une méthode simple pour donner une forme concrète à votre prochaine idée.",
    intro:
      "Un projet créatif commence souvent par une question ou une envie. Quelques étapes simples peuvent vous aider à transformer cette intuition en réalisation.",
    sections: [
      {
        title: "Définir une intention",
        text: "Quel message souhaitez-vous transmettre ? À qui s’adresse votre projet ? Répondre à ces questions donne un cadre à vos choix sans brider votre créativité.",
      },
      {
        title: "Explorer et prototyper",
        text: "Collectez des références, dessinez plusieurs pistes et testez une première version. Le prototype est un outil pour apprendre : il n’a pas besoin d’être parfait pour produire un retour utile.",
      },
      {
        title: "Présenter votre démarche",
        text: "Expliquez vos choix, les essais réalisés et ce que vous amélioreriez ensuite. Une présentation claire met en valeur la réflexion qui accompagne le résultat.",
      },
    ],
  },
  {
    slug: "trouver-place-campus",
    title: "Trouver sa place dans la vie du campus",
    category: "Vie du campus",
    img: "02",
    date: "28 septembre 2026",
    minutes: 4,
    excerpt:
      "Quelques pistes pour faire des rencontres et prendre ses repères lors des premières semaines.",
    intro:
      "Les premières semaines d’un nouveau parcours apportent beaucoup de découvertes. Il est normal d’avoir besoin de temps pour trouver ses repères.",
    sections: [
      {
        title: "Commencer par les ressources essentielles",
        text: "Identifiez les lieux et les personnes qui peuvent vous aider : accueil, bibliothèque, enseignants et espaces de travail. Gardez vos informations utiles au même endroit.",
      },
      {
        title: "Participer à son rythme",
        text: "Choisissez une activité qui vous intéresse, sans chercher à tout faire dès le départ. Un atelier ou un groupe de travail est un cadre simple pour échanger autour d’un intérêt commun.",
      },
      {
        title: "Oser demander",
        text: "Poser une question est une démarche constructive. Beaucoup d’autres étudiants partagent probablement la même interrogation. Un échange court peut suffire à débloquer une situation.",
      },
    ],
  },
];
export const articleSlugs = articles.map((a) => a.slug);
