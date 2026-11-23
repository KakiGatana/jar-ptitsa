// Leçons A0 (alphabet) et A1. Convention : dans le russe, une apostrophe ' suit la voyelle accentuée.
// Dans le texte français, on utilise toujours l’apostrophe typographique ’.
export const LESSONS_A = [
  // ───────────── A0 · Азбука ─────────────
  {
    id: "a0-1", level: "A0", title: "Les lettres amies", ru: "Знакомые буквы",
    goal: "Lire tes premiers mots avec А, К, М, О, Т.",
    theory: [
      { h: "D’où vient le cyrillique ?", p: "L’alphabet cyrillique compte <b>33 lettres</b>. Il descend de l’alphabet grec, adapté au IXᵉ siècle par les disciples des saints Cyrille et Méthode pour écrire les langues slaves. Bonne nouvelle : le russe se lit presque comme il s’écrit." },
      { h: "Cinq lettres que tu connais déjà", p: "<span class='ru'>А, К, М, О, Т</span> ont la même forme et le même son qu’en français. Avec elles tu peux déjà lire <span class='ru'>ма'ма</span>, <span class='ru'>кот</span> ou <span class='ru'>там</span>." },
      { h: "Astuce", p: "Touche n’importe quel mot russe en couleur pour l’écouter. Répète-le à voix haute : la prononciation s’apprend avec la bouche, pas seulement avec les yeux." }
    ],
    vocab: [["ма'ма","maman"],["кот","chat"],["там","là-bas"],["так","ainsi, comme ça"],["как","comment"],["а'том","atome"],["ток","courant (électrique)"],["Том","Tom"]],
    dialogue: [["А","Мама, там кот!","Maman, il y a un chat là-bas !"],["Б","Как там?","Où ça ? (litt. « Comment là-bas ? »)"],["А","Там! Так!","Là-bas ! Comme ça !"]],
    drills: [
      { q: "Comment se lit « кот » ?", opts: ["kot","not","tok"], a: "kot" },
      { q: "Comment se lit « там » ?", opts: ["tam","mat","tak"], a: "tam" },
      { q: "Comment se lit « как » ?", opts: ["kak","tak","kat"], a: "kak" }
    ]
  },
  {
    id: "a0-2", level: "A0", title: "Les faux amis", ru: "Ложные друзья",
    goal: "Ne plus te faire piéger par В, Е, Н, Р, С, У, Х.",
    theory: [
      { h: "Elles te mentent", p: "Ces lettres ressemblent à des lettres latines mais se prononcent autrement :<br><span class='ru'>В</span> = v · <span class='ru'>Е</span> = ié · <span class='ru'>Н</span> = n · <span class='ru'>Р</span> = r roulé · <span class='ru'>С</span> = s · <span class='ru'>У</span> = ou · <span class='ru'>Х</span> = kh." },
      { h: "Le test du restaurant", p: "Lis <span class='ru'>РЕСТОРАН</span> : pas « pectopah » mais <b>restaran</b> ! Et <span class='ru'>МЕТРО</span> se lit <b>mitro</b>." },
      { h: "Le r roulé", p: "Le <span class='ru'>Р</span> russe se fait avec le bout de la langue qui vibre derrière les dents du haut, comme en espagnol ou à la campagne en Bourgogne." }
    ],
    vocab: [["вот","voici"],["нет","non"],["нос","nez"],["рот","bouche"],["сок","jus"],["метро'","métro"],["рестора'н","restaurant"],["Москва'","Moscou"],["хорошо'","bien"],["текст","texte"]],
    dialogue: [["А","Вот ресторан!","Voici un restaurant !"],["Б","Хорошо! А метро?","Bien ! Et le métro ?"],["А","Метро там. Москва!","Le métro est là-bas. Moscou !"]],
    drills: [
      { q: "Comment se lit « нет » ?", opts: ["niet","het","nét"], a: "niet" },
      { q: "Comment se lit « сок » ?", opts: ["sok","cok","tsok"], a: "sok" },
      { q: "La lettre « Р » se prononce…", opts: ["r roulé","p","b"], a: "r roulé" },
      { q: "La lettre « У » se prononce…", opts: ["ou","y","u"], a: "ou" }
    ]
  },
  {
    id: "a0-3", level: "A0", title: "Les nouvelles lettres", ru: "Новые буквы",
    goal: "Apprendre Б, Г, Д, З, И, Й, Л, П, Ф, Э, Ю, Я, Ё.",
    theory: [
      { h: "Des formes nouvelles, des sons connus", p: "<span class='ru'>Б</span> b · <span class='ru'>Г</span> g · <span class='ru'>Д</span> d · <span class='ru'>З</span> z · <span class='ru'>И</span> i · <span class='ru'>Й</span> ï · <span class='ru'>Л</span> l · <span class='ru'>П</span> p · <span class='ru'>Ф</span> f · <span class='ru'>Э</span> è." },
      { h: "Les voyelles « mouillées »", p: "<span class='ru'>Я</span> (ia), <span class='ru'>Ю</span> (iou), <span class='ru'>Е</span> (ié) et <span class='ru'>Ё</span> (io) ajoutent un petit « i » devant la voyelle. Après une consonne, elles la rendent <b>douce</b> : <span class='ru'>ня</span> se dit « nia »." },
      { h: "Я = je", p: "La lettre <span class='ru'>я</span> toute seule veut dire « je ». <span class='ru'>Я люблю' Росси'ю</span> : j’aime la Russie." }
    ],
    vocab: [["да","oui"],["дом","maison"],["брат","frère"],["па'па","papa"],["го'род","ville"],["э'то","c’est, ceci"],["я","je"],["мой","mon"],["люблю'","j’aime"],["кафе'","café (lieu)"],["футбо'л","football"],["ёлка","sapin"]],
    dialogue: [["А","Это мой дом.","C’est ma maison."],["Б","Да? А это папа?","Ah oui ? Et ça, c’est papa ?"],["А","Нет, это мой брат.","Non, c’est mon frère."],["Б","Я люблю футбол!","J’aime le foot !"]],
    drills: [
      { q: "Comment se lit « брат » ?", opts: ["brat","vrat","bpat"], a: "brat" },
      { q: "Comment se lit « люблю » ?", opts: ["lioubliou","lublu","liobio"], a: "lioubliou" },
      { q: "Que veut dire « я » ?", opts: ["je","et","oui"], a: "je" },
      { q: "Comment se lit « дом » ?", opts: ["dom","gom","bom"], a: "dom" }
    ]
  },
  {
    id: "a0-4", level: "A0", title: "Les sons du russe", ru: "Русские звуки",
    goal: "Maîtriser Ж, Ц, Ч, Ш, Щ, Ы et les signes Ь, Ъ.",
    theory: [
      { h: "Les chuintantes", p: "<span class='ru'>Ж</span> j (« jour ») · <span class='ru'>Ш</span> ch dur (« chat ») · <span class='ru'>Щ</span> ch long et doux · <span class='ru'>Ч</span> tch · <span class='ru'>Ц</span> ts." },
      { h: "Le fameux Ы", p: "Place ta bouche pour dire « i », puis recule la langue comme pour dire « ou » sans arrondir les lèvres. <span class='ru'>ты</span> (tu) et <span class='ru'>ти</span> ne sonnent pas pareil !" },
      { h: "Les signes muets", p: "<span class='ru'>Ь</span> (signe mou) adoucit la consonne : <span class='ru'>мат</span> (échec et mat) ≠ <span class='ru'>мать</span> (mère). <span class='ru'>Ъ</span> (signe dur) sépare : <span class='ru'>подъе'зд</span> se dit « pad-iezd »." },
      { h: "Petite exception", p: "<span class='ru'>что</span> (quoi) se prononce <b>chto</b>, pas « tchto »." }
    ],
    vocab: [["чай","thé"],["что","quoi (« chto »)"],["шко'ла","école"],["борщ","bortsch"],["журна'л","magazine"],["у'лица","rue"],["мы","nous"],["ты","tu"],["вы","vous"],["сыр","fromage"],["мать","mère"],["день","jour"]],
    dialogue: [["А","Что это?","Qu’est-ce que c’est ?"],["Б","Это борщ. А это чай.","C’est du bortsch. Et ça, c’est du thé."],["А","А сыр?","Et le fromage ?"],["Б","Вот сыр! Мы любим сыр.","Voici le fromage ! Nous aimons le fromage."]],
    drills: [
      { q: "Comment se prononce « что » ?", opts: ["chto","tchto","kto"], a: "chto" },
      { q: "Comment se lit « чай » ?", opts: ["tchaï","chaï","tsaï"], a: "tchaï" },
      { q: "Le signe « ь »…", opts: ["adoucit la consonne","se prononce i","se prononce comme ы"], a: "adoucit la consonne" },
      { q: "Comment se lit « мы » ?", opts: ["my","mi","mou"], a: "my" }
    ]
  },
  {
    id: "a0-5", level: "A0", title: "L’accent et la réduction", ru: "Ударение",
    goal: "Comprendre pourquoi молоко se dit « malako ».",
    theory: [
      { h: "Un accent tonique libre", p: "Chaque mot russe a <b>une syllabe accentuée</b>, plus longue et plus forte. Elle peut être n’importe où et n’est pas écrite dans les textes normaux. Dans cette appli, elle est marquée : <span class='ru'>молоко'</span>." },
      { h: "La réduction des voyelles", p: "Sans accent, <span class='ru'>о</span> se prononce « a » et <span class='ru'>е</span> / <span class='ru'>я</span> se rapprochent de « i ». <span class='ru'>хорошо'</span> = kharacho · <span class='ru'>Москва'</span> = maskva · <span class='ru'>сестра'</span> = sistra. La translittération de l’appli te montre déjà la vraie prononciation, avec la syllabe forte en gras." },
      { h: "L’assourdissement final", p: "En fin de mot, les consonnes sonores deviennent sourdes : <span class='ru'>хлеб</span> se dit « khliep », <span class='ru'>го'род</span> « gorat »." }
    ],
    vocab: [["молоко'","lait"],["спаси'бо","merci"],["пожа'луйста","s’il te plaît ; je t’en prie"],["вода'","eau"],["хлеб","pain"],["сестра'","sœur"],["о'кна","fenêtres"],["доро'га","route"]],
    dialogue: [["А","Хлеб и молоко, пожалуйста.","Du pain et du lait, s’il vous plaît."],["Б","Вот, пожалуйста.","Voilà, je vous en prie."],["А","Спасибо!","Merci !"]],
    drills: [
      { q: "Comment se prononce « хорошо' » ?", opts: ["kharacho","khorocho","horosho"], a: "kharacho" },
      { q: "Dans « вода' », la syllabe forte est…", opts: ["la deuxième","la première"], a: "la deuxième" },
      { q: "« хлеб » se prononce à la fin…", opts: ["avec un p","avec un b"], a: "avec un p" }
    ]
  },

  // ───────────── A1 · Начало ─────────────
  {
    id: "a1-01", level: "A1", title: "Bonjour !", ru: "Здравствуйте!",
    goal: "Saluer, prendre congé, choisir entre ты et вы.",
    theory: [
      { h: "Ты ou вы ?", p: "<span class='ru'>ты</span> s’emploie avec la famille, les amis, les enfants. <span class='ru'>вы</span> avec les inconnus, les aînés, au travail, et pour plusieurs personnes. Pour proposer de se tutoyer : <span class='ru'>Дава'й на ты?</span>" },
      { h: "Dire bonjour", p: "<span class='ru'>Здра'вствуйте</span> (formel, le premier в est muet : « zdrastvouïtié ») · <span class='ru'>Приве'т</span> (entre proches) · <span class='ru'>До'брое у'тро</span> le matin · <span class='ru'>До'брый день</span> la journée · <span class='ru'>До'брый ве'чер</span> le soir." },
      { h: "Prénom et patronyme", p: "Pour montrer du respect, on appelle quelqu’un par son prénom + patronyme (le prénom du père + -овна / -ович) : <span class='ru'>Ири'на Петро'вна</span>, <span class='ru'>Ива'н Серге'евич</span>. Entre proches on utilise des diminutifs : Анна → <span class='ru'>А'ня</span>, Александр → <span class='ru'>Са'ша</span>." }
    ],
    vocab: [["здра'вствуйте","bonjour (formel)"],["приве'т","salut"],["до'брое у'тро","bonjour (le matin)"],["до'брый день","bonjour (la journée)"],["до'брый ве'чер","bonsoir"],["до свида'ния","au revoir"],["пока'","salut, à plus"],["как дела'?","comment ça va ?"],["хорошо'","bien"],["отли'чно","très bien, super"],["так себе'","comme ci comme ça"],["спаси'бо","merci"],["а у тебя'?","et toi ?"]],
    dialogue: [
      ["Анна","Привет, Максим!","Salut, Maxime !"],
      ["Максим","Привет, Аня! Как дела?","Salut, Ania ! Ça va ?"],
      ["Анна","Хорошо, спасибо. А у тебя?","Bien, merci. Et toi ?"],
      ["Максим","Отлично!","Super !"],
      ["Анна","Здравствуйте, Ирина Петровна!","Bonjour, Irina Petrovna !"],
      ["Ирина","Добрый день, Анна. Как ваши дела?","Bonjour, Anna. Comment allez-vous ?"],
      ["Анна","Спасибо, хорошо. До свидания!","Bien, merci. Au revoir !"]
    ],
    drills: [
      { q: "___, Максим! Как дела? (entre amis)", opts: ["Привет","Здравствуйте","До свидания"], a: "Привет" },
      { q: "Ирина Петровна, как ___ дела? (formel)", opts: ["ваши","твои"], a: "ваши" },
      { q: "Au revoir (formel) : ___", opts: ["До свидания","Пока","Привет"], a: "До свидания" },
      { q: "— Как дела? — ___ (bien)", a: "Хорошо" },
      { q: "Pour parler à ton chef, tu utilises…", opts: ["вы","ты"], a: "вы" }
    ]
  },
  {
    id: "a1-02", level: "A1", title: "Se présenter", ru: "Кто вы?",
    goal: "Dire qui tu es, ta nationalité, ton métier.",
    theory: [
      { h: "Pas de verbe « être » au présent", p: "En russe, on dit simplement <span class='ru'>Я студе'нт</span> : « je étudiant ». <span class='ru'>Э'то</span> veut dire « c’est / ce sont » : <span class='ru'>Э'то Оле'г</span>." },
      { h: "Les pronoms personnels", p: "<table class='gram'><tr><td class='ru'>я</td><td>je</td><td class='ru'>мы</td><td>nous</td></tr><tr><td class='ru'>ты</td><td>tu</td><td class='ru'>вы</td><td>vous</td></tr><tr><td class='ru'>он / она' / оно'</td><td>il / elle / (neutre)</td><td class='ru'>они'</td><td>ils, elles</td></tr></table>" },
      { h: "Comment tu t’appelles ?", p: "<span class='ru'>Как тебя' зову'т?</span> (litt. « comment t’appelle-t-on ? ») → <span class='ru'>Меня' зову'т Клэр.</span> Au vouvoiement : <span class='ru'>Как вас зову'т?</span>" },
      { h: "Les questions", p: "Une question oui/non a la même forme qu’une affirmation : seule l’intonation monte fortement sur le mot interrogé. <span class='ru'>Вы францу'женка?</span>" }
    ],
    vocab: [["кто","qui"],["что","quoi"],["меня' зову'т…","je m’appelle…"],["как вас зову'т?","comment vous appelez-vous ?"],["о'чень прия'тно","enchanté(e)"],["францу'з","Français"],["францу'женка","Française"],["ру'сский","Russe (homme)"],["ру'сская","Russe (femme)"],["студе'нт","étudiant"],["студе'нтка","étudiante"],["инжене'р","ingénieur"],["нет","non"]],
    dialogue: [
      ["Олег","Здравствуйте! Меня зовут Олег. А как вас зовут?","Bonjour ! Je m’appelle Oleg. Et vous, comment vous appelez-vous ?"],
      ["Клэр","Меня зовут Клэр. Очень приятно!","Je m’appelle Claire. Enchantée !"],
      ["Олег","Очень приятно. Вы француженка?","Enchanté. Vous êtes française ?"],
      ["Клэр","Да, я француженка. А вы русский?","Oui, je suis française. Et vous, vous êtes russe ?"],
      ["Олег","Да, я русский. Я инженер.","Oui, je suis russe. Je suis ingénieur."],
      ["Клэр","А я студентка.","Et moi, je suis étudiante."]
    ],
    drills: [
      { q: "Меня ___ Клэр.", opts: ["зовут","зовёт","звать"], a: "зовут" },
      { q: "— Кто это? — ___ Олег.", opts: ["Это","Что","Как"], a: "Это" },
      { q: "Elle est russe : Она ___.", opts: ["русская","русский"], a: "русская" },
      { q: "Écris « nous » en russe", a: "мы" },
      { q: "Je suis français : Я ___.", a: "француз" }
    ]
  },
  {
    id: "a1-03", level: "A1", title: "Ma famille", ru: "Моя семья",
    goal: "Présenter ta famille, comprendre le genre des noms.",
    theory: [
      { h: "Trois genres", p: "Masculin : consonne ou -й (<span class='ru'>брат, музе'й</span>). Féminin : -а / -я (<span class='ru'>ма'ма, семья'</span>). Neutre : -о / -е (<span class='ru'>окно', мо'ре</span>). Les mots en -ь peuvent être masculins ou féminins (<span class='ru'>день</span> m., <span class='ru'>мать</span> f.)." },
      { h: "Exception logique", p: "Les hommes restent masculins même en -а : <span class='ru'>па'па, де'душка, дя'дя</span>." },
      { h: "Les possessifs", p: "<table class='gram'><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>pl.</th></tr><tr><td>mon</td><td class='ru'>мой</td><td class='ru'>моя'</td><td class='ru'>моё</td><td class='ru'>мои'</td></tr><tr><td>ton</td><td class='ru'>твой</td><td class='ru'>твоя'</td><td class='ru'>твоё</td><td class='ru'>твои'</td></tr><tr><td>notre</td><td class='ru'>наш</td><td class='ru'>на'ша</td><td class='ru'>на'ше</td><td class='ru'>на'ши</td></tr><tr><td>votre</td><td class='ru'>ваш</td><td class='ru'>ва'ша</td><td class='ru'>ва'ше</td><td class='ru'>ва'ши</td></tr></table><span class='ru'>его'</span> (son, à lui), <span class='ru'>её</span> (son, à elle), <span class='ru'>их</span> (leur) ne changent jamais." }
    ],
    vocab: [["семья'","famille"],["ма'ма","maman"],["па'па","papa"],["роди'тели","parents"],["брат","frère"],["сестра'","sœur"],["сын","fils"],["дочь","fille (enfant)"],["муж","mari"],["жена'","épouse"],["ба'бушка","grand-mère"],["де'душка","grand-père"],["де'ти","enfants"],["краси'вый","beau"]],
    dialogue: [
      ["Лена","Это моя семья.","C’est ma famille."],
      ["Тома","Кто это?","Qui est-ce ?"],
      ["Лена","Это мой папа, а это моя мама.","C’est mon papa, et ça c’est ma maman."],
      ["Тома","А это твой брат?","Et lui, c’est ton frère ?"],
      ["Лена","Нет, это мой муж Саша. А это наши дети.","Non, c’est mon mari, Sacha. Et ce sont nos enfants."],
      ["Тома","Какая красивая семья!","Quelle belle famille !"]
    ],
    drills: [
      { q: "___ сестра (ma)", opts: ["моя","мой","моё"], a: "моя" },
      { q: "___ брат (ton)", opts: ["твой","твоя","твоё"], a: "твой" },
      { q: "Это ___ дети (nos)", opts: ["наши","наш","наша"], a: "наши" },
      { q: "Le mot « папа » est…", opts: ["masculin","féminin"], a: "masculin" },
      { q: "___ окно (ma fenêtre)", opts: ["моё","мой","моя"], a: "моё" }
    ]
  },
  {
    id: "a1-04", level: "A1", title: "Les nombres et l’âge", ru: "Числа",
    goal: "Compter, donner un numéro, dire ton âge.",
    theory: [
      { h: "De 11 à 19", p: "On ajoute <b>-надцать</b> : <span class='ru'>оди'ннадцать</span> 11, <span class='ru'>двена'дцать</span> 12, <span class='ru'>пятна'дцать</span> 15. Les dizaines : <span class='ru'>два'дцать</span> 20, <span class='ru'>три'дцать</span> 30, <span class='ru'>со'рок</span> 40, <span class='ru'>пятьдеся'т</span> 50." },
      { h: "Dire son âge", p: "On dit « à moi 25 ans » : <span class='ru'>Мне два'дцать пять лет.</span> La question : <span class='ru'>Ско'лько тебе' лет?</span>" },
      { h: "Le mot « an » change !", p: "Après 1 (21, 31…) : <span class='ru'>год</span> · après 2, 3, 4 (22, 33…) : <span class='ru'>го'да</span> · après 5 à 20 (et 25, 30…) : <span class='ru'>лет</span>. Cette règle vaut pour tous les noms : 1 <span class='ru'>рубль</span>, 2 <span class='ru'>рубля'</span>, 5 <span class='ru'>рубле'й</span>." }
    ],
    vocab: [["ноль","zéro"],["оди'н","un"],["два","deux"],["три","trois"],["четы'ре","quatre"],["пять","cinq"],["шесть","six"],["семь","sept"],["во'семь","huit"],["де'вять","neuf"],["де'сять","dix"],["два'дцать","vingt"],["сто","cent"],["ско'лько","combien"]],
    dialogue: [
      ["Марк","Сколько тебе лет?","Quel âge as-tu ?"],
      ["Вика","Мне двадцать пять лет. А тебе?","J’ai vingt-cinq ans. Et toi ?"],
      ["Марк","Мне тридцать один год.","J’ai trente et un ans."],
      ["Вика","А сколько лет твоей сестре?","Et ta sœur, quel âge a-t-elle ?"],
      ["Марк","Ей двадцать два года.","Elle a vingt-deux ans."]
    ],
    drills: [
      { q: "Мне 5 ___.", opts: ["лет","год","года"], a: "лет" },
      { q: "Ему 21 ___.", opts: ["год","года","лет"], a: "год" },
      { q: "Ей 3 ___.", opts: ["года","год","лет"], a: "года" },
      { q: "Écris « sept » en russe", a: "семь" },
      { q: "4 = ___", opts: ["четыре","четырнадцать","сорок"], a: "четыре" }
    ]
  },
  {
    id: "a1-05", level: "A1", title: "Où ? À la maison, en ville", ru: "Где?",
    goal: "Dire où tu habites et où se trouvent les choses (prépositionnel).",
    theory: [
      { h: "Le cas prépositionnel", p: "Pour répondre à <span class='ru'>где?</span> (où ?), on utilise <span class='ru'>в</span> (dans) ou <span class='ru'>на</span> (sur, à) + la terminaison <b>-е</b> : <span class='ru'>дом → в до'ме</span>, <span class='ru'>шко'ла → в шко'ле</span>, <span class='ru'>Москва' → в Москве'</span>." },
      { h: "Terminaison -и", p: "Les mots en <b>-ия</b> et les féminins en <b>-ь</b> prennent -и : <span class='ru'>Росси'я → в Росси'и</span>, <span class='ru'>тетра'дь → в тетра'ди</span>." },
      { h: "В ou на ?", p: "En général <span class='ru'>в</span>. Mais certains mots prennent <span class='ru'>на</span> : <span class='ru'>на рабо'те, на у'лице, на ку'хне, на по'чте, на вокза'ле, на конце'рте</span>. Il faut les apprendre." },
      { h: "Le verbe жить", p: "<span class='ru'>я живу', ты живёшь, он живёт, мы живём, вы живёте, они' живу'т</span>." }
    ],
    vocab: [["где","où (sans mouvement)"],["дом","maison, immeuble"],["кварти'ра","appartement"],["ко'мната","pièce, chambre"],["ку'хня","cuisine"],["рабо'та","travail"],["у'лица","rue"],["го'род","ville"],["жить","vivre, habiter"],["здесь","ici"],["центр","centre"],["стол","table"]],
    dialogue: [
      ["Пьер","Где ты живёшь?","Où habites-tu ?"],
      ["Даша","Я живу в Москве, в центре. А ты?","J’habite à Moscou, dans le centre. Et toi ?"],
      ["Пьер","Я живу в Париже.","J’habite à Paris."],
      ["Даша","А где твоя мама?","Et où est ta maman ?"],
      ["Пьер","Она дома, на кухне.","Elle est à la maison, dans la cuisine."],
      ["Даша","А папа?","Et papa ?"],
      ["Пьер","Папа на работе.","Papa est au travail."]
    ],
    drills: [
      { q: "Я живу в ___ (Москва)", opts: ["Москве","Москва","Москву"], a: "Москве" },
      { q: "Мама на ___ (кухня)", opts: ["кухне","кухня","кухню"], a: "кухне" },
      { q: "Я живу в ___ (Россия)", opts: ["России","Россие","Россия"], a: "России" },
      { q: "Папа ___ работе", opts: ["на","в"], a: "на" },
      { q: "Écris « où ? » en russe", a: "где" }
    ]
  },
  {
    id: "a1-06", level: "A1", title: "Que fais-tu ?", ru: "Что ты делаешь?",
    goal: "Conjuguer les verbes du 1er groupe au présent.",
    theory: [
      { h: "La 1ʳᵉ conjugaison", p: "La plupart des verbes en <b>-ать / -ять</b> : on enlève -ть et on ajoute les terminaisons.<table class='gram'><tr><td class='ru'>я чита'ю</td><td class='ru'>мы чита'ем</td></tr><tr><td class='ru'>ты чита'ешь</td><td class='ru'>вы чита'ете</td></tr><tr><td class='ru'>он чита'ет</td><td class='ru'>они' чита'ют</td></tr></table>" },
      { h: "La négation", p: "<span class='ru'>не</span> se place juste avant le mot nié : <span class='ru'>Я не понима'ю</span> (je ne comprends pas)." },
      { h: "Le complément d’objet", p: "Après un verbe, les noms féminins changent -а en <b>-у</b> : <span class='ru'>кни'га → Я чита'ю кни'гу</span>. Les masculins et neutres (objets) ne changent pas : <span class='ru'>Я чита'ю журна'л</span>. C’est l’accusatif, tu le reverras." }
    ],
    vocab: [["де'лать","faire"],["чита'ть","lire"],["знать","savoir, connaître"],["рабо'тать","travailler"],["понима'ть","comprendre"],["слу'шать","écouter"],["гуля'ть","se promener"],["кни'га","livre"],["му'зыка","musique"],["сейча'с","maintenant"],["ча'сто","souvent"],["иногда'","parfois"],["немно'го","un peu"]],
    dialogue: [
      ["Иван","Что ты делаешь?","Qu’est-ce que tu fais ?"],
      ["Софи","Я читаю книгу. А ты?","Je lis un livre. Et toi ?"],
      ["Иван","Я слушаю музыку.","J’écoute de la musique."],
      ["Софи","Ты понимаешь по-французски?","Tu comprends le français ?"],
      ["Иван","Да, немного понимаю.","Oui, je comprends un peu."],
      ["Софи","Где ты работаешь?","Où travailles-tu ?"],
      ["Иван","Я работаю в банке.","Je travaille dans une banque."]
    ],
    drills: [
      { q: "Я ___ книгу (читать)", a: "читаю" },
      { q: "Они ___ в Москве (работать)", a: "работают" },
      { q: "Мы ___ (знать)", opts: ["знаем","знает","знают"], a: "знаем" },
      { q: "Ты ___ музыку? (слушать)", opts: ["слушаешь","слушает","слушаю"], a: "слушаешь" },
      { q: "Je ne comprends pas : Я ___ понимаю", a: "не" }
    ]
  },
  {
    id: "a1-07", level: "A1", title: "Je parle russe", ru: "Я говорю по-русски",
    goal: "Conjuguer les verbes du 2ᵉ groupe, parler des langues.",
    theory: [
      { h: "La 2ᵉ conjugaison", p: "Surtout les verbes en <b>-ить</b> (et quelques -еть) : terminaisons en <b>и</b>.<table class='gram'><tr><td class='ru'>я говорю'</td><td class='ru'>мы говори'м</td></tr><tr><td class='ru'>ты говори'шь</td><td class='ru'>вы говори'те</td></tr><tr><td class='ru'>он говори'т</td><td class='ru'>они' говоря'т</td></tr></table>" },
      { h: "Mutation à la 1ʳᵉ personne", p: "Certains verbes changent leur consonne seulement avec <span class='ru'>я</span> : <span class='ru'>люби'ть → я люблю'</span> (mais <span class='ru'>ты лю'бишь</span>), <span class='ru'>ви'деть → я ви'жу</span>." },
      { h: "Parler une langue", p: "<span class='ru'>говори'ть по-ру'сски</span> (adverbe : « à la russe »), mais <span class='ru'>учи'ть ру'сский язы'к</span> (apprendre la langue russe)." }
    ],
    vocab: [["говори'ть","parler"],["люби'ть","aimer"],["смотре'ть","regarder"],["учи'ть","apprendre (qqch)"],["звони'ть","téléphoner"],["по-ру'сски","en russe"],["по-францу'зски","en français"],["по-англи'йски","en anglais"],["язы'к","langue"],["ме'дленно","lentement"],["ещё раз","encore une fois"],["повтори'те, пожа'луйста","répétez, s’il vous plaît"]],
    dialogue: [
      ["Нина","Вы говорите по-русски?","Vous parlez russe ?"],
      ["Люк","Да, немного. Я учу русский язык.","Oui, un peu. J’apprends le russe."],
      ["Нина","Вы хорошо говорите!","Vous parlez bien !"],
      ["Люк","Спасибо! Говорите, пожалуйста, медленно.","Merci ! Parlez lentement, s’il vous plaît."],
      ["Нина","Хорошо. Вы любите Москву?","D’accord. Vous aimez Moscou ?"],
      ["Люк","Да, очень люблю!","Oui, je l’adore !"]
    ],
    drills: [
      { q: "Я ___ по-русски (говорить)", a: "говорю" },
      { q: "Они ___ фильм (смотреть)", opts: ["смотрят","смотрит","смотрим"], a: "смотрят" },
      { q: "Я ___ музыку (любить)", opts: ["люблю","любю","любим"], a: "люблю" },
      { q: "Ты ___ по-французски?", opts: ["говоришь","говорит","говорю"], a: "говоришь" },
      { q: "Écris « lentement » en russe", a: "медленно" }
    ]
  },
  {
    id: "a1-08", level: "A1", title: "Manger et boire", ru: "Еда и напитки",
    goal: "Commander au restaurant, utiliser хотеть et l’accusatif.",
    theory: [
      { h: "Хотеть, verbe irrégulier", p: "<span class='ru'>я хочу', ты хо'чешь, он хо'чет, мы хоти'м, вы хоти'те, они' хотя'т</span>. Plus poli : <span class='ru'>Я бы хоте'л(а)…</span> (je voudrais)." },
      { h: "L’accusatif des objets", p: "<span class='ru'>ры'ба → Я хочу' ры'бу</span> · <span class='ru'>вода' → Я пью во'ду</span> · <span class='ru'>-я → -ю</span>. Masculin et neutre ne changent pas : <span class='ru'>сыр, молоко'</span>." },
      { h: "Manger et boire", p: "<span class='ru'>есть</span> : ем, ешь, ест, еди'м, еди'те, едя'т · <span class='ru'>пить</span> : пью, пьёшь, пьёт, пьём, пьёте, пьют." },
      { h: "Le café est masculin", p: "<span class='ru'>ко'фе</span> ne se décline pas et il est masculin : <span class='ru'>чёрный ко'фе</span>." }
    ],
    vocab: [["хлеб","pain"],["вода'","eau"],["молоко'","lait"],["ко'фе","café (boisson)"],["чай","thé"],["сыр","fromage"],["мя'со","viande"],["ры'ба","poisson"],["о'вощи","légumes"],["суп","soupe"],["хоте'ть","vouloir"],["есть","manger"],["пить","boire"],["вку'сно","c’est bon, délicieux"],["счёт","l’addition"]],
    dialogue: [
      ["Официант","Добрый вечер! Что вы хотите?","Bonsoir ! Que désirez-vous ?"],
      ["Клиент","Я хочу суп и рыбу.","Je voudrais une soupe et du poisson."],
      ["Официант","А что вы будете пить?","Et que boirez-vous ?"],
      ["Клиент","Воду, пожалуйста. И кофе.","De l’eau, s’il vous plaît. Et un café."],
      ["Клиент","Очень вкусно! Счёт, пожалуйста.","C’est délicieux ! L’addition, s’il vous plaît."]
    ],
    drills: [
      { q: "Я хочу ___ (рыба)", opts: ["рыбу","рыба","рыбы"], a: "рыбу" },
      { q: "Я пью ___ (вода)", opts: ["воду","вода","воды"], a: "воду" },
      { q: "Ты ___ кофе? (хотеть)", opts: ["хочешь","хотишь","хочет"], a: "хочешь" },
      { q: "Мы ___ чай (хотеть)", a: "хотим" },
      { q: "Я ем ___ (сыр)", opts: ["сыр","сыра","сыру"], a: "сыр" }
    ]
  },
  {
    id: "a1-09", level: "A1", title: "L’heure et les jours", ru: "Который час?",
    goal: "Donner l’heure, parler de ton emploi du temps.",
    theory: [
      { h: "Quelle heure est-il ?", p: "<span class='ru'>Кото'рый час?</span> ou <span class='ru'>Ско'лько вре'мени?</span> Même règle que pour l’âge : 1 <span class='ru'>час</span>, 2–4 <span class='ru'>часа'</span>, 5+ <span class='ru'>часо'в</span>." },
      { h: "Quand ?", p: "Avec les jours : <span class='ru'>в</span> + accusatif : <span class='ru'>в понеде'льник, в сре'ду, в пя'тницу, в суббо'ту</span>. Avec l’heure : <span class='ru'>в три часа'</span>." },
      { h: "Moments de la journée", p: "<span class='ru'>у'тром</span> le matin · <span class='ru'>днём</span> l’après-midi · <span class='ru'>ве'чером</span> le soir · <span class='ru'>но'чью</span> la nuit." }
    ],
    vocab: [["понеде'льник","lundi"],["вто'рник","mardi"],["среда'","mercredi"],["четве'рг","jeudi"],["пя'тница","vendredi"],["суббо'та","samedi"],["воскресе'нье","dimanche"],["сего'дня","aujourd’hui"],["за'втра","demain"],["у'тром","le matin"],["ве'чером","le soir"],["час","heure"],["когда'","quand"],["отдыха'ть","se reposer"]],
    dialogue: [
      ["Лиза","Который час?","Quelle heure est-il ?"],
      ["Том","Сейчас три часа.","Il est trois heures."],
      ["Лиза","Когда у тебя урок?","Quand as-tu cours ?"],
      ["Том","В среду, в шесть часов вечера.","Mercredi, à six heures du soir."],
      ["Лиза","А в субботу ты работаешь?","Et samedi, tu travailles ?"],
      ["Том","Нет, в субботу я отдыхаю.","Non, le samedi je me repose."]
    ],
    drills: [
      { q: "Сейчас 2 ___", opts: ["часа","час","часов"], a: "часа" },
      { q: "Сейчас 7 ___", opts: ["часов","часа","час"], a: "часов" },
      { q: "в ___ (среда)", opts: ["среду","среда","среде"], a: "среду" },
      { q: "в ___ (пятница)", opts: ["пятницу","пятница","пятнице"], a: "пятницу" },
      { q: "Écris « demain » en russe", a: "завтра" }
    ]
  },
  {
    id: "a1-10", level: "A1", title: "En ville", ru: "В городе",
    goal: "Demander ton chemin, distinguer где / куда, идти / ехать.",
    theory: [
      { h: "Où es-tu ? Où vas-tu ?", p: "<span class='ru'>где?</span> (sans mouvement) → prépositionnel : <span class='ru'>Я в шко'ле</span>. <span class='ru'>куда'?</span> (direction) → accusatif : <span class='ru'>Я иду' в шко'лу</span>." },
      { h: "À pied ou en véhicule", p: "<span class='ru'>идти'</span> = aller à pied : иду', идёшь, идёт, идём, идёте, иду'т.<br><span class='ru'>е'хать</span> = aller en véhicule : е'ду, е'дешь, е'дет, е'дем, е'дете, е'дут.<br>Le russe précise toujours le moyen de déplacement !" },
      { h: "Les directions", p: "<span class='ru'>нале'во</span> à gauche · <span class='ru'>напра'во</span> à droite · <span class='ru'>пря'мо</span> tout droit · <span class='ru'>пото'м</span> ensuite." }
    ],
    vocab: [["куда'","où (direction)"],["идти'","aller (à pied)"],["е'хать","aller (en véhicule)"],["магази'н","magasin"],["апте'ка","pharmacie"],["вокза'л","gare"],["авто'бус","bus"],["нале'во","à gauche"],["напра'во","à droite"],["пря'мо","tout droit"],["далеко'","loin"],["бли'зко","près"],["извини'те","excusez-moi"]],
    dialogue: [
      ["Турист","Извините, где здесь метро?","Excusez-moi, où est le métro ?"],
      ["Женщина","Идите прямо, потом направо.","Allez tout droit, puis à droite."],
      ["Турист","Это далеко?","C’est loin ?"],
      ["Женщина","Нет, близко. Пять минут.","Non, c’est près. Cinq minutes."],
      ["Женщина","А вы куда едете?","Et vous, où allez-vous ?"],
      ["Турист","Я еду на вокзал. Спасибо большое!","Je vais à la gare. Merci beaucoup !"]
    ],
    drills: [
      { q: "Я иду в ___ (школа)", opts: ["школу","школе","школа"], a: "школу" },
      { q: "Я ___ в Москву (en train)", opts: ["еду","иду"], a: "еду" },
      { q: "Мы ___ в магазин (à pied)", opts: ["идём","едем","идёт"], a: "идём" },
      { q: "___ ты идёшь? — В аптеку.", opts: ["Куда","Где"], a: "Куда" },
      { q: "Écris « à droite » en russe", a: "направо" }
    ]
  },
  {
    id: "a1-11", level: "A1", title: "Ce que j’aime", ru: "Мне нравится",
    goal: "Exprimer tes goûts avec нравиться et le datif des pronoms.",
    theory: [
      { h: "« Cela me plaît »", p: "Avec <span class='ru'>нра'виться</span>, la chose aimée est le sujet, et la personne est au datif : <span class='ru'>Мне нра'вится Москва'</span> (Moscou me plaît). Au pluriel : <span class='ru'>Мне нра'вятся кни'ги</span>. Avec un verbe : <span class='ru'>Мне нра'вится чита'ть</span>." },
      { h: "Les pronoms au datif", p: "<table class='gram'><tr><td class='ru'>мне</td><td>à moi</td><td class='ru'>нам</td><td>à nous</td></tr><tr><td class='ru'>тебе'</td><td>à toi</td><td class='ru'>вам</td><td>à vous</td></tr><tr><td class='ru'>ему' / ей</td><td>à lui / à elle</td><td class='ru'>им</td><td>à eux</td></tr></table>" },
      { h: "Ce que je ressens", p: "Même construction pour les sensations : <span class='ru'>Мне хо'лодно</span> (j’ai froid), <span class='ru'>Мне ску'чно</span> (je m’ennuie), <span class='ru'>Мне интере'сно</span> (ça m’intéresse)." }
    ],
    vocab: [["нра'виться","plaire"],["мне","à moi"],["тебе'","à toi"],["ему'","à lui"],["ей","à elle"],["нам","à nous"],["вам","à vous"],["им","à eux"],["интере'сно","intéressant"],["ску'чно","ennuyeux"],["хо'лодно","froid"],["кино'","cinéma"],["путеше'ствовать","voyager"],["осо'бенно","surtout"]],
    dialogue: [
      ["Катя","Тебе нравится Москва?","Moscou te plaît ?"],
      ["Жюль","Очень нравится! Особенно метро.","Énormément ! Surtout le métro."],
      ["Катя","А что тебе нравится делать?","Et qu’est-ce que tu aimes faire ?"],
      ["Жюль","Мне нравится путешествовать и читать.","J’aime voyager et lire."],
      ["Катя","А твоему брату?","Et ton frère ?"],
      ["Жюль","Ему нравится спорт.","Lui, il aime le sport."]
    ],
    drills: [
      { q: "___ нравится музыка (à moi)", opts: ["Мне","Я","Меня"], a: "Мне" },
      { q: "Ей ___ книги", opts: ["нравятся","нравится"], a: "нравятся" },
      { q: "___ холодно (à lui)", opts: ["Ему","Он","Его"], a: "Ему" },
      { q: "Нам ___ Москва", opts: ["нравится","нравятся"], a: "нравится" },
      { q: "Écris « à vous » en russe", a: "вам" }
    ]
  },
  {
    id: "a1-12", level: "A1", title: "Hier", ru: "Вчера",
    goal: "Raconter au passé.",
    theory: [
      { h: "Un passé très simple", p: "Radical de l’infinitif + <b>-л</b> (m.), <b>-ла</b> (f.), <b>-ло</b> (n.), <b>-ли</b> (pl.). Il s’accorde en genre, pas en personne : <span class='ru'>я чита'л</span> (un homme), <span class='ru'>я чита'ла</span> (une femme), <span class='ru'>мы чита'ли</span>." },
      { h: "Être au passé", p: "<span class='ru'>был, была', бы'ло, бы'ли</span> : <span class='ru'>Вчера' был день рожде'ния</span>. Sans sujet : <span class='ru'>Бы'ло ве'село</span> (c’était sympa)." },
      { h: "Quelques irréguliers", p: "<span class='ru'>идти' → шёл, шла, шли</span> · <span class='ru'>есть → ел, е'ла</span> · <span class='ru'>мочь → мог, могла'</span>." }
    ],
    vocab: [["вчера'","hier"],["был","il était"],["была'","elle était"],["бы'ли","ils étaient"],["позавчера'","avant-hier"],["давно'","il y a longtemps"],["уже'","déjà"],["ве'село","joyeux, sympa"],["день рожде'ния","anniversaire"],["пода'рок","cadeau"],["у'жин","dîner"],["пригото'вить","préparer (cuisine)"],["подари'ть","offrir"],["фо'то","photo"]],
    dialogue: [
      ["Саша","Что ты делала вчера?","Qu’est-ce que tu as fait hier ?"],
      ["Ира","Вчера был день рождения мамы.","Hier c’était l’anniversaire de maman."],
      ["Саша","Здорово! Было весело?","Génial ! C’était sympa ?"],
      ["Ира","Да! Папа приготовил ужин, а мы смотрели старые фото.","Oui ! Papa a préparé le dîner, et on a regardé de vieilles photos."],
      ["Саша","А что ты подарила?","Et qu’est-ce que tu as offert ?"],
      ["Ира","Я подарила книгу.","J’ai offert un livre."]
    ],
    drills: [
      { q: "Вчера она ___ (читать)", opts: ["читала","читал","читали"], a: "читала" },
      { q: "Мы ___ фильм (смотреть)", a: "смотрели" },
      { q: "Вчера ___ холодно", opts: ["было","был","была"], a: "было" },
      { q: "Он ___ в Москве", opts: ["был","была","были"], a: "был" },
      { q: "Я (une femme) ___ (работать)", a: "работала" }
    ]
  }
];
