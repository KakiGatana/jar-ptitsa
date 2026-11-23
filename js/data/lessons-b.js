// Leçons A2, B1, B2, C1.
export const LESSONS_B = [
  // ───────────── A2 · Основа ─────────────
  {
    id: "a2-01", level: "A2", title: "J’ai, je n’ai pas", ru: "У меня есть",
    goal: "Exprimer la possession et l’absence avec le génitif.",
    theory: [
      { h: "Avoir, à la russe", p: "On dit « chez moi il y a » : <span class='ru'>У меня' есть маши'на</span>. <span class='ru'>у</span> + génitif du pronom : <span class='ru'>у меня', у тебя', у него', у неё, у нас, у вас, у них</span>." },
      { h: "Ne pas avoir", p: "<span class='ru'>нет</span> + <b>génitif</b> : <span class='ru'>У меня' нет маши'ны</span>, <span class='ru'>нет бра'та</span>, <span class='ru'>нет вре'мени</span>." },
      { h: "Le génitif singulier", p: "<table class='gram'><tr><th>nominatif</th><th>génitif</th></tr><tr><td class='ru'>брат, окно'</td><td class='ru'>бра'та, окна'</td></tr><tr><td class='ru'>музе'й, мо'ре</td><td class='ru'>музе'я, мо'ря</td></tr><tr><td class='ru'>маши'на</td><td class='ru'>маши'ны</td></tr><tr><td class='ru'>кни'га, неде'ля</td><td class='ru'>кни'ги, неде'ли</td></tr></table>Après г, к, х, ж, ш, ч, щ, on écrit <b>и</b> et jamais ы : c’est la « règle des 7 lettres »." },
      { h: "Le génitif = « de »", p: "<span class='ru'>ча'шка ко'фе</span> une tasse de café · <span class='ru'>дом бра'та</span> la maison du frère." }
    ],
    vocab: [["у меня' есть","j’ai"],["у меня' нет","je n’ai pas"],["маши'на","voiture"],["вре'мя","temps (neutre)"],["де'ньги","argent"],["соба'ка","chien"],["ко'шка","chat (femelle)"],["биле'т","billet"],["вопро'с","question"],["мно'го","beaucoup"],["ма'ло","peu"],["пробле'ма","problème"]],
    dialogue: [
      ["Лена","У тебя есть машина?","Tu as une voiture ?"],
      ["Поль","Нет, у меня нет машины. Я езжу на метро.","Non, je n’ai pas de voiture. Je prends le métro."],
      ["Лена","А у твоего брата?","Et ton frère ?"],
      ["Поль","У него есть машина, но нет времени!","Lui, il a une voiture, mais pas le temps !"],
      ["Лена","А собака у вас есть?","Et vous avez un chien ?"],
      ["Поль","Нет, у нас кошка. Её зовут Муся.","Non, on a une chatte. Elle s’appelle Moussia."]
    ],
    drills: [
      { q: "У меня нет ___ (брат)", opts: ["брата","брат","брату"], a: "брата" },
      { q: "У неё нет ___ (машина)", opts: ["машины","машина","машину"], a: "машины" },
      { q: "У меня нет ___ (книга)", opts: ["книги","книгы","книга"], a: "книги" },
      { q: "У ___ есть дети? (ты)", opts: ["тебя","тебе","ты"], a: "тебя" },
      { q: "У меня нет ___ (время)", opts: ["времени","время","времи"], a: "времени" }
    ]
  },
  {
    id: "a2-02", level: "A2", title: "Combien ça coûte ?", ru: "Сколько стоит?",
    goal: "Faire des achats, maîtriser nombres + génitif pluriel.",
    theory: [
      { h: "Demander un prix", p: "<span class='ru'>Ско'лько сто'ит э'та ку'ртка?</span> (singulier) · <span class='ru'>Ско'лько сто'ят я'блоки?</span> (pluriel)." },
      { h: "Après 5 et plus : le génitif pluriel", p: "<b>-ов / -ев</b> pour les masculins : <span class='ru'>пять столо'в</span>. <b>Terminaison zéro</b> pour la plupart des féminins et neutres : <span class='ru'>пять книг, пять о'кон</span>. <b>-ей</b> après ь, ж, ш, ч, щ : <span class='ru'>пять рубле'й, ноче'й</span>. Irrégulier : <span class='ru'>мно'го люде'й</span>." },
      { h: "Phrases utiles en boutique", p: "<span class='ru'>Мо'жно посмотре'ть?</span> Je peux regarder ? · <span class='ru'>Мо'жно приме'рить?</span> Je peux essayer ? · <span class='ru'>Мо'жно ка'ртой?</span> Par carte ? · <span class='ru'>Беру'!</span> Je prends !" }
    ],
    vocab: [["сто'ить","coûter"],["рубль","rouble"],["ты'сяча","mille"],["до'рого","cher"],["дёшево","bon marché"],["ски'дка","réduction"],["разме'р","taille"],["ку'ртка","veste"],["руба'шка","chemise"],["я'блоко","pomme"],["паке'т","sac (plastique)"],["нали'чные","espèces"],["коне'чно","bien sûr"]],
    dialogue: [
      ["Покупатель","Здравствуйте! Сколько стоит эта куртка?","Bonjour ! Combien coûte cette veste ?"],
      ["Продавец","Пять тысяч рублей.","Cinq mille roubles."],
      ["Покупатель","Дорого… А скидка есть?","C’est cher… Il y a une réduction ?"],
      ["Продавец","Да, сегодня скидка двадцать процентов.","Oui, aujourd’hui il y a vingt pour cent de remise."],
      ["Покупатель","Отлично, беру! Можно картой?","Parfait, je la prends ! Je peux payer par carte ?"],
      ["Продавец","Конечно. Пакет нужен?","Bien sûr. Il vous faut un sac ?"],
      ["Покупатель","Нет, спасибо.","Non, merci."]
    ],
    drills: [
      { q: "2 ___ (рубль)", opts: ["рубля","рублей","рубль"], a: "рубля" },
      { q: "10 ___ (рубль)", opts: ["рублей","рубля","рубли"], a: "рублей" },
      { q: "Сколько ___ яблоки?", opts: ["стоят","стоит"], a: "стоят" },
      { q: "много ___ (люди)", opts: ["людей","люди","людям"], a: "людей" },
      { q: "пять ___ (книга)", opts: ["книг","книги","книга"], a: "книг" }
    ]
  },
  {
    id: "a2-03", level: "A2", title: "Avec qui ? Les métiers", ru: "С кем?",
    goal: "Utiliser l’instrumental : avec, métiers, activités.",
    theory: [
      { h: "L’instrumental", p: "Masculin et neutre : <b>-ом / -ем</b> (<span class='ru'>с дру'гом, с му'жем</span>). Féminin : <b>-ой / -ей</b> (<span class='ru'>с ма'мой, с до'чкой</span>)." },
      { h: "Avec + pronom", p: "<span class='ru'>со мной, с тобо'й, с ним, с ней, с на'ми, с ва'ми, с ни'ми</span>." },
      { h: "Les métiers", p: "Avec <span class='ru'>рабо'тать</span>, <span class='ru'>быть</span> (passé / futur) et <span class='ru'>стать</span> : <span class='ru'>Я рабо'таю врачо'м</span>, <span class='ru'>Он хо'чет стать учи'телем</span>. La question : <span class='ru'>Кем ты рабо'таешь?</span>" },
      { h: "Faire une activité", p: "<span class='ru'>занима'ться</span> + instrumental : <span class='ru'>занима'ться спо'ртом, му'зыкой</span>." }
    ],
    vocab: [["врач","médecin"],["учи'тель","professeur"],["инжене'р","ingénieur"],["программи'ст","développeur"],["юри'ст","juriste"],["колле'га","collègue"],["друг","ami"],["подру'га","amie"],["стать","devenir"],["занима'ться","pratiquer, s’occuper de"],["вме'сте","ensemble"],["больни'ца","hôpital"]],
    dialogue: [
      ["Артём","Кем ты работаешь?","Qu’est-ce que tu fais comme travail ?"],
      ["Мари","Я работаю программистом. А ты?","Je suis développeuse. Et toi ?"],
      ["Артём","Я врач. Работаю в больнице.","Je suis médecin. Je travaille à l’hôpital."],
      ["Мари","С кем ты живёшь?","Avec qui vis-tu ?"],
      ["Артём","С женой и с дочкой. А ты?","Avec ma femme et ma fille. Et toi ?"],
      ["Мари","Я живу с подругой. Мы вместе занимаемся спортом.","Je vis avec une amie. On fait du sport ensemble."]
    ],
    drills: [
      { q: "Я работаю ___ (врач)", opts: ["врачом","врача","врачу"], a: "врачом" },
      { q: "чай с ___ (лимон)", a: "лимоном" },
      { q: "Я гуляю с ___ (мама)", opts: ["мамой","маму","мамы"], a: "мамой" },
      { q: "Пойдёшь со ___?", opts: ["мной","меня","мне"], a: "мной" },
      { q: "Он хочет стать ___ (учитель)", opts: ["учителем","учителя","учитель"], a: "учителем" }
    ]
  },
  {
    id: "a2-04", level: "A2", title: "Demain et après", ru: "Будущее",
    goal: "Parler de tes projets au futur.",
    theory: [
      { h: "Futur composé (imperfectif)", p: "<span class='ru'>бу'ду, бу'дешь, бу'дет, бу'дем, бу'дете, бу'дут</span> + infinitif imperfectif : <span class='ru'>Я бу'ду рабо'тать</span> (je travaillerai, je serai en train de travailler)." },
      { h: "Futur simple (perfectif)", p: "Un verbe perfectif conjugué au « présent » exprime le futur : <span class='ru'>Я позвоню'</span> (j’appellerai), <span class='ru'>Я прочита'ю</span> (je lirai en entier)." },
      { h: "Projets", p: "<span class='ru'>собира'ться</span> + infinitif = compter faire : <span class='ru'>Мы собира'емся пое'хать в Петербу'рг</span>. <span class='ru'>Дава'й…!</span> = « et si on… ! »" },
      { h: "Expressions de temps", p: "<span class='ru'>че'рез неде'лю</span> dans une semaine · <span class='ru'>на сле'дующей неде'ле</span> la semaine prochaine · <span class='ru'>в сле'дующем году'</span> l’année prochaine." }
    ],
    vocab: [["бу'ду","je serai / je vais (+ inf.)"],["ско'ро","bientôt"],["че'рез","dans (+ durée)"],["выходны'е","le week-end"],["пла'ны","projets"],["собира'ться","compter faire"],["позвони'ть","appeler (perf.)"],["встре'титься","se retrouver (perf.)"],["пое'хать","partir (en véhicule)"],["ле'том","en été"],["здо'рово","génial"],["никогда'","jamais"]],
    dialogue: [
      ["Дима","Что ты будешь делать в выходные?","Que vas-tu faire ce week-end ?"],
      ["Эмма","В субботу я буду работать, а в воскресенье отдыхать.","Samedi je vais travailler, et dimanche me reposer."],
      ["Дима","Давай встретимся в воскресенье!","Et si on se voyait dimanche !"],
      ["Эмма","Давай! Я тебе позвоню утром.","D’accord ! Je t’appelle le matin."],
      ["Дима","А летом мы собираемся поехать в Петербург.","Et cet été, on compte aller à Saint-Pétersbourg."],
      ["Эмма","Здорово! Я там никогда не была.","Génial ! Je n’y suis jamais allée."]
    ],
    drills: [
      { q: "Завтра я ___ работать", opts: ["буду","будет","был"], a: "буду" },
      { q: "Мы ___ отдыхать", opts: ["будем","будут","будете"], a: "будем" },
      { q: "Я тебе ___ (позвонить, futur)", opts: ["позвоню","звоню","звонил"], a: "позвоню" },
      { q: "Они ___ смотреть фильм", a: "будут" },
      { q: "Écris « bientôt » en russe", a: "скоро" }
    ]
  },
  {
    id: "a2-05", level: "A2", title: "Les aspects", ru: "Вид глагола",
    goal: "Choisir entre imperfectif et perfectif.",
    theory: [
      { h: "Deux verbes pour une action", p: "Presque chaque verbe a deux formes. <b>Imperfectif</b> : le processus, l’habitude, la répétition. <b>Perfectif</b> : une action unique, terminée, avec un résultat." },
      { h: "Les paires courantes", p: "<table class='gram'><tr><th>imperfectif</th><th>perfectif</th></tr><tr><td class='ru'>де'лать</td><td class='ru'>сде'лать</td></tr><tr><td class='ru'>чита'ть</td><td class='ru'>прочита'ть</td></tr><tr><td class='ru'>писа'ть</td><td class='ru'>написа'ть</td></tr><tr><td class='ru'>говори'ть</td><td class='ru'>сказа'ть</td></tr><tr><td class='ru'>покупа'ть</td><td class='ru'>купи'ть</td></tr><tr><td class='ru'>брать</td><td class='ru'>взять</td></tr></table>" },
      { h: "Les signaux", p: "<span class='ru'>ка'ждый день, ча'сто, обы'чно, до'лго</span> → imperfectif. <span class='ru'>уже', наконе'ц, вдруг, сра'зу</span> → souvent perfectif. Le perfectif n’a <b>pas de présent</b>." }
    ],
    vocab: [["сде'лать","faire (perf.)"],["написа'ть","écrire (perf.)"],["прочита'ть","lire (perf.)"],["купи'ть","acheter (perf.)"],["сказа'ть","dire (perf.)"],["реши'ть","décider, résoudre (perf.)"],["ка'ждый день","chaque jour"],["обы'чно","d’habitude"],["наконе'ц","enfin"],["вдруг","soudain"],["письмо'","lettre, e-mail"],["обеща'ть","promettre"]],
    dialogue: [
      ["Оля","Ты уже написал письмо?","Tu as déjà écrit la lettre ?"],
      ["Макс","Нет, ещё пишу.","Non, je suis encore en train de l’écrire."],
      ["Оля","А когда напишешь?","Et quand l’auras-tu finie ?"],
      ["Макс","Напишу сегодня вечером, обещаю.","Je la finirai ce soir, promis."],
      ["Оля","Ты каждый день покупаешь кофе?","Tu achètes un café tous les jours ?"],
      ["Макс","Да, обычно покупаю. А сегодня купил два!","Oui, d’habitude j’en achète un. Et aujourd’hui j’en ai acheté deux !"]
    ],
    drills: [
      { q: "Я каждый день ___ газету.", opts: ["читаю","прочитаю"], a: "читаю" },
      { q: "Вчера я наконец ___ книгу.", opts: ["прочитал","читал"], a: "прочитал" },
      { q: "Он долго ___ письмо.", opts: ["писал","написал"], a: "писал" },
      { q: "Я ___ ужин и пошёл гулять.", opts: ["приготовил","готовил"], a: "приготовил" },
      { q: "Обычно я ___ в 7 часов.", opts: ["встаю","встану"], a: "встаю" }
    ]
  },
  {
    id: "a2-06", level: "A2", title: "La santé", ru: "Здоровье",
    goal: "Dire où tu as mal, comprendre le médecin, il faut / on peut.",
    theory: [
      { h: "J’ai mal…", p: "<span class='ru'>У меня' боли'т голова'</span> (litt. « chez moi la tête fait mal »). Pluriel : <span class='ru'>У меня' боля'т зу'бы</span>." },
      { h: "Il faut, on peut, c’est interdit", p: "Personne au datif + <span class='ru'>на'до / ну'жно / мо'жно / нельзя'</span> + infinitif : <span class='ru'>Тебе' на'до отдохну'ть</span>, <span class='ru'>Здесь нельзя' кури'ть</span>." },
      { h: "Chez le médecin", p: "<span class='ru'>Что с ва'ми?</span> Qu’avez-vous ? · <span class='ru'>Мне пло'хо</span> Je me sens mal · <span class='ru'>табле'тки от головы'</span> des cachets contre le mal de tête (<span class='ru'>от</span> + génitif)." }
    ],
    vocab: [["голова'","tête"],["го'рло","gorge"],["живо'т","ventre"],["спина'","dos"],["зуб","dent"],["боле'ть","faire mal"],["температу'ра","fièvre, température"],["лека'рство","médicament"],["реце'пт","ordonnance"],["на'до","il faut"],["мо'жно","on peut"],["нельзя'","c’est interdit, on ne peut pas"],["выздора'вливайте!","rétablissez-vous !"]],
    dialogue: [
      ["Врач","Что с вами?","Qu’est-ce qui vous arrive ?"],
      ["Пациент","У меня болят голова и горло.","J’ai mal à la tête et à la gorge."],
      ["Врач","Температура есть?","Vous avez de la fièvre ?"],
      ["Пациент","Да, тридцать восемь.","Oui, trente-huit."],
      ["Врач","Вам надо отдыхать и пить много воды. Вот рецепт.","Vous devez vous reposer et boire beaucoup d’eau. Voici l’ordonnance."],
      ["Пациент","Можно работать?","Je peux travailler ?"],
      ["Врач","Три дня нельзя. Выздоравливайте!","Pas pendant trois jours. Rétablissez-vous !"]
    ],
    drills: [
      { q: "У меня ___ голова", opts: ["болит","болят"], a: "болит" },
      { q: "У него ___ зубы", opts: ["болят","болит"], a: "болят" },
      { q: "___ надо отдохнуть (à toi)", opts: ["Тебе","Ты","Тебя"], a: "Тебе" },
      { q: "Здесь ___ курить", opts: ["нельзя","надо"], a: "нельзя" },
      { q: "Écris « médicament » en russe", a: "лекарство" }
    ]
  },
  {
    id: "a2-07", level: "A2", title: "Voyager", ru: "Путешествие",
    goal: "Distinguer идти / ходить, ехать / ездить.",
    theory: [
      { h: "Unidirectionnel ou multidirectionnel", p: "<span class='ru'>идти' / е'хать</span> : un trajet dans une direction, en ce moment. <span class='ru'>ходи'ть / е'здить</span> : habitude, aller-retour, déplacement sans but précis." },
      { h: "Conjugaisons", p: "<span class='ru'>ходи'ть</span> : хожу', хо'дишь, хо'дит, хо'дим, хо'дите, хо'дят.<br><span class='ru'>е'здить</span> : е'зжу, е'здишь, е'здит, е'здим, е'здите, е'здят." },
      { h: "Le passé aller-retour", p: "<span class='ru'>Вчера' я ходи'л в кино'</span> = je suis allé au cinéma (et je suis revenu). <span class='ru'>Мы е'здили на мо'ре</span> = nous sommes allés à la mer." },
      { h: "Les transports", p: "<span class='ru'>на</span> + prépositionnel : <span class='ru'>на маши'не, на по'езде, на метро', на самолёте</span>. À pied : <span class='ru'>пешко'м</span>." }
    ],
    vocab: [["ходи'ть","aller à pied (habituel)"],["е'здить","aller en véhicule (habituel)"],["лета'ть","prendre l’avion (habituel)"],["по'езд","train"],["самолёт","avion"],["о'тпуск","congés"],["мо'ре","mer"],["го'ры","montagnes"],["пешко'м","à pied"],["раз в неде'лю","une fois par semaine"],["спортза'л","salle de sport"],["путеше'ствие","voyage"]],
    dialogue: [
      ["Аня","Куда ты идёшь?","Où vas-tu ?"],
      ["Хьюго","Я иду в спортзал. Я хожу туда три раза в неделю.","Je vais à la salle de sport. J’y vais trois fois par semaine."],
      ["Аня","А куда вы ездили в отпуск?","Et où êtes-vous allés en vacances ?"],
      ["Хьюго","Мы ездили на море, в Сочи.","On est allés à la mer, à Sotchi."],
      ["Аня","На поезде?","En train ?"],
      ["Хьюго","Нет, летели на самолёте.","Non, on a pris l’avion."]
    ],
    drills: [
      { q: "Сейчас я ___ в магазин.", opts: ["иду","хожу"], a: "иду" },
      { q: "Каждый день я ___ на работу пешком.", opts: ["хожу","иду"], a: "хожу" },
      { q: "Летом мы ___ в Испанию (en voiture, aller-retour)", opts: ["ездили","ехали"], a: "ездили" },
      { q: "Он часто ___ в Москву (en avion)", opts: ["летает","летит"], a: "летает" },
      { q: "Я еду ___ поезде", opts: ["на","в","с"], a: "на" }
    ]
  },
  {
    id: "a2-08", level: "A2", title: "Au travail", ru: "На работе",
    goal: "L’impératif, la politesse au bureau, l’e-mail formel.",
    theory: [
      { h: "Former l’impératif", p: "Radical du présent (3ᵉ pers. pl.) + <b>-й</b> après voyelle, <b>-и</b> après consonne : <span class='ru'>чита'-ют → чита'й(те)</span>, <span class='ru'>говор-я'т → говори'(те)</span>. Ajoute <b>-те</b> pour vous." },
      { h: "Adoucir", p: "<span class='ru'>пожа'луйста</span> · <span class='ru'>Бу'дьте добры'…</span> (Ayez la bonté de…) · <span class='ru'>Не могли' бы вы…?</span> (Pourriez-vous… ?)" },
      { h: "L’e-mail formel", p: "Début : <span class='ru'>Уважа'емый Ива'н Петро'вич!</span> / <span class='ru'>Уважа'емая А'нна Серге'евна!</span> Fin : <span class='ru'>С уваже'нием,</span> + prénom et nom. Au bureau, le prénom + patronyme reste la norme avec les supérieurs." }
    ],
    vocab: [["о'фис","bureau"],["встре'ча","rendez-vous, rencontre"],["совеща'ние","réunion"],["прое'кт","projet"],["срок","délai"],["отчёт","rapport"],["нача'льник","chef"],["клие'нт","client"],["догово'р","contrat"],["уважа'емый","cher (formule formelle)"],["с уваже'нием","cordialement"],["отпра'вить","envoyer"],["перенести'","reporter, déplacer"]],
    dialogue: [
      ["Пьер","Ольга Викторовна, когда у нас совещание?","Olga Viktorovna, quand avons-nous la réunion ?"],
      ["Ольга","В десять. Подготовьте, пожалуйста, отчёт.","À dix heures. Préparez le rapport, s’il vous plaît."],
      ["Пьер","Хорошо. А встречу с клиентом можно перенести?","D’accord. Et peut-on reporter le rendez-vous avec le client ?"],
      ["Ольга","Да, перенесите на пятницу.","Oui, reportez-le à vendredi."],
      ["Пьер","Отлично. Я отправлю ему письмо.","Parfait. Je lui enverrai un e-mail."],
      ["Ольга","Спасибо. И не забудьте про договор!","Merci. Et n’oubliez pas le contrat !"]
    ],
    drills: [
      { q: "___, пожалуйста! (lisez)", opts: ["Читайте","Читаете","Читать"], a: "Читайте" },
      { q: "___ мне завтра (appelez)", opts: ["Позвоните","Позвонить","Позвонишь"], a: "Позвоните" },
      { q: "___ Иван Петрович! (début d’e-mail formel)", opts: ["Уважаемый","Привет","Дорогуша"], a: "Уважаемый" },
      { q: "Fin d’e-mail formel :", opts: ["С уважением","Пока","Целую"], a: "С уважением" },
      { q: "Не ___ про договор! (n’oubliez pas)", opts: ["забудьте","забыть","забыли"], a: "забудьте" }
    ]
  },

  // ───────────── B1 · Свобода ─────────────
  {
    id: "b1-01", level: "B1", title: "Les préfixes de mouvement", ru: "Приставки",
    goal: "Arriver, partir, entrer, sortir, traverser, passer chez…",
    theory: [
      { h: "Préfixe + verbe de mouvement", p: "<table class='gram'><tr><th>préfixe</th><th>sens</th><th>exemple</th></tr><tr><td class='ru'>при-</td><td>arriver</td><td class='ru'>прийти', прие'хать</td></tr><tr><td class='ru'>у-</td><td>partir</td><td class='ru'>уйти', уе'хать</td></tr><tr><td class='ru'>в-</td><td>entrer</td><td class='ru'>войти'</td></tr><tr><td class='ru'>вы-</td><td>sortir</td><td class='ru'>вы'йти</td></tr><tr><td class='ru'>пере-</td><td>traverser</td><td class='ru'>перейти'</td></tr><tr><td class='ru'>за-</td><td>passer (chez)</td><td class='ru'>зайти'</td></tr><tr><td class='ru'>под-</td><td>s’approcher</td><td class='ru'>подойти'</td></tr><tr><td class='ru'>про-</td><td>passer devant, parcourir</td><td class='ru'>пройти'</td></tr></table>" },
      { h: "L’aspect", p: "Préfixe + <span class='ru'>идти'</span> → <b>perfectif</b> (<span class='ru'>прийти'</span>). Préfixe + <span class='ru'>ходи'ть</span> → <b>imperfectif</b> (<span class='ru'>приходи'ть</span>). Attention : <span class='ru'>е'хать → -езжа'ть</span> (<span class='ru'>приезжа'ть</span>)." },
      { h: "Prépositions associées", p: "<span class='ru'>в / на</span> (vers) ↔ <span class='ru'>из / с</span> (depuis) · <span class='ru'>к</span> + datif (vers une personne) ↔ <span class='ru'>от</span> + génitif (de chez quelqu’un)." }
    ],
    vocab: [["прийти'","arriver (à pied)"],["уйти'","partir (à pied)"],["войти'","entrer"],["вы'йти","sortir"],["перейти'","traverser"],["зайти'","passer (chez)"],["подойти'","s’approcher"],["прие'хать","arriver (en véhicule)"],["уе'хать","partir (en véhicule)"],["опа'здывать","être en retard"],["перекрёсток","carrefour"],["то'лько что","à l’instant"]],
    dialogue: [
      ["Вера","Алло, ты где? Мы уже пришли в ресторан.","Allô, t’es où ? On est déjà arrivés au restaurant."],
      ["Тео","Извини, я опаздываю. Только что вышел из метро.","Désolé, je suis en retard. Je viens de sortir du métro."],
      ["Вера","Перейди улицу и иди прямо до перекрёстка.","Traverse la rue et va tout droit jusqu’au carrefour."],
      ["Тео","Понял. А можно я сначала зайду в аптеку?","Compris. Je peux d’abord passer à la pharmacie ?"],
      ["Вера","Конечно. Когда подойдёшь, позвони.","Bien sûr. Quand tu seras tout près, appelle."],
      ["Тео","Хорошо, через десять минут приду!","D’accord, j’arrive dans dix minutes !"]
    ],
    drills: [
      { q: "Он ___ из комнаты (est sorti)", opts: ["вышел","вошёл","пришёл"], a: "вышел" },
      { q: "Когда ты ___ домой? (arriveras)", opts: ["придёшь","уйдёшь","зайдёшь"], a: "придёшь" },
      { q: "Мама уже ___ на работу (est partie)", opts: ["ушла","пришла","вошла"], a: "ушла" },
      { q: "___ улицу осторожно! (traverse)", opts: ["Перейди","Пройди","Зайди"], a: "Перейди" },
      { q: "Я ___ к тебе вечером (passerai)", opts: ["зайду","выйду","уйду"], a: "зайду" }
    ]
  },
  {
    id: "b1-02", level: "B1", title: "Rapporter, souhaiter", ru: "Чтобы",
    goal: "Discours rapporté, questions indirectes, чтобы.",
    theory: [
      { h: "Le discours rapporté garde le temps", p: "Contrairement au français, le russe garde le temps de la phrase d’origine : « Я прие'ду » → <span class='ru'>Она' сказа'ла, что прие'дет</span> (elle a dit qu’elle <i>viendrait</i>)." },
      { h: "La question indirecte avec ли", p: "Pour une question oui/non : mot interrogé + <span class='ru'>ли</span> : <span class='ru'>Она' спроси'ла, придёшь ли ты</span> (si tu viendrais)." },
      { h: "Чтобы", p: "But, même sujet → infinitif : <span class='ru'>Я учу' ру'сский, что'бы говори'ть с семьёй</span>. Souhait / ordre envers quelqu’un d’autre → <b>passé</b> : <span class='ru'>Я хочу', что'бы ты пришёл</span> (je veux que tu viennes)." }
    ],
    vocab: [["сказа'ть","dire"],["спроси'ть","demander (question)"],["попроси'ть","demander (service)"],["отве'тить","répondre"],["объясни'ть","expliquer"],["ли","est-ce que (particule)"],["что'бы","pour que, afin de"],["наде'яться","espérer"],["сове'товать","conseiller"],["перево'дчик","interprète, traducteur"],["рад / ра'да","content / contente"],["без","sans (+ gén.)"]],
    dialogue: [
      ["Ник","Что сказала мама?","Qu’a dit maman ?"],
      ["Алиса","Она сказала, что приедет в субботу.","Elle a dit qu’elle viendrait samedi."],
      ["Ник","А она спросила, будет ли папа?","Et elle a demandé si papa serait là ?"],
      ["Алиса","Да. Она хочет, чтобы мы все были дома.","Oui. Elle veut que nous soyons tous à la maison."],
      ["Ник","Я учу русский, чтобы говорить с ней без переводчика.","J’apprends le russe pour parler avec elle sans interprète."],
      ["Алиса","Она будет очень рада!","Elle sera ravie !"]
    ],
    drills: [
      { q: "Я хочу, ___ ты пришёл.", opts: ["чтобы","что"], a: "чтобы" },
      { q: "Он сказал, ___ занят.", opts: ["что","чтобы"], a: "что" },
      { q: "Она спросила, знаю ___ я ответ.", opts: ["ли","что","бы"], a: "ли" },
      { q: "Я учу русский, чтобы ___ с друзьями.", opts: ["говорить","говорил"], a: "говорить" },
      { q: "Мама хочет, чтобы я ___ врачом.", opts: ["стал","стать","стану"], a: "стал" }
    ]
  },
  {
    id: "b1-03", level: "B1", title: "Si j’étais…", ru: "Если бы",
    goal: "Le conditionnel avec бы, conditions réelles et irréelles.",
    theory: [
      { h: "Une seule forme", p: "Conditionnel = passé + <span class='ru'>бы</span>. <span class='ru'>Я бы пое'хал</span> veut dire « j’irais » et « je serais allé » selon le contexte." },
      { h: "Condition irréelle", p: "<span class='ru'>Е'сли бы</span> + passé, … <span class='ru'>бы</span> + passé : <span class='ru'>Е'сли бы у меня' бы'ло вре'мя, я бы пришёл</span>." },
      { h: "Condition réelle : futur !", p: "Pour un futur possible, on emploie le futur dans les deux parties : <span class='ru'>Е'сли бу'дет вре'мя, я приду'</span> (si j’ai le temps, je viendrai)." },
      { h: "Conseiller", p: "<span class='ru'>На твоём ме'сте я бы…</span> À ta place, je… · <span class='ru'>Я бы на ва'шем ме'сте…</span>" }
    ],
    vocab: [["е'сли","si"],["бы","particule du conditionnel"],["на твоём ме'сте","à ta place"],["лу'чше","mieux"],["жаль","dommage"],["вы'играть","gagner"],["пригласи'ть","inviter"],["бро'сить","quitter, abandonner"],["обсуди'ть","discuter de"],["с удово'льствием","avec plaisir"],["мечта'","rêve"]],
    dialogue: [
      ["Игорь","Что бы ты сделал, если бы выиграл миллион?","Que ferais-tu si tu gagnais un million ?"],
      ["Батист","Я бы купил дом у моря и пригласил всю семью.","J’achèterais une maison au bord de la mer et j’inviterais toute la famille."],
      ["Игорь","А работу бросил бы?","Et tu quitterais ton travail ?"],
      ["Батист","Нет! Я люблю свою работу.","Non ! J’aime mon travail."],
      ["Игорь","Если будет время в субботу, давай обсудим это за ужином.","Si on a le temps samedi, parlons-en autour d’un dîner."],
      ["Батист","С удовольствием!","Avec plaisir !"]
    ],
    drills: [
      { q: "Если бы я знал, я ___ сказал.", opts: ["бы","был","будет"], a: "бы" },
      { q: "Если будет время, я ___ (viendrai)", opts: ["приду","пришёл бы","прихожу"], a: "приду" },
      { q: "Я ___ хотел кофе.", opts: ["бы","был"], a: "бы" },
      { q: "Если бы у меня ___ машина…", opts: ["была","будет","есть"], a: "была" },
      { q: "На твоём месте я бы ___ (отдохнуть)", opts: ["отдохнул","отдохну"], a: "отдохнул" }
    ]
  },
  {
    id: "b1-04", level: "B1", title: "La réunion", ru: "Деловая встреча",
    goal: "Mener et participer à une réunion professionnelle.",
    theory: [
      { h: "Structurer", p: "<span class='ru'>Дава'йте начнём</span> Commençons · <span class='ru'>Предлага'ю обсуди'ть…</span> Je propose de discuter de… · <span class='ru'>Перейдём к сле'дующему вопро'су</span> Passons au point suivant · <span class='ru'>Подведём ито'ги</span> Faisons le bilan." },
      { h: "Donner son avis", p: "<span class='ru'>По-мо'ему</span> · <span class='ru'>На мой взгляд</span> · <span class='ru'>Я счита'ю, что…</span> Pour nuancer : <span class='ru'>Не совсе'м согла'сен</span>, <span class='ru'>Э'то интере'сная иде'я, но…</span>" },
      { h: "Culture d’entreprise", p: "Hiérarchie marquée : vouvoiement et patronyme avec les supérieurs, décisions souvent prises en haut. La relation personnelle compte beaucoup : un thé ou un repas avant les affaires n’est pas du temps perdu." }
    ],
    vocab: [["обсуди'ть","discuter de"],["предлага'ть","proposer"],["счита'ть","estimer, considérer"],["по-мо'ему","à mon avis"],["согла'сен","d’accord (m.)"],["согла'сна","d’accord (f.)"],["бюдже'т","budget"],["расхо'ды","dépenses"],["реше'ние","décision, solution"],["подвести' ито'ги","faire le bilan"],["договори'лись","c’est entendu"],["презента'ция","présentation"]],
    dialogue: [
      ["Директор","Коллеги, давайте начнём. Предлагаю обсудить бюджет проекта.","Chers collègues, commençons. Je propose de discuter du budget du projet."],
      ["Сергей","По-моему, бюджет слишком маленький.","À mon avis, le budget est trop petit."],
      ["Анна","Не совсем согласна. Мы можем оптимизировать расходы.","Je ne suis pas tout à fait d’accord. Nous pouvons optimiser les dépenses."],
      ["Сергей","Это интересная идея, но тогда сроки будут больше.","C’est une idée intéressante, mais alors les délais seront plus longs."],
      ["Директор","Хорошо. Подведём итоги: Анна готовит новый план до пятницы.","Bien. Faisons le bilan : Anna prépare un nouveau plan d’ici vendredi."],
      ["Анна","Договорились.","C’est entendu."]
    ],
    drills: [
      { q: "___, бюджет слишком маленький.", opts: ["По-моему","По-мой","Мой"], a: "По-моему" },
      { q: "Я ___, что это хорошая идея.", opts: ["считаю","считать","считают"], a: "считаю" },
      { q: "Давайте ___ (commençons)", opts: ["начнём","начинаем","начать"], a: "начнём" },
      { q: "Elle est d’accord : Она ___", opts: ["согласна","согласен","согласны"], a: "согласна" },
      { q: "Écris « décision » en russe", a: "решение" }
    ]
  },
  {
    id: "b1-05", level: "B1", title: "Parler à ceux qu’on aime", ru: "Чувства",
    goal: "Exprimer tes sentiments, rassurer, féliciter.",
    theory: [
      { h: "Les verbes du cœur et leurs cas", p: "<span class='ru'>скуча'ть по</span> + datif : <span class='ru'>Я скуча'ю по тебе'</span> (tu me manques) · <span class='ru'>волнова'ться за</span> + accusatif : <span class='ru'>Я волну'юсь за тебя'</span> · <span class='ru'>горди'ться</span> + instrumental : <span class='ru'>Я горжу'сь тобо'й</span>." },
      { h: "Rassurer", p: "<span class='ru'>Не волну'йся</span> · <span class='ru'>Всё бу'дет хорошо'</span> · <span class='ru'>Я с тобо'й</span> · <span class='ru'>Держи'сь!</span> (tiens bon)." },
      { h: "Tendresse", p: "Les diminutifs expriment l’affection : <span class='ru'>ба'бушка → бабу'ля</span>, <span class='ru'>со'лнце → со'лнышко</span> (mon soleil), <span class='ru'>ми'лый / ми'лая</span>. En fin d’appel : <span class='ru'>Обнима'ю! Целу'ю!</span>" },
      { h: "Fêtes et toasts", p: "<span class='ru'>Поздравля'ю с днём рожде'ния!</span> · <span class='ru'>За здоро'вье!</span> · <span class='ru'>За тебя'!</span> En Russie, on porte souvent un toast long et personnel : prépare-en un !" }
    ],
    vocab: [["скуча'ть","manquer (à qqn), s’ennuyer de"],["волнова'ться","s’inquiéter"],["горди'ться","être fier de"],["чу'вствовать себя'","se sentir"],["гру'стно","triste"],["обнима'ю","je t’embrasse (je te serre)"],["целу'ю","bisous"],["держи'сь!","tiens bon !"],["всё бу'дет хорошо'","tout ira bien"],["береги' себя'","prends soin de toi"],["поздравля'ю!","félicitations !"],["дорого'й","mon cher, chéri"]],
    dialogue: [
      ["Внук","Бабушка, привет! Как ты себя чувствуешь?","Mamie, coucou ! Comment te sens-tu ?"],
      ["Бабушка","Ох, внучек, уже лучше. Я так по тебе скучаю!","Oh, mon petit-fils, déjà mieux. Tu me manques tellement !"],
      ["Внук","Я тоже скучаю. Не волнуйся, летом приеду.","Toi aussi tu me manques. Ne t’inquiète pas, je viendrai cet été."],
      ["Бабушка","Ты так хорошо говоришь по-русски! Я горжусь тобой.","Tu parles si bien russe ! Je suis fière de toi."],
      ["Внук","Спасибо, бабуля. Береги себя! Обнимаю.","Merci, mamie. Prends soin de toi ! Je t’embrasse."],
      ["Бабушка","И я тебя, дорогой. Целую!","Moi aussi, mon chéri. Bisous !"]
    ],
    drills: [
      { q: "Я скучаю по ___ (ты)", opts: ["тебе","тебя","ты"], a: "тебе" },
      { q: "Я горжусь ___ (ты)", opts: ["тобой","тебя","тебе"], a: "тобой" },
      { q: "Не ___! Всё будет хорошо.", opts: ["волнуйся","волнуешься"], a: "волнуйся" },
      { q: "Я волнуюсь за ___ (ты)", opts: ["тебя","тебе"], a: "тебя" },
      { q: "Écris « tiens bon ! » en russe", a: "держись" }
    ]
  },
  {
    id: "b1-06", level: "B1", title: "Le pronom relatif", ru: "Который",
    goal: "Construire des phrases complexes avec который.",
    theory: [
      { h: "Qui, que, dont, lequel…", p: "<span class='ru'>кото'рый</span> se décline comme un adjectif. Son <b>genre et nombre</b> viennent du nom qu’il remplace, son <b>cas</b> de sa fonction dans la relative." },
      { h: "Exemples", p: "<span class='ru'>Э'то друг, кото'рый живёт в Москве'</span> (sujet) · <span class='ru'>…кото'рого я зна'ю</span> (objet) · <span class='ru'>…с кото'рым я рабо'таю</span> (avec lequel) · <span class='ru'>Де'вушка, о кото'рой я говори'л</span> (dont je parlais)." },
      { h: "Autres relatifs", p: "<span class='ru'>Го'род, где я роди'лся</span> (où) · <span class='ru'>Тот, кто зна'ет…</span> (celui qui sait) · <span class='ru'>То, что ты сказа'л…</span> (ce que tu as dit)." }
    ],
    vocab: [["кото'рый","qui, que, lequel"],["роди'ться","naître"],["знако'мый","connaissance (personne)"],["сосе'д","voisin"],["вы'йти за'муж","se marier (pour une femme)"],["жени'ться","se marier (pour un homme)"],["познако'миться","faire connaissance"],["по'мнить","se souvenir"],["тётя","tante"],["мир те'сен","le monde est petit"]],
    dialogue: [
      ["Юля","Ты помнишь девушку, которая работала с нами?","Tu te souviens de la fille qui travaillait avec nous ?"],
      ["Лео","Катю? Которую все звали «профессор»?","Katia ? Celle que tout le monde appelait « professeur » ?"],
      ["Юля","Да! Она вышла замуж за парня, с которым познакомилась в Казани.","Oui ! Elle a épousé un garçon qu’elle a rencontré à Kazan."],
      ["Лео","Это город, где живёт моя тётя!","C’est la ville où vit ma tante !"],
      ["Юля","Мир тесен!","Le monde est petit !"]
    ],
    drills: [
      { q: "Это друг, ___ живёт в Москве.", opts: ["который","которого","которым"], a: "который" },
      { q: "Это книга, ___ я читаю.", opts: ["которую","которая","которой"], a: "которую" },
      { q: "Это коллега, с ___ я работаю.", opts: ["которым","который","которого"], a: "которым" },
      { q: "Город, ___ я родился.", opts: ["где","куда","который"], a: "где" },
      { q: "Девушка, о ___ я говорил.", opts: ["которой","которая","которую"], a: "которой" }
    ]
  },

  // ───────────── B2 · Мастерство ─────────────
  {
    id: "b2-01", level: "B2", title: "Les participes actifs", ru: "Действительные причастия",
    goal: "Comprendre et utiliser читающий, живший…",
    theory: [
      { h: "Un adjectif tiré d’un verbe", p: "Le participe actif remplace <span class='ru'>кото'рый</span> + verbe : <span class='ru'>студе'нт, кото'рый чита'ет = чита'ющий студе'нт</span>. Il se décline comme un adjectif. Fréquent à l’écrit, dans la presse et au travail." },
      { h: "Présent", p: "3ᵉ pers. pl. sans -т + <b>-щий</b> : <span class='ru'>чита'ют → чита'ющий</span>, <span class='ru'>говоря'т → говоря'щий</span>, <span class='ru'>живу'т → живу'щий</span>." },
      { h: "Passé", p: "Radical du passé + <b>-вший</b> (ou <b>-ший</b> après consonne) : <span class='ru'>чита'л → чита'вший</span>, <span class='ru'>жил → жи'вший</span>, <span class='ru'>принёс → принёсший</span>." },
      { h: "Devenus adjectifs", p: "<span class='ru'>бы'вший</span> (ancien, ex-), <span class='ru'>сле'дующий</span> (suivant), <span class='ru'>веду'щий</span> (présentateur, principal), <span class='ru'>бу'дущий</span> (futur)." }
    ],
    vocab: [["чита'ющий","qui lit"],["рабо'тающий","qui travaille"],["говоря'щий","qui parle"],["живу'щий","qui habite"],["бы'вший","ancien, ex-"],["сле'дующий","suivant"],["веду'щий","principal ; présentateur"],["уча'стник","participant"],["сотру'дник","employé, collaborateur"],["отде'л прода'ж","service des ventes"],["специали'ст","spécialiste"]],
    dialogue: [
      ["Марина","Вы знаете сотрудника, работающего в отделе продаж?","Vous connaissez l’employé qui travaille au service des ventes ?"],
      ["Жан","Того, говорящего по-китайски?","Celui qui parle chinois ?"],
      ["Марина","Да. Он бывший участник нашего проекта.","Oui. C’est un ancien participant de notre projet."],
      ["Жан","Компании, работающие с Китаем, ищут таких специалистов.","Les entreprises qui travaillent avec la Chine recherchent de tels spécialistes."],
      ["Марина","Тогда пригласим его на следующую встречу.","Alors invitons-le à la prochaine réunion."]
    ],
    drills: [
      { q: "студент, ___ книгу (= который читает)", opts: ["читающий","читавший","читаемый"], a: "читающий" },
      { q: "человек, ___ в Париже (= который жил)", opts: ["живший","живущий"], a: "живший" },
      { q: "Я знаю людей, ___ по-русски", opts: ["говорящих","говорящие","говорящий"], a: "говорящих" },
      { q: "мой ___ муж (ex-)", opts: ["бывший","будущий"], a: "бывший" },
      { q: "компании, ___ в России (qui travaillent)", opts: ["работающие","работающих"], a: "работающие" }
    ]
  },
  {
    id: "b2-02", level: "B2", title: "Les participes passifs", ru: "Страдательные причастия",
    goal: "Le passif : написан, закрыт, подписан…",
    theory: [
      { h: "Forme longue", p: "Passé perfectif : <b>-нный / -тый</b> : <span class='ru'>написа'ть → напи'санный</span>, <span class='ru'>откры'ть → откры'тый</span>, <span class='ru'>реши'ть → решённый</span>. Présent (rare, écrit) : <b>-емый / -имый</b> : <span class='ru'>люби'мый</span>." },
      { h: "Forme courte = passif", p: "Comme un attribut : <span class='ru'>Письмо' напи'сано</span> (la lettre est écrite) · <span class='ru'>Магази'н закры'т</span> · <span class='ru'>Дверь откры'та</span> · <span class='ru'>Догово'р подпи'сан</span>. Accord en genre et en nombre : <span class='ru'>-н, -на, -но, -ны</span>." },
      { h: "Où le trouver", p: "Panneaux, contrats, actualités, e-mails professionnels : <span class='ru'>Зака'з при'нят</span> (commande acceptée)." }
    ],
    vocab: [["напи'сан","écrit (court)"],["закры'т","fermé"],["откры'т","ouvert"],["подпи'сан","signé"],["сде'лан","fait"],["при'нят","accepté, adopté"],["отпра'влен","envoyé"],["изве'стный","connu"],["люби'мый","préféré, bien-aimé"],["зака'з","commande"],["склад","entrepôt"],["това'р","marchandise"]],
    dialogue: [
      ["Клиент","Договор уже подписан?","Le contrat est-il déjà signé ?"],
      ["Менеджер","Да, подписан вчера. Заказ принят.","Oui, signé hier. La commande est acceptée."],
      ["Клиент","А товар отправлен?","Et la marchandise est expédiée ?"],
      ["Менеджер","Ещё нет, склад закрыт до понедельника.","Pas encore, l’entrepôt est fermé jusqu’à lundi."],
      ["Клиент","Понятно. Всё сделано правильно, спасибо.","Je vois. Tout a été fait correctement, merci."]
    ],
    drills: [
      { q: "Магазин ___ (fermé)", opts: ["закрыт","закрыта","закрыто"], a: "закрыт" },
      { q: "Дверь ___ (ouverte)", opts: ["открыта","открыт","открыто"], a: "открыта" },
      { q: "Письмо ___ (écrite)", opts: ["написано","написан","написана"], a: "написано" },
      { q: "Документы ___ (signés)", opts: ["подписаны","подписан","подписана"], a: "подписаны" },
      { q: "мой ___ писатель (préféré)", opts: ["любимый","любящий"], a: "любимый" }
    ]
  },
  {
    id: "b2-03", level: "B2", title: "Les gérondifs", ru: "Деепричастия",
    goal: "En lisant, après avoir lu : alléger tes phrases.",
    theory: [
      { h: "Imperfectif : action simultanée", p: "Radical du présent + <b>-я / -а</b> : <span class='ru'>чита'ть → чита'я</span> (en lisant), <span class='ru'>улыба'ться → улыба'ясь</span> (en souriant)." },
      { h: "Perfectif : action antérieure", p: "Radical du passé + <b>-в / -вшись</b> : <span class='ru'>прочита'ть → прочита'в</span> (après avoir lu), <span class='ru'>верну'ться → верну'вшись</span> (une fois rentré)." },
      { h: "Une règle d’or", p: "Le gérondif et le verbe principal doivent avoir <b>le même sujet</b>. Expressions figées très courantes à l’oral : <span class='ru'>че'стно говоря'</span>, <span class='ru'>су'дя по всему'</span>, <span class='ru'>несмотря' на</span>." }
    ],
    vocab: [["че'стно говоря'","à vrai dire"],["су'дя по всему'","selon toute apparence"],["чита'я","en lisant"],["прочита'в","après avoir lu"],["верну'вшись","une fois rentré"],["уходя'","en partant"],["улыба'ясь","en souriant"],["несмотря' на","malgré"],["уста'ть","se fatiguer"],["сра'зу","tout de suite"],["выключи'ть","éteindre"]],
    dialogue: [
      ["Паша","Честно говоря, я устал. Вернувшись с работы, сразу лёг спать.","À vrai dire, je suis épuisé. En rentrant du travail, je me suis couché direct."],
      ["Ксения","Ты слишком много работаешь, не отдыхая.","Tu travailles trop, sans te reposer."],
      ["Паша","Судя по всему, ты права.","Selon toute apparence, tu as raison."],
      ["Ксения","Уходя в отпуск, выключи телефон!","En partant en vacances, éteins ton téléphone !"],
      ["Паша","Попробую, — сказал он, улыбаясь.","« J’essaierai », dit-il en souriant."]
    ],
    drills: [
      { q: "___ книгу, он лёг спать (après avoir lu)", opts: ["Прочитав","Читая"], a: "Прочитав" },
      { q: "Она говорит, ___ (en souriant)", opts: ["улыбаясь","улыбнувшись"], a: "улыбаясь" },
      { q: "___ говоря, я не знаю (à vrai dire)", opts: ["Честно","Честный"], a: "Честно" },
      { q: "___ домой, я позвонил маме (une fois rentré)", opts: ["Вернувшись","Возвращаясь"], a: "Вернувшись" },
      { q: "___ по всему, он прав", opts: ["Судя","Судить"], a: "Судя" }
    ]
  },
  {
    id: "b2-04", level: "B2", title: "Registres et négociation", ru: "Переговоры",
    goal: "Adapter ton registre, négocier avec tact.",
    theory: [
      { h: "Trois registres", p: "<b>Familier</b> (<span class='ru'>ок, ща, лады'</span>) · <b>neutre</b> (<span class='ru'>хорошо', сейча'с</span>) · <b>officiel</b> (<span class='ru'>договори'лись, в настоя'щее вре'мя</span>). Un bilingue sait passer de l’un à l’autre." },
      { h: "Adoucir une demande", p: "<span class='ru'>Не могли' бы вы…?</span> · <span class='ru'>Бы'ло бы непло'хо…</span> · <span class='ru'>К сожале'нию…</span> · <span class='ru'>Бою'сь, что…</span>" },
      { h: "Négocier", p: "<span class='ru'>Мы гото'вы предложи'ть…</span> Nous sommes prêts à proposer… · <span class='ru'>При усло'вии, что…</span> À condition que… · <span class='ru'>Пойти' навстре'чу</span> Faire un geste · <span class='ru'>Э'то на'ше оконча'тельное предложе'ние</span> C’est notre offre finale." }
    ],
    vocab: [["усло'вие","condition"],["при усло'вии, что","à condition que"],["предложе'ние","offre, proposition"],["к сожале'нию","malheureusement"],["бою'сь, что","je crains que"],["пойти' навстре'чу","faire un geste"],["компроми'сс","compromis"],["оконча'тельный","définitif"],["вы'годный","avantageux"],["риско'ванно","risqué"],["зара'нее","à l’avance"],["полови'на","moitié"]],
    dialogue: [
      ["Продавец","Мы готовы предложить скидку десять процентов.","Nous sommes prêts à proposer une remise de dix pour cent."],
      ["Покупатель","К сожалению, этого недостаточно. Не могли бы вы пойти нам навстречу?","Malheureusement, ce n’est pas suffisant. Pourriez-vous faire un geste ?"],
      ["Продавец","Пятнадцать процентов — при условии, что вы оплатите заказ заранее.","Quinze pour cent, à condition que vous payiez la commande à l’avance."],
      ["Покупатель","Боюсь, что это для нас рискованно. Предлагаю компромисс: половину сейчас.","Je crains que ce soit risqué pour nous. Je propose un compromis : la moitié maintenant."],
      ["Продавец","Договорились. Это выгодно для обеих сторон.","Entendu. C’est avantageux pour les deux parties."]
    ],
    drills: [
      { q: "___ бы вы помочь? (poli)", opts: ["Не могли","Не можете","Можешь"], a: "Не могли" },
      { q: "К ___, мы не можем.", opts: ["сожалению","сожаление"], a: "сожалению" },
      { q: "при ___, что вы оплатите", opts: ["условии","условие"], a: "условии" },
      { q: "Équivalent formel de « ок » :", opts: ["Договорились","Ща","Лады"], a: "Договорились" },
      { q: "Écris « compromis » en russe", a: "компромисс" }
    ]
  },

  // ───────────── C1 · Свободное владение ─────────────
  {
    id: "c1-01", level: "C1", title: "Proverbes et idiomes", ru: "Пословицы",
    goal: "Parler comme un natif avec les expressions imagées.",
    theory: [
      { h: "Pourquoi c’est important", p: "Les Russes citent volontiers proverbes et expressions, en famille comme au bureau. Les comprendre est indispensable ; les utiliser au bon moment fait toujours sourire." },
      { h: "Le rituel de la bonne chance", p: "Avant un examen : <span class='ru'>Ни пу'ха ни пера'!</span> (litt. « ni duvet ni plume »). On répond <span class='ru'>К чёрту!</span> (« au diable ! ») et surtout pas « merci »." },
      { h: "Dosage", p: "Un idiome par conversation suffit. Au travail, préfère les expressions neutres (<span class='ru'>де'ло в шля'пе</span>, <span class='ru'>у'тро ве'чера мудрене'е</span>) aux plus familières." }
    ],
    vocab: [["без труда' не вы'тащишь и ры'бку из пруда'","on n’a rien sans peine"],["ти'ше е'дешь — да'льше бу'дешь","qui va lentement va sûrement"],["не име'й сто рубле'й, а име'й сто друзе'й","mieux vaut cent amis que cent roubles"],["ве'шать лапшу' на у'ши","raconter des salades"],["бить баклу'ши","glander"],["ни пу'ха ни пера'!","bonne chance !"],["у'тро ве'чера мудрене'е","la nuit porte conseil"],["де'ло в шля'пе","c’est dans la poche"],["волко'в боя'ться — в лес не ходи'ть","qui ne risque rien n’a rien"],["как с гу'ся вода'","ça glisse comme sur les plumes d’un canard"]],
    dialogue: [
      ["Рома","Завтра у меня собеседование. Ужасно волнуюсь.","Demain j’ai un entretien. Je stresse terriblement."],
      ["Луиза","Ни пуха ни пера!","Bonne chance !"],
      ["Рома","К чёрту! Думаешь, я готов?","Merci ! (« Au diable ! ») Tu crois que je suis prêt ?"],
      ["Луиза","Конечно. Утро вечера мудренее — иди спать.","Bien sûr. La nuit porte conseil, va dormir."],
      ["Рома","А если не возьмут?","Et s’ils ne me prennent pas ?"],
      ["Луиза","Волков бояться — в лес не ходить. Дело в шляпе!","Qui ne risque rien n’a rien. C’est dans la poche !"]
    ],
    drills: [
      { q: "— Ни пуха ни пера! — ___", opts: ["К чёрту!","Спасибо!","И тебе!"], a: "К чёрту!" },
      { q: "Утро вечера ___", opts: ["мудренее","лучше","длиннее"], a: "мудренее" },
      { q: "Без труда не вытащишь и рыбку из ___", opts: ["пруда","моря","реки"], a: "пруда" },
      { q: "« Вешать лапшу на уши » signifie…", opts: ["raconter des salades","cuisiner","s’endormir"], a: "raconter des salades" },
      { q: "Дело в ___ (c’est dans la poche)", opts: ["шляпе","кармане","сумке"], a: "шляпе" }
    ]
  },
  {
    id: "c1-02", level: "C1", title: "Argumenter", ru: "Аргументация",
    goal: "Structurer un raisonnement avec les connecteurs.",
    theory: [
      { h: "Organiser", p: "<span class='ru'>во-пе'рвых, во-вторы'х, в-тре'тьих</span> · <span class='ru'>кро'ме того'</span> (de plus) · <span class='ru'>в конце' концо'в</span> (au bout du compte)." },
      { h: "Opposer", p: "<span class='ru'>с одно'й стороны'… с друго'й стороны'</span> · <span class='ru'>одна'ко</span> (cependant) · <span class='ru'>тем не ме'нее</span> (néanmoins) · <span class='ru'>в то вре'мя как</span> (alors que)." },
      { h: "Cause et conséquence", p: "<span class='ru'>благодаря'</span> + datif (grâce à, positif) · <span class='ru'>из-за</span> + génitif (à cause de, négatif) · <span class='ru'>поско'льку</span> (puisque) · <span class='ru'>сле'довательно, таки'м о'бразом</span> (par conséquent, ainsi)." }
    ],
    vocab: [["во-пе'рвых","premièrement"],["во-вторы'х","deuxièmement"],["кро'ме того'","de plus"],["одна'ко","cependant"],["тем не ме'нее","néanmoins"],["с одно'й стороны'","d’un côté"],["с друго'й стороны'","d’un autre côté"],["благодаря'","grâce à"],["из-за","à cause de"],["поско'льку","puisque"],["таки'м о'бразом","ainsi, de cette façon"],["удалённая рабо'та","télétravail"]],
    dialogue: [
      ["Алексей","С одной стороны, удалённая работа экономит время.","D’un côté, le télétravail fait gagner du temps."],
      ["Камий","Однако, с другой стороны, страдает командный дух.","Cependant, d’un autre côté, l’esprit d’équipe en souffre."],
      ["Алексей","Тем не менее, благодаря видеозвонкам мы всегда на связи.","Néanmoins, grâce aux appels vidéo, nous sommes toujours joignables."],
      ["Камий","Во-первых, это не то же самое. Во-вторых, из-за экранов люди устают.","Premièrement, ce n’est pas pareil. Deuxièmement, à cause des écrans, les gens se fatiguent."],
      ["Алексей","Таким образом, нужен гибридный формат.","Ainsi, il faut un format hybride."]
    ],
    drills: [
      { q: "___ дождя мы остались дома (à cause de)", opts: ["Из-за","Благодаря"], a: "Из-за" },
      { q: "___ твоей помощи всё получилось (grâce à)", opts: ["Благодаря","Из-за"], a: "Благодаря" },
      { q: "Во-первых, …, во-___, …", opts: ["вторых","второе","второй"], a: "вторых" },
      { q: "Он устал, но ___ продолжил работать (néanmoins)", opts: ["тем не менее","поэтому","во-первых"], a: "тем не менее" },
      { q: "___, нужен компромисс (ainsi)", opts: ["Таким образом","С другой стороны"], a: "Таким образом" }
    ]
  },
  {
    id: "c1-03", level: "C1", title: "La langue parlée", ru: "Разговорная речь",
    goal: "Comprendre le russe de la rue, des amis et des messages.",
    theory: [
      { h: "On avale les mots", p: "À l’oral rapide : <span class='ru'>здра'сьте</span> (здравствуйте), <span class='ru'>щас</span> (сейчас), <span class='ru'>чё</span> (что), <span class='ru'>тыщ</span> (тысяч), <span class='ru'>ваще'</span> (вообще), <span class='ru'>грит</span> (говорит)." },
      { h: "Les mots d’ambiance", p: "<span class='ru'>ну</span>, <span class='ru'>вот</span>, <span class='ru'>ти'па</span> (genre), <span class='ru'>коро'че</span> (bref), <span class='ru'>как бы</span> (en quelque sorte) : ce sont des mots de remplissage, comme « genre » ou « du coup »." },
      { h: "Les messages", p: "<span class='ru'>спс</span> (merci), <span class='ru'>пж</span> (s’il te plaît), <span class='ru'>норм</span>, <span class='ru'>ок</span>, <span class='ru'>)))</span> (sourire). Un seul <span class='ru'>)</span> = sourire poli, plusieurs = rire." },
      { h: "Savoir où on est", p: "<span class='ru'>блин</span> (zut) est léger mais à éviter avec un client. Le registre familier entre amis, le neutre partout ailleurs." }
    ],
    vocab: [["ла'дно","bon, d’accord"],["кру'то","génial"],["прико'льно","marrant, cool"],["блин","zut"],["коро'че","bref"],["ти'па","genre"],["дава'й!","salut ! (fin de conversation)"],["щас","tout de suite (fam.)"],["чё","quoi (fam.)"],["ничего' себе'!","ça alors !"],["да ла'дно!","sans blague !"],["без пробле'м","pas de souci"]],
    dialogue: [
      ["Гоша","Привет! Чё делаешь вечером?","Salut ! Tu fais quoi ce soir ?"],
      ["Ноэми","Да ничего. А чё?","Rien de spécial. Pourquoi ?"],
      ["Гоша","Короче, есть два билета на концерт. Пойдёшь?","Bref, j’ai deux places pour un concert. Tu viens ?"],
      ["Ноэми","Да ладно! Круто! Конечно пойду.","Sans blague ! Génial ! Bien sûr que je viens."],
      ["Гоша","Ну всё, щас скину адрес. Давай!","Bon, je t’envoie l’adresse tout de suite. Salut !"],
      ["Ноэми","Давай, пока!","Ciao, à plus !"]
    ],
    drills: [
      { q: "« Чё » est la forme familière de…", opts: ["что","чей","через"], a: "что" },
      { q: "« Щас » =", opts: ["сейчас","счастье","часы"], a: "сейчас" },
      { q: "Pour finir un appel entre amis :", opts: ["Давай!","С уважением"], a: "Давай!" },
      { q: "« Круто » signifie…", opts: ["génial","froid","lent"], a: "génial" },
      { q: "Avec un client, on évite…", opts: ["блин","пожалуйста","спасибо"], a: "блин" }
    ]
  }
];
