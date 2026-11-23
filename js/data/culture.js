// Usages et culture : ce que les manuels ne disent pas, pour parler comme un natif.
const r = (s) => `<span class='ru'>${s}</span>`;

export const CULTURE = [
  {
    id: "ty-vy", icon: "⚖", title: "Tutoyer ou vouvoyer", ru: "Ты или вы",
    lead: "La règle d’or : en cas de doute, вы. Le tutoiement se mérite.",
    html: `
<p>En Russie, on <b>vouvoie par défaut tout le monde</b> en dehors de la famille et des amis : inconnus, voisins, collègues, connaissances, commerçants, la mère de ton/ta partenaire… même quelqu’un que tu croises depuis des années.</p>
<table class='gram'><tr><th>${r("ты")}</th><th>${r("вы")}</th></tr>
<tr><td>Famille, amis, partenaire</td><td>Inconnus, voisins, connaissances</td></tr>
<tr><td>Enfants (et les enfants tutoient leurs parents)</td><td>Collègues (au début), clients, supérieurs</td></tr>
<tr><td>Entre jeunes du même âge, dans un contexte détendu</td><td>Toute personne plus âgée, administration, serveurs</td></tr></table>
<h3>Passer au ты</h3>
<p>C’est en général la personne plus âgée ou de rang supérieur qui propose : ${r("Дава'й на ты?")} ou ${r("Мо'жно на ты?")} On répond ${r("Дава'й!")} Le passage est définitif : revenir au ${r("вы")} signale une brouille.</p>
<h3>Ce qui choque</h3>
<ul><li>Tutoyer un inconnu adulte : perçu comme grossier, voire agressif (${r("Мы с ва'ми на ты не переходи'ли!")} « on ne se tutoie pas ! »).</li>
<li>Un chef peut parfois tutoyer un subordonné, l’inverse est impensable sans invitation.</li>
<li>${r("вы")} + prénom seul (${r("А'нна, вы…")}) est courant entre collègues ; ${r("вы")} + prénom et patronyme est plus respectueux.</li></ul>`
  },
  {
    id: "interpeller", icon: "☝", title: "Interpeller quelqu’un", ru: "Как обратиться",
    lead: "Il n’existe pas de « Monsieur / Madame » neutre en russe.",
    html: `
<p>Pour attirer l’attention d’un inconnu, le plus sûr : ${r("Извини'те!")} ou ${r("Прости'те!")} sans rien ajouter.</p>
<table class='gram'><tr><th>forme</th><th>pour qui</th><th>ton</th></tr>
<tr><td class='ru'>Де'вушка!</td><td>toute femme jeune… jusqu’à 50 ans environ</td><td>courant, flatteur</td></tr>
<tr><td class='ru'>Молодо'й челове'к!</td><td>homme jeune ou d’âge moyen</td><td>courant, poli</td></tr>
<tr><td class='ru'>Мужчи'на! / Же'нщина!</td><td>adulte plus âgé</td><td>familier, un peu brusque</td></tr>
<tr><td class='ru'>Господи'н / Госпожа'</td><td>discours officiel, diplomatie</td><td>très formel ou ironique</td></tr>
<tr><td class='ru'>Това'рищ</td><td>époque soviétique, armée</td><td>à éviter</td></tr></table>
<p>Avec quelqu’un que tu connais : prénom + patronyme (${r("Ива'н Петро'вич")}). Dans le métro ou en boutique, tu entendras beaucoup ${r("Де'вушка")} : ce n’est pas de la drague, c’est l’usage.</p>`
  },
  {
    id: "prenoms", icon: "✎", title: "Prénoms, patronymes, diminutifs", ru: "Имя, отчество",
    lead: "Un même prénom a dix formes, chacune dit ta relation à la personne.",
    html: `
<p>Chaque Russe a un <b>prénom</b>, un <b>patronyme</b> (prénom du père + ${r("-ович / -евич")} pour un homme, ${r("-овна / -евна")} pour une femme) et un <b>nom de famille</b> (${r("фами'лия")}).</p>
<table class='gram'><tr><th>forme</th><th>exemple</th><th>quand</th></tr>
<tr><td>Prénom + patronyme</td><td class='ru'>Алекса'ндр Серге'евич</td><td>respect : aînés, supérieurs, professeurs</td></tr>
<tr><td>Prénom complet</td><td class='ru'>Алекса'ндр</td><td>neutre, un peu distant</td></tr>
<tr><td>Forme courte</td><td class='ru'>Са'ша</td><td>amis, collègues proches : l’usage normal</td></tr>
<tr><td>Forme tendre</td><td class='ru'>Са'шенька</td><td>famille, couple, enfants</td></tr>
<tr><td>Forme en -ка</td><td class='ru'>Са'шка</td><td>très familier : copains d’enfance, ou mépris</td></tr></table>
<p>Formes courtes à connaître : Алекса'ндр → Са'ша · Дми'трий → Ди'ма · Михаи'л → Ми'ша · Еле'на → Ле'на · Ната'лья → Ната'ша · Екатери'на → Ка'тя · Ива'н → Ва'ня · Евге'ний → Же'ня.</p>
<p>Entre personnes âgées, on s’appelle parfois par le seul patronyme, avec affection : ${r("Петро'вич!")}</p>`
  },
  {
    id: "sourire", icon: "☺", title: "Le sourire et la franchise", ru: "Улыбка",
    lead: "Un Russe qui ne sourit pas n’est pas fâché.",
    html: `
<p>Sourire à un inconnu sans raison paraît étrange, voire suspect. Le proverbe le dit : ${r("Смех без причи'ны — при'знак дурачи'ны")} (rire sans raison, signe de bêtise). Le sourire est réservé aux gens qu’on connaît et aux vraies émotions : il vaut d’autant plus.</p>
<h3>La franchise</h3>
<ul><li>${r("Нет")} n’est pas impoli. Les Russes disent directement ce qu’ils pensent, y compris sur ton apparence ou ta santé.</li>
<li>${r("Как дела'?")} entre proches est une vraie question : on attend une vraie réponse, pas un « ça va » automatique. Les Russes se plaignent volontiers, c’est une façon de créer du lien.</li>
<li>Peu de « small talk » avec les inconnus, mais une fois l’amitié installée, on parle de tout, très longtemps, souvent dans la cuisine.</li></ul>`
  },
  {
    id: "invite", icon: "⌂", title: "Être invité chez quelqu’un", ru: "В гостях",
    lead: "L’hospitalité russe est généreuse, avec ses règles.",
    html: `
<ul>
<li><b>Les chaussures</b> : on les enlève toujours à l’entrée. L’hôte te proposera des chaussons : ${r("тапочки")}.</li>
<li><b>Ne pas arriver les mains vides</b> : un gâteau (${r("торт")}), des chocolats, une bouteille, des fleurs.</li>
<li><b>Les fleurs</b> : toujours en <b>nombre impair</b>. Un nombre pair est réservé aux enterrements.</li>
<li><b>Le seuil</b> : on ne se serre pas la main et on ne se passe rien par-dessus le pas de la porte, ça porte malheur. Entre d’abord, puis salue.</li>
<li><b>La table</b> : l’hôte servira trop et insistera (${r("Ешь, ешь! Ещё положи'ть?")}). Goûte de tout et complimente. Une assiette vide sera remplie : laisse un peu si tu n’as plus faim.</li>
<li><b>Partir</b> : on ne part pas brusquement. Remercie (${r("Спаси'бо за гостеприи'мство, всё бы'ло о'чень вку'сно")}) et attends-toi à ce qu’on te retienne (${r("Посиди' ещё!")}).</li>
</ul>`
  },
  {
    id: "toasts", icon: "♆", title: "Toasts et repas de fête", ru: "Тосты",
    lead: "À table, on ne boit jamais sans raison.",
    html: `
<ul>
<li>Chaque verre est précédé d’un <b>toast</b> (${r("тост")}), parfois long et personnel. On trinque (${r("чо'каться")}) en se regardant dans les yeux.</li>
<li>Les classiques : ${r("За встре'чу!")} (à nos retrouvailles), ${r("За здоро'вье!")}, ${r("За хозя'йку!")} (à la maîtresse de maison), ${r("За любо'вь!")}, ${r("За дру'жбу!")}</li>
<li>${r("На здоро'вье")} <b>n’est pas un toast</b> : c’est la réponse à « merci » pour un repas. Les étrangers se trompent souvent.</li>
<li>En mémoire d’un défunt, on boit <b>sans trinquer</b> : ${r("не чо'каясь")}.</li>
<li>Une bouteille vide ne reste pas sur la table : on la pose par terre.</li>
<li>Tu peux refuser l’alcool : ${r("Я не пью")} ou ${r("Я за рулём")} (je conduis). Lève quand même ton verre de jus pour le toast.</li>
</ul>`
  },
  {
    id: "superstitions", icon: "✶", title: "Superstitions", ru: "Приметы",
    lead: "Même les Russes rationnels les respectent « au cas où ».",
    html: `
<ul>
<li><b>S’asseoir avant un voyage</b> : avant de partir, tout le monde s’assoit un instant en silence : ${r("Прися'дем на доро'жку")}.</li>
<li><b>Ne pas siffler à l’intérieur</b> : on « sifflerait son argent ».</li>
<li><b>Ne pas fêter un anniversaire en avance</b>, ni souhaiter « bon anniversaire » la veille.</li>
<li><b>Conjurer le sort</b> : après avoir dit quelque chose de positif, on crache trois fois par-dessus l’épaule gauche et on touche du bois : ${r("Тьфу-тьфу'-тьфу, что'бы не сгла'зить")}.</li>
<li><b>Cadeaux à éviter</b> : couteaux, montres, mouchoirs, nombre pair de fleurs. Pour un couteau, on donne une pièce en échange.</li>
<li><b>Rentrer chercher un objet oublié</b> porte malheur : on se regarde alors dans le miroir avant de repartir.</li>
<li><b>Bonne chance</b> : on ne dit pas « bonne chance » à un étudiant avant l’examen mais ${r("Ни пу'ха ни пера'!")}, qui répond ${r("К чёрту!")}</li>
</ul>`
  },
  {
    id: "fetes", icon: "❄", title: "Les fêtes qui comptent", ru: "Праздники",
    lead: "Quelques dates à ne jamais oublier, surtout avec la famille.",
    html: `
<table class='gram'><tr><th>date</th><th>fête</th><th>ce qu’on fait</th></tr>
<tr><td>31 déc. – 1ᵉʳ janv.</td><td class='ru'>Но'вый год</td><td>LA fête de l’année : sapin, cadeaux de ${r("Дед Моро'з")}, salade ${r("оливье'")}, vœux à minuit</td></tr>
<tr><td>7 janvier</td><td class='ru'>Рождество'</td><td>Noël orthodoxe, plus religieux et calme</td></tr>
<tr><td>23 février</td><td class='ru'>День защи'тника Оте'чества</td><td>fête des hommes : petits cadeaux aux collègues masculins</td></tr>
<tr><td>8 mars</td><td class='ru'>Восьмо'е ма'рта</td><td>fête des femmes : fleurs et cadeaux à TOUTES les femmes de ton entourage. À ne surtout pas oublier !</td></tr>
<tr><td>printemps</td><td class='ru'>Па'сха</td><td>Pâques orthodoxe : œufs teints, ${r("кули'ч")}, salutation ${r("Христо'с воскре'се! — Вои'стину воскре'се!")}</td></tr>
<tr><td>9 mai</td><td class='ru'>День Побе'ды</td><td>jour de la Victoire, très émouvant pour les familles</td></tr></table>
<p><b>Anniversaires</b> : c’est la personne fêtée qui invite et régale. On souhaite ${r("С днём рожде'ния!")} et on enchaîne avec une liste de vœux : santé, bonheur, amour, réussite.</p>`
  },
  {
    id: "reagir", icon: "✦", title: "Réagir pendant une conversation", ru: "Реакции",
    lead: "Le plus sûr moyen de ne plus sonner comme un robot.",
    html: `
<p>Un natif réagit sans cesse à ce qu’on lui dit. Sans ces petits mots, tu parais froid ou distrait.</p>
<table class='gram'><tr><th>pour…</th><th>dis</th></tr>
<tr><td>montrer que tu écoutes</td><td>${r("Ага'")} · ${r("Угу'")} · ${r("Так")} · ${r("Поня'тно")} · ${r("Я'сно")}</td></tr>
<tr><td>t’étonner</td><td>${r("Да ну?")} · ${r("Пра'вда?")} · ${r("Серьёзно?")} · ${r("Ничего' себе'!")} · ${r("Да ла'дно!")}</td></tr>
<tr><td>approuver</td><td>${r("Вот и'менно!")} · ${r("Ну да")} · ${r("Коне'чно")} · ${r("Само' собо'й")} · ${r("Ещё бы!")}</td></tr>
<tr><td>compatir</td><td>${r("Ой, бедня'га")} · ${r("Ка'кой у'жас")} · ${r("Сочу'вствую")} · ${r("Держи'сь")}</td></tr>
<tr><td>relancer</td><td>${r("И что?")} · ${r("А пото'м?")} · ${r("Ну и?")} · ${r("И чем всё ко'нчилось?")}</td></tr>
<tr><td>gagner du temps</td><td>${r("Ну…")} · ${r("Как бы сказа'ть…")} · ${r("Зна'ешь…")} · ${r("Слу'шай…")} · ${r("Ко'роче…")}</td></tr></table>`
  },
  {
    id: "telephone", icon: "☏", title: "Téléphone et messages", ru: "Телефон",
    lead: "Les codes de l’appel et du message écrit.",
    html: `
<ul>
<li>On décroche par ${r("Алло'!")} ou un simple ${r("Да?")} ; au travail : ${r("Слу'шаю")}. On ne dit pas toujours son nom.</li>
<li>Avant d’entrer dans le sujet avec un collègue : ${r("Удо'бно говори'ть?")} (tu peux parler ?)</li>
<li>Pour raccrocher entre proches : ${r("Ну всё, дава'й!")}, ${r("Пока'-пока'!")}, ${r("Целу'ю!")} ; au travail : ${r("Всего' до'брого!")}</li>
<li>Dans les messages, ${r(")")} est un sourire : un seul = poli, ${r(")))")} = on rit. Le point final peut paraître sec.</li>
<li>Abréviations : ${r("спс")} (merci), ${r("пж / пжлст")} (s’il te plaît), ${r("норм")} (ça va), ${r("щас")} (j’arrive), ${r("кста")} (au fait), ${r("лол")}.</li>
<li>Les messages vocaux sont très répandus, même pour une phrase. Écoute-en beaucoup : c’est excellent pour l’oreille.</li>
</ul>`
  },
  {
    id: "mat", icon: "⚠", title: "Gros mots : le мат", ru: "Мат",
    lead: "À comprendre absolument, à utiliser avec énormément de prudence.",
    html: `
<p>Le russe distingue deux niveaux de grossièreté :</p>
<ul><li><b>Le familier et les insultes ordinaires</b> (${r("дура'к, блин, фигня', доста'л")}) : courants, entre amis ou sous le coup de l’émotion.</li>
<li><b>Le мат</b> : quelques racines obscènes (${r("хуй, пизда', еба'ть, бля")}…) et leurs centaines de dérivés. C’est un registre à part, bien plus fort que les gros mots français. Il est interdit dans les médias et peut valoir une amende dans un lieu public.</li></ul>
<h3>Pourquoi l’apprendre ?</h3>
<p>Pour <b>comprendre</b> : films, rue, amis, collègues entre eux. Mais un étranger qui jure en russe choque souvent plus qu’un natif, surtout devant des femmes, des aînés, la famille ou au travail.</p>
<h3>La bonne stratégie</h3>
<p>Utilise les <b>euphémismes</b>, que tout le monde emploie, même les grands-mères : ${r("блин")} au lieu de ${r("бля")}, ${r("капе'ц")} au lieu de ${r("пизде'ц")}, ${r("офиге'ть")} au lieu de ${r("охуе'ть")}, ${r("по'фиг")} au lieu de ${r("по'хуй")}, ${r("ёлки-па'лки")}… Tu sonneras naturel sans choquer personne.</p>
<p>La liste complète, avec l’euphémisme de chaque mot, est dans le guide de phrases, catégorie « Мат ».</p>`
  }
];
