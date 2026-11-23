// Programme sur plusieurs années, aligné sur le CECRL (A0 → C2).
// Heures cumulées approximatives d’étude efficace (appli + conversation + immersion).
export const LEVELS = [
  {
    id: "A0", ru: "Азбука", name: "L’alphabet", hours: 15, span: "Semaines 1 à 3",
    goal: "Lire le cyrillique sans hésiter et prononcer les sons propres au russe.",
    cando: {
      quotidien: ["Lire les panneaux, les menus et les noms de stations de métro", "Reconnaître les mots internationaux (метро, ресторан, банк)"],
      proches: ["Écrire ton prénom et ceux de tes proches en cyrillique"],
      pro: ["Lire un nom d’entreprise ou une carte de visite"]
    },
    routine: ["15–20 min par jour dans l’appli", "Recopier l’alphabet à la main (imprimé et cursive)"],
    media: ["Chansons pour enfants de l’alphabet (« Азбука »)", "Panneaux et menus russes en images"]
  },
  {
    id: "A1", ru: "Начало", name: "Débutant", hours: 120, span: "Mois 1 à 6",
    goal: "Se présenter, parler de sa famille, commander, demander son chemin, raconter sa journée.",
    cando: {
      quotidien: ["Commander au café, acheter, demander l’heure et le chemin", "Comprendre des phrases simples prononcées lentement"],
      proches: ["Saluer la famille, se présenter, dire ce qu’on aime", "Raconter simplement sa journée d’hier"],
      pro: ["Se présenter et dire son métier", "Tutoiement / vouvoiement, prénom + patronyme"]
    },
    routine: ["30 min par jour : une leçon tous les 2–3 jours + révisions", "Dès le mois 3 : un échange de 30 min par semaine avec un natif (tandem ou prof)"],
    media: ["Dessins animés : « Смешарики », « Маша и Медведь »", "Podcasts pour débutants en russe lent", "Sous-titres français → puis russes"]
  },
  {
    id: "A2", ru: "Основа", name: "Élémentaire", hours: 280, span: "Mois 7 à 12",
    goal: "Maîtriser les 6 cas au singulier, le passé et le futur, les verbes de mouvement de base.",
    cando: {
      quotidien: ["Faire ses courses, aller chez le médecin, voyager", "Comprendre l’essentiel d’une conversation simple"],
      proches: ["Tenir une conversation d’une heure en famille (lentement)", "Parler de projets, de souvenirs, de santé"],
      pro: ["Écrire un e-mail formel court", "Organiser ou reporter un rendez-vous"]
    },
    routine: ["30–45 min par jour", "2 séances de conversation par semaine", "Lire un texte adapté par semaine"],
    media: ["Séries simples avec sous-titres russes", "Lectures graduées (niveau A2)", "Chaînes YouTube de russe facile"]
  },
  {
    id: "B1", ru: "Свобода", name: "Seuil", hours: 550, span: "Année 2",
    goal: "Être autonome : aspects, préfixes de mouvement, discours rapporté, conditionnel, monde du travail.",
    cando: {
      quotidien: ["Gérer seul(e) toutes les situations d’un séjour en Russie", "Suivre un film avec sous-titres russes"],
      proches: ["Parler d’émotions, de souvenirs, d’opinions avec des proches", "Comprendre la famille quand elle parle entre elle"],
      pro: ["Participer à une réunion et donner son avis", "Mener un appel téléphonique professionnel"]
    },
    routine: ["45 min par jour", "Conversation 2–3 fois par semaine", "Écrire un court journal en russe"],
    media: ["Films classiques soviétiques (« Москва слезам не верит », « Ирония судьбы »)", "Nouvelles de Tchekhov adaptées", "Actualités en russe facile"]
  },
  {
    id: "B2", ru: "Мастерство", name: "Avancé", hours: 950, span: "Année 3",
    goal: "Participes, gérondifs, registres. Négocier, argumenter, comprendre les médias.",
    cando: {
      quotidien: ["Comprendre la radio, les séries sans sous-titres", "Débattre de sujets d’actualité"],
      proches: ["Plaisanter, comprendre l’ironie, parler de tout", "Lire des messages familiaux sans aide"],
      pro: ["Négocier, présenter un projet, rédiger un rapport", "Passer un entretien d’embauche en russe"]
    },
    routine: ["45–60 min par jour, dont la moitié en immersion (podcasts, séries)", "Travail ou bénévolat en russe si possible", "Séjour d’immersion de 2–4 semaines recommandé"],
    media: ["Séries russes contemporaines sans sous-titres", "Podcasts natifs (société, histoire)", "Romans contemporains"]
  },
  {
    id: "C1", ru: "Свободное владение", name: "Autonome", hours: 1500, span: "Année 4",
    goal: "Nuances, idiomes, langue parlée, argumentation structurée, style.",
    cando: {
      quotidien: ["Comprendre l’argot, l’humour, les accents", "S’exprimer spontanément sans chercher ses mots"],
      proches: ["Être pleinement soi-même en russe avec ses proches", "Comprendre les références culturelles et les blagues"],
      pro: ["Travailler entièrement en russe", "Rédiger des textes argumentés et nuancés"]
    },
    routine: ["Vivre une partie de sa vie en russe : lectures, amis, travail", "Correction ciblée des erreurs fossilisées avec un prof"],
    media: ["Littérature : Boulgakov, Tolstoï, Dovlatov", "Stand-up et talk-shows russes", "Presse et essais"]
  },
  {
    id: "C2", ru: "Билингва", name: "Bilingue", hours: 2200, span: "Au-delà",
    goal: "Le russe devient une deuxième langue maternelle : on pense, rêve et plaisante en russe.",
    cando: {
      quotidien: ["Aucune situation ne te met en difficulté"],
      proches: ["On oublie que le russe n’est pas ta langue maternelle"],
      pro: ["Négociation de haut niveau, interprétariat informel"]
    },
    routine: ["Immersion permanente", "L’appli sert alors de réservoir de vocabulaire et de révisions"],
    media: ["Tout ce qui existe en russe"]
  }
];

export const HONEST_NOTE =
  "Le russe demande environ 1 100 heures de cours pour un niveau professionnel selon le FSI (Institut diplomatique américain), " +
  "plus le travail personnel. Cette appli te donne la structure, la grammaire, le vocabulaire et la prononciation. " +
  "Pour devenir vraiment bilingue, il faut l’associer dès l’A1 à de vraies conversations avec des natifs, puis à l’immersion (séries, lectures, séjours). " +
  "Chaque niveau te dit quoi ajouter.";
