// Leçons supplémentaires A1, A2, B1 : météo, vêtements, datif, comparatif, logement, loisirs,
// souvenirs, hôtel, relations amoureuses, appel professionnel.
export const LESSONS_D = [
  {
    id: "a1-13", level: "A1", title: "Le temps qu’il fait", ru: "Погода",
    goal: "Parler de la météo et des saisons, le sujet préféré des Russes.",
    theory: [
      { h: "Quel temps fait-il ?", p: "<span class='ru'>Кака'я сего'дня пого'да?</span> On répond avec un adverbe en <b>-о</b> : <span class='ru'>тепло', хо'лодно, жа'рко, прохла'дно</span> (frais)." },
      { h: "Il pleut, il neige", p: "En russe, la pluie et la neige « marchent » : <span class='ru'>Идёт дождь</span>, <span class='ru'>Идёт снег</span>. Le soleil « brille » : <span class='ru'>Све'тит со'лнце</span>." },
      { h: "Les saisons", p: "<span class='ru'>зима' → зимо'й</span> (en hiver) · <span class='ru'>весна' → весно'й</span> · <span class='ru'>ле'то → ле'том</span> · <span class='ru'>о'сень → о'сенью</span>. La température : <span class='ru'>ми'нус де'сять гра'дусов</span>, avec la règle 1 / 2-4 / 5+ : <span class='ru'>оди'н гра'дус, два гра'дуса, пять гра'дусов</span>." }
    ],
    vocab: [["пого'да","temps (météo)"],["тепло'","il fait doux"],["хо'лодно","il fait froid"],["жа'рко","il fait chaud"],["дождь","pluie"],["снег","neige"],["со'лнце","soleil"],["ве'тер","vent"],["зимо'й","en hiver"],["весно'й","au printemps"],["ле'том","en été"],["о'сенью","en automne"],["гра'дус","degré"],["ша'пка","bonnet"]],
    dialogue: [
      ["Аня","Какая сегодня погода в Москве?","Quel temps fait-il à Moscou aujourd’hui ?"],
      ["Макс","Холодно, минус десять, и идёт снег.","Froid, moins dix, et il neige."],
      ["Аня","А у нас тепло, плюс пятнадцать.","Chez nous il fait doux, plus quinze."],
      ["Макс","Везёт! Я люблю зиму, но не такую холодную.","Veinarde ! J’aime l’hiver, mais pas aussi froid."],
      ["Аня","Зимой надо тепло одеваться!","En hiver il faut s’habiller chaudement !"],
      ["Макс","Да, шапка и шарф обязательно.","Oui, bonnet et écharpe obligatoires."]
    ],
    drills: [
      { q: "Идёт ___ (il pleut)", opts: ["дождь","снег","солнце"], a: "дождь" },
      { q: "___ я катаюсь на лыжах (en hiver)", opts: ["Зимой","Зима","Зиму"], a: "Зимой" },
      { q: "Сегодня ___ (il fait chaud)", opts: ["жарко","жаркий","жара"], a: "жарко" },
      { q: "Минус десять ___", opts: ["градусов","градуса","градус"], a: "градусов" },
      { q: "Écris « neige » en russe", a: "снег" }
    ]
  },
  {
    id: "a1-14", level: "A1", title: "Vêtements et couleurs", ru: "Одежда и цвета",
    goal: "Décrire ce que tu portes, accorder les adjectifs de couleur.",
    theory: [
      { h: "Les couleurs s’accordent", p: "<span class='ru'>кра'сный шарф</span> (m.) · <span class='ru'>кра'сная руба'шка</span> (f.) · <span class='ru'>кра'сное пла'тье</span> (n.) · <span class='ru'>кра'сные брю'ки</span> (pl.). Attention : <span class='ru'>брю'ки</span> (pantalon) est toujours pluriel." },
      { h: "Deux bleus", p: "Le russe a deux couleurs pour le bleu : <span class='ru'>си'ний</span> (bleu foncé) et <span class='ru'>голубо'й</span> (bleu clair). Ce sont deux couleurs différentes pour un Russe ! <span class='ru'>си'ний</span> est un adjectif « doux » : <span class='ru'>си'няя, си'нее, си'ние</span>." },
      { h: "Ça te va", p: "<span class='ru'>Тебе' идёт э'то пла'тье</span> (cette robe te va) · <span class='ru'>Я ношу' очки'</span> (je porte des lunettes) · <span class='ru'>Мо'жно приме'рить?</span> (je peux essayer ?)." }
    ],
    vocab: [["оде'жда","vêtements"],["пла'тье","robe"],["брю'ки","pantalon"],["шарф","écharpe"],["боти'нки","chaussures montantes"],["кра'сный","rouge"],["си'ний","bleu foncé"],["голубо'й","bleu clair"],["бе'лый","blanc"],["чёрный","noir"],["зелёный","vert"],["жёлтый","jaune"],["носи'ть","porter (habituellement)"],["идёт","(ça) va bien (à qqn)"]],
    dialogue: [
      ["Лиза","Как тебе это красное платье?","Comment tu trouves cette robe rouge ?"],
      ["Камий","Очень красивое! Тебе идёт.","Très jolie ! Elle te va bien."],
      ["Лиза","А синее?","Et la bleue ?"],
      ["Камий","Синее тоже хорошее, но красное лучше.","La bleue est bien aussi, mais la rouge est mieux."],
      ["Лиза","Тогда беру красное. А ты что ищешь?","Alors je prends la rouge. Et toi, tu cherches quoi ?"],
      ["Камий","Чёрные брюки и белую рубашку для работы.","Un pantalon noir et une chemise blanche pour le travail."]
    ],
    drills: [
      { q: "___ платье (rouge)", opts: ["красное","красный","красная"], a: "красное" },
      { q: "___ рубашка (blanche)", opts: ["белая","белый","белое"], a: "белая" },
      { q: "Это платье тебе ___ (te va bien)", opts: ["идёт","носит","ходит"], a: "идёт" },
      { q: "Я ищу ___ брюки (noir)", opts: ["чёрные","чёрный","чёрная"], a: "чёрные" },
      { q: "Écris « bleu foncé » en russe", a: "синий" }
    ]
  },
  {
    id: "a2-09", level: "A2", title: "Le datif : à qui ?", ru: "Кому?",
    goal: "Donner, offrir, aider, téléphoner : le datif des noms.",
    theory: [
      { h: "Les terminaisons", p: "<table class='gram'><tr><th></th><th>nominatif</th><th>datif</th></tr><tr><td>masc. / neutre</td><td class='ru'>брат, окно'</td><td class='ru'>бра'ту, окну'</td></tr><tr><td>-й, -ь</td><td class='ru'>музе'й, учи'тель</td><td class='ru'>музе'ю, учи'телю</td></tr><tr><td>fém. -а / -я</td><td class='ru'>ма'ма, Та'ня</td><td class='ru'>ма'ме, Та'не</td></tr><tr><td>fém. -ия, -ь</td><td class='ru'>Мари'я, мать</td><td class='ru'>Мари'и, ма'тери</td></tr><tr><td>pluriel</td><td class='ru'>друзья'</td><td class='ru'>друзья'м</td></tr></table>" },
      { h: "Les verbes du datif", p: "<span class='ru'>дава'ть / дать</span> (donner) · <span class='ru'>дари'ть / подари'ть</span> (offrir) · <span class='ru'>помога'ть</span> (aider) · <span class='ru'>звони'ть</span> (téléphoner) · <span class='ru'>сове'товать</span> (conseiller) · <span class='ru'>объясня'ть</span> (expliquer). Attention : en russe on aide <i>à</i> quelqu’un : <span class='ru'>Я помога'ю ма'ме</span>." },
      { h: "К et по", p: "<span class='ru'>к</span> + datif = vers / chez une personne : <span class='ru'>Я иду' к врачу'</span>, <span class='ru'>Пое'дем к ба'бушке</span>. <span class='ru'>по</span> + datif = par, sur, le long de : <span class='ru'>по телефо'ну, по интерне'ту, по у'лице</span>." }
    ],
    vocab: [["помога'ть","aider"],["сове'товать","conseiller"],["пока'зывать","montrer"],["объясня'ть","expliquer"],["отправля'ть","envoyer"],["к","vers, chez (+ dat.)"],["по телефо'ну","au téléphone"],["по интерне'ту","sur internet"],["ба'бушке","à grand-mère"],["дру'гу","à un ami"],["плато'к","foulard"],["переда'й приве'т!","passe-lui le bonjour !"]],
    dialogue: [
      ["Оля","Что ты подаришь бабушке на день рождения?","Qu’est-ce que tu vas offrir à mamie pour son anniversaire ?"],
      ["Хуго","Я подарю ей платок. А ты?","Je vais lui offrir un foulard. Et toi ?"],
      ["Оля","Я помогу маме приготовить торт.","Je vais aider maman à faire le gâteau."],
      ["Хуго","Молодец! А когда ты едешь к бабушке?","Bravo ! Et quand vas-tu chez mamie ?"],
      ["Оля","В субботу. Завтра позвоню ей по телефону.","Samedi. Demain je l’appelle au téléphone."],
      ["Хуго","Передай ей привет!","Passe-lui le bonjour !"]
    ],
    drills: [
      { q: "Я подарю ___ цветы (мама)", opts: ["маме","маму","мамы"], a: "маме" },
      { q: "Я иду к ___ (врач)", opts: ["врачу","врача","врачом"], a: "врачу" },
      { q: "Помоги ___! (брат)", opts: ["брату","брата","брат"], a: "брату" },
      { q: "Я звоню ___ (друзья)", opts: ["друзьям","друзей","друзья"], a: "друзьям" },
      { q: "Мы говорили по ___ (телефон)", opts: ["телефону","телефоне","телефон"], a: "телефону" }
    ]
  },
  {
    id: "a2-10", level: "A2", title: "Comparer", ru: "Сравнение",
    goal: "Plus grand, moins cher, le plus beau : comparer en russe.",
    theory: [
      { h: "Le comparatif court", p: "Radical + <b>-ее</b> : <span class='ru'>тёплый → тепле'е</span>, <span class='ru'>интере'сный → интере'снее</span>, <span class='ru'>холо'дный → холодне'е</span>. Invariable, il suit souvent le verbe : <span class='ru'>Сего'дня тепле'е</span>." },
      { h: "Les irréguliers indispensables", p: "<span class='ru'>большо'й → бо'льше</span> · <span class='ru'>ма'ленький → ме'ньше</span> · <span class='ru'>хоро'ший → лу'чше</span> · <span class='ru'>плохо'й → ху'же</span> · <span class='ru'>дорого'й → доро'же</span> · <span class='ru'>дешёвый → деше'вле</span> · <span class='ru'>ста'рый → ста'рше</span> (personnes) · <span class='ru'>молодо'й → мла'дше</span> · <span class='ru'>высо'кий → вы'ше</span>." },
      { h: "Que… / le plus…", p: "« que » = <span class='ru'>чем</span> : <span class='ru'>Москва' бо'льше, чем Пари'ж</span>. Plus familier, le génitif sans чем : <span class='ru'>Брат ста'рше меня'</span>. Superlatif : <span class='ru'>са'мый</span> + adjectif : <span class='ru'>са'мый краси'вый го'род</span>. « Beaucoup plus » : <span class='ru'>намно'го / гора'здо бо'льше</span>." }
    ],
    vocab: [["бо'льше","plus (grand)"],["ме'ньше","moins (petit)"],["лу'чше","mieux, meilleur"],["ху'же","pire"],["доро'же","plus cher"],["деше'вле","moins cher"],["ста'рше","plus âgé"],["мла'дше","plus jeune"],["чем","que (comparaison)"],["са'мый","le plus"],["намно'го","beaucoup (+ comparatif)"],["зарпла'та","salaire"]],
    dialogue: [
      ["Ноэль","Москва больше, чем Париж?","Moscou est plus grand que Paris ?"],
      ["Вера","Да, намного больше. И зимой холоднее.","Oui, beaucoup plus. Et l’hiver il fait plus froid."],
      ["Ноэль","А где дешевле жить?","Et où est-ce moins cher de vivre ?"],
      ["Вера","В Москве дешевле, чем в Париже, но зарплаты ниже.","À Moscou c’est moins cher qu’à Paris, mais les salaires sont plus bas."],
      ["Ноэль","Какой самый красивый город в России?","Quelle est la plus belle ville de Russie ?"],
      ["Вера","По-моему, Петербург. Но москвичи скажут, что Москва!","À mon avis Saint-Pétersbourg. Mais les Moscovites diront que c’est Moscou !"]
    ],
    drills: [
      { q: "Москва больше, ___ Париж.", opts: ["чем","как","что"], a: "чем" },
      { q: "Мой брат ___ меня (plus âgé)", opts: ["старше","старый","старее"], a: "старше" },
      { q: "Сегодня ___, чем вчера (plus doux)", opts: ["теплее","тепло","тёплый"], a: "теплее" },
      { q: "Это ___ красивый город (le plus)", opts: ["самый","очень","более"], a: "самый" },
      { q: "Мне сегодня ___ (je vais mieux)", opts: ["лучше","хорошо","хуже"], a: "лучше" }
    ]
  },
  {
    id: "a2-11", level: "A2", title: "Trouver un logement", ru: "Квартира",
    goal: "Lire une annonce, visiter, louer un appartement.",
    theory: [
      { h: "Louer : deux verbes", p: "<span class='ru'>снима'ть</span> = louer (en tant que locataire) · <span class='ru'>сдава'ть</span> = louer (en tant que propriétaire). <span class='ru'>Кварти'ра сдаётся</span> = appartement à louer." },
      { h: "L’annonce", p: "On compte les pièces, pas les chambres : <span class='ru'>одноко'мнатная</span> (T1), <span class='ru'>двухко'мнатная</span> (T2), <span class='ru'>трёхко'мнатная</span> (T3). L’étage avec un ordinal au prépositionnel : <span class='ru'>на пя'том этаже'</span>. Le rez-de-chaussée, c’est déjà le <span class='ru'>пе'рвый эта'ж</span> !" },
      { h: "Les questions à poser", p: "<span class='ru'>Ско'лько сто'ит аре'нда?</span> · <span class='ru'>Коммуна'льные услу'ги включены'?</span> (charges comprises ?) · <span class='ru'>Ну'жен зало'г?</span> (une caution ?) · <span class='ru'>Мо'жно с живо'тными?</span> (animaux acceptés ?)." }
    ],
    vocab: [["снима'ть","louer (locataire)"],["сдава'ть","louer (propriétaire)"],["аре'нда","loyer, location"],["хозя'ин","propriétaire"],["эта'ж","étage"],["одноко'мнатная","T1"],["двухко'мнатная","T2"],["ме'бель","meubles"],["зало'г","caution"],["лифт","ascenseur"],["балко'н","balcon"],["объявле'ние","annonce"]],
    dialogue: [
      ["Вы","Здравствуйте, я по объявлению. Квартира ещё сдаётся?","Bonjour, j’appelle pour l’annonce. L’appartement est toujours à louer ?"],
      ["Хозяйка","Да. Двухкомнатная, на пятом этаже.","Oui. Un T2, au cinquième étage."],
      ["Вы","Лифт есть?","Il y a un ascenseur ?"],
      ["Хозяйка","Есть. И балкон, и вся мебель.","Oui. Et un balcon, et tous les meubles."],
      ["Вы","Сколько стоит аренда?","Combien coûte le loyer ?"],
      ["Хозяйка","Пятьдесят тысяч в месяц плюс залог.","Cinquante mille par mois plus la caution."],
      ["Вы","Можно посмотреть сегодня вечером?","Je peux visiter ce soir ?"],
      ["Хозяйка","Конечно, приходите в семь.","Bien sûr, venez à sept heures."]
    ],
    drills: [
      { q: "на ___ этаже (5ᵉ)", opts: ["пятом","пятый","пять"], a: "пятом" },
      { q: "Я ___ квартиру (je suis locataire)", opts: ["снимаю","сдаю"], a: "снимаю" },
      { q: "Хозяин ___ квартиру (propriétaire)", opts: ["сдаёт","снимает"], a: "сдаёт" },
      { q: "___ квартира (T2)", opts: ["Двухкомнатная","Две комнаты","Двойная"], a: "Двухкомнатная" },
      { q: "Écris « meubles » en russe", a: "мебель" }
    ]
  },
  {
    id: "a2-12", level: "A2", title: "Loisirs et sport", ru: "Хобби",
    goal: "Parler de tes passions : jouer à, jouer de, faire du sport.",
    theory: [
      { h: "Jouer à / jouer de", p: "<span class='ru'>игра'ть в</span> + accusatif pour les jeux et sports : <span class='ru'>игра'ть в футбо'л, в ша'хматы</span>. <span class='ru'>игра'ть на</span> + prépositionnel pour les instruments : <span class='ru'>игра'ть на гита'ре, на пиани'но</span>." },
      { h: "Pratiquer, se passionner", p: "<span class='ru'>занима'ться</span> + instrumental : <span class='ru'>занима'ться спо'ртом, йо'гой</span>. <span class='ru'>увлека'ться</span> + instrumental (se passionner pour) : <span class='ru'>Я увлека'юсь фотогра'фией</span>." },
      { h: "Ton temps libre", p: "<span class='ru'>Что ты де'лаешь в свобо'дное вре'мя?</span> · <span class='ru'>Как ты прово'дишь выходны'е?</span> (comment passes-tu tes week-ends ?)" }
    ],
    vocab: [["свобо'дное вре'мя","temps libre"],["увлека'ться","se passionner pour"],["игра'ть в те'ннис","jouer au tennis"],["игра'ть на гита'ре","jouer de la guitare"],["ша'хматы","échecs"],["пла'вать","nager"],["бе'гать","courir"],["рисова'ть","dessiner"],["фотогра'фия","photographie"],["йо'га","yoga"],["научи'ть","apprendre (à qqn)"],["сыгра'ть","jouer (perf.)"]],
    dialogue: [
      ["Дима","Что ты делаешь в свободное время?","Qu’est-ce que tu fais pendant ton temps libre ?"],
      ["Элен","Играю в теннис и занимаюсь йогой. А ты?","Je joue au tennis et je fais du yoga. Et toi ?"],
      ["Дима","Я играю на гитаре и увлекаюсь фотографией.","Je joue de la guitare et je me passionne pour la photo."],
      ["Элен","Здорово! Сыграешь мне что-нибудь?","Génial ! Tu me joues quelque chose ?"],
      ["Дима","Конечно! А ты научишь меня играть в теннис?","Bien sûr ! Et toi, tu m’apprends à jouer au tennis ?"],
      ["Элен","Договорились!","Marché conclu !"]
    ],
    drills: [
      { q: "Я играю ___ футбол.", opts: ["в","на"], a: "в" },
      { q: "Он играет ___ пианино.", opts: ["на","в"], a: "на" },
      { q: "Я занимаюсь ___ (йога)", opts: ["йогой","йогу","йога"], a: "йогой" },
      { q: "Она увлекается ___ (фотография)", opts: ["фотографией","фотографию","фотография"], a: "фотографией" },
      { q: "Écris « nager » en russe", a: "плавать" }
    ]
  },
  {
    id: "b1-07", level: "B1", title: "Raconter un souvenir", ru: "Воспоминания",
    goal: "Raconter ton enfance et une anecdote avec les bons aspects.",
    theory: [
      { h: "Le décor et l’événement", p: "Dans un récit, l’<b>imperfectif</b> plante le décor et les habitudes (<span class='ru'>Ка'ждое ле'то мы е'здили на да'чу</span>), le <b>perfectif</b> fait avancer l’histoire (<span class='ru'>Одна'жды я потеря'лся в лесу'</span>)." },
      { h: "Quand j’étais petit", p: "<span class='ru'>Когда' я был ма'леньким</span> (instrumental après <span class='ru'>быть</span> au passé) · <span class='ru'>в де'тстве</span> (dans mon enfance) · <span class='ru'>ра'ньше</span> (avant, autrefois) · <span class='ru'>быва'ло</span> (il arrivait que)." },
      { h: "Rythmer le récit", p: "<span class='ru'>одна'жды</span> (un jour) · <span class='ru'>вдруг</span> (soudain) · <span class='ru'>пото'м</span> (ensuite) · <span class='ru'>в конце' концо'в</span> (finalement) · <span class='ru'>до сих пор</span> (jusqu’à aujourd’hui)." }
    ],
    vocab: [["в де'тстве","dans l’enfance"],["ра'ньше","avant, autrefois"],["по'мнить","se souvenir"],["вспомина'ть","se remémorer"],["одна'жды","un jour"],["впервы'е","pour la première fois"],["да'ча","maison de campagne"],["купа'ться","se baigner"],["собира'ть грибы'","cueillir des champignons"],["потеря'ться","se perdre"],["найти'","trouver"],["до сих пор","jusqu’à aujourd’hui"]],
    dialogue: [
      ["Лена","Расскажи, каким ты был в детстве?","Raconte, comment tu étais enfant ?"],
      ["Поль","Когда я был маленьким, мы каждое лето ездили на дачу к дедушке.","Quand j’étais petit, on allait chaque été à la datcha chez mon grand-père."],
      ["Лена","Здорово! Что вы там делали?","Génial ! Qu’est-ce que vous y faisiez ?"],
      ["Поль","Купались в реке, собирали грибы. А однажды я потерялся в лесу!","On se baignait dans la rivière, on cueillait des champignons. Et un jour je me suis perdu dans la forêt !"],
      ["Лена","Не может быть! И что?","Pas possible ! Et alors ?"],
      ["Поль","Дедушка нашёл меня через час. Я до сих пор это помню.","Mon grand-père m’a retrouvé une heure plus tard. Je m’en souviens encore."]
    ],
    drills: [
      { q: "Когда я был ___, …", opts: ["маленьким","маленький","маленького"], a: "маленьким" },
      { q: "Каждое лето мы ___ на дачу.", opts: ["ездили","поехали"], a: "ездили" },
      { q: "Однажды я ___ в лесу.", opts: ["потерялся","терялся"], a: "потерялся" },
      { q: "___ я жил в Лионе (autrefois)", opts: ["Раньше","Однажды","Вдруг"], a: "Раньше" },
      { q: "Дедушка ___ меня через час.", opts: ["нашёл","находил"], a: "нашёл" }
    ]
  },
  {
    id: "b1-08", level: "B1", title: "À l’hôtel", ru: "Гостиница",
    goal: "Réserver, arriver, signaler un problème et obtenir une solution.",
    theory: [
      { h: "Réserver et arriver", p: "<span class='ru'>заброни'ровать но'мер</span> (réserver une chambre) · <span class='ru'>У меня' бронь на и'мя…</span> (j’ai une réservation au nom de…) · <span class='ru'>но'мер на двои'х</span> (chambre double) · <span class='ru'>за'втрак включён</span>." },
      { h: "Signaler un problème", p: "<span class='ru'>В но'мере не рабо'тает…</span> (… ne marche pas) · <span class='ru'>Нет горя'чей воды'</span> (pas d’eau chaude, génitif après нет) · <span class='ru'>Мо'жно поменя'ть но'мер?</span> Reste poli mais ferme : <span class='ru'>Я бы хоте'л, что'бы э'то испра'вили</span> (j’aimerais que ce soit réparé)." },
      { h: "Partir", p: "<span class='ru'>Во ско'лько вы'езд?</span> (à quelle heure libère-t-on la chambre ?) · <span class='ru'>Мо'жно оста'вить бага'ж?</span> (je peux laisser mes bagages ?) · <span class='ru'>Вы'зовите, пожа'луйста, такси'</span>." }
    ],
    vocab: [["гости'ница","hôtel"],["но'мер","chambre (d’hôtel)"],["бронь","réservation"],["заброни'ровать","réserver"],["вы'езд","départ (de l’hôtel)"],["за'втрак включён","petit-déjeuner inclus"],["кондиционе'р","climatisation"],["горя'чая вода'","eau chaude"],["поменя'ть","changer"],["ключ","clé"],["бага'ж","bagages"],["жа'лоба","plainte"]],
    dialogue: [
      ["Вы","Добрый вечер, у меня бронь на имя Мартен.","Bonsoir, j’ai une réservation au nom de Martin."],
      ["Администратор","Да, номер на двоих, три ночи. Завтрак включён.","Oui, chambre double, trois nuits. Petit-déjeuner inclus."],
      ["Вы","Спасибо. Во сколько выезд?","Merci. À quelle heure faut-il libérer la chambre ?"],
      ["Администратор","До двенадцати. Вот ваш ключ.","Avant midi. Voici votre clé."],
      ["Вы","Извините, в номере не работает кондиционер и нет горячей воды.","Excusez-moi, la clim ne marche pas dans la chambre et il n’y a pas d’eau chaude."],
      ["Администратор","Простите, пожалуйста! Мы поменяем вам номер.","Je suis vraiment désolé ! Nous allons vous changer de chambre."]
    ],
    drills: [
      { q: "У меня ___ на имя Мартен.", opts: ["бронь","брони","бронью"], a: "бронь" },
      { q: "В номере не ___ кондиционер.", opts: ["работает","работают"], a: "работает" },
      { q: "Нет ___ воды (chaude)", opts: ["горячей","горячая","горячую"], a: "горячей" },
      { q: "Завтрак ___ (inclus)", opts: ["включён","включает","включить"], a: "включён" },
      { q: "Можно ___ номер?", opts: ["поменять","поменяю","поменял"], a: "поменять" }
    ]
  },
  {
    id: "b1-09", level: "B1", title: "Amour et relations", ru: "Отношения",
    goal: "Rencontres, couple, mariage : le vocabulaire du cœur et ses prépositions.",
    theory: [
      { h: "Les étapes", p: "<span class='ru'>познако'миться</span> (faire connaissance) → <span class='ru'>встреча'ться</span> (sortir ensemble) → <span class='ru'>влюби'ться в</span> + acc. (tomber amoureux de) → <span class='ru'>сде'лать предложе'ние</span> (demander en mariage) → <span class='ru'>пожени'ться</span> (se marier, à deux) → et parfois <span class='ru'>расста'ться</span> (se séparer)." },
      { h: "Se marier : deux verbes", p: "Une femme <span class='ru'>выхо'дит за'муж за</span> + acc. (litt. « sort derrière un mari ») : <span class='ru'>Она' вы'шла за'муж за Анто'на</span>. Un homme <span class='ru'>же'нится на</span> + prép. : <span class='ru'>Он жени'лся на Ка'те</span>. Être marié : <span class='ru'>жена'т</span> (homme), <span class='ru'>за'мужем</span> (femme)." },
      { h: "Vœux de mariage", p: "<span class='ru'>Сове'т да любо'вь!</span> (vœu traditionnel : harmonie et amour) · et pendant la fête, les invités crient <span class='ru'>Го'рько!</span> (« c’est amer ! ») pour que les mariés s’embrassent." }
    ],
    vocab: [["свида'ние","rendez-vous amoureux"],["встреча'ться","sortir ensemble"],["влюби'ться","tomber amoureux"],["расста'ться","se séparer"],["пожени'ться","se marier (à deux)"],["па'рень","petit ami, gars"],["де'вушка","petite amie, jeune femme"],["жени'х","fiancé"],["неве'ста","fiancée"],["сва'дьба","mariage (fête)"],["ревнова'ть","être jaloux"],["с пе'рвого взгля'да","au premier regard"]],
    dialogue: [
      ["Маша","Ты знаешь, Катя и Антон встречаются!","Tu sais, Katia et Anton sortent ensemble !"],
      ["Лео","Правда? Где они познакомились?","C’est vrai ? Où se sont-ils rencontrés ?"],
      ["Маша","На работе. Он влюбился в неё с первого взгляда.","Au travail. Il est tombé amoureux d’elle au premier regard."],
      ["Лео","Как романтично! А свадьба будет?","Comme c’est romantique ! Et il y aura un mariage ?"],
      ["Маша","Говорят, он уже сделал ей предложение.","On dit qu’il l’a déjà demandée en mariage."],
      ["Лео","Ничего себе! Совет да любовь!","Ça alors ! Tous nos vœux de bonheur !"]
    ],
    drills: [
      { q: "Он влюбился ___ неё.", opts: ["в","на","за"], a: "в" },
      { q: "Она вышла замуж ___ Антона.", opts: ["за","на","в"], a: "за" },
      { q: "Он женился ___ Кате.", opts: ["на","за","в"], a: "на" },
      { q: "Они ___ уже год (sortent ensemble)", opts: ["встречаются","встречают"], a: "встречаются" },
      { q: "Il l’a demandée en mariage : Он сделал ей ___", opts: ["предложение","свадьбу","свидание"], a: "предложение" }
    ]
  },
  {
    id: "b1-10", level: "B1", title: "L’appel professionnel", ru: "Деловой звонок",
    goal: "Demander quelqu’un, laisser un message, épeler ton nom.",
    theory: [
      { h: "Demander quelqu’un", p: "<span class='ru'>Могу' я поговори'ть с…?</span> (puis-je parler à…, + instrumental) · <span class='ru'>Соедини'те, пожа'луйста, с…</span> (passez-moi…) · <span class='ru'>Доба'вочный два'дцать три</span> (poste 23)." },
      { h: "Il n’est pas là", p: "<span class='ru'>Его' нет на ме'сте</span> (il n’est pas à son bureau) · <span class='ru'>Что'-нибудь переда'ть?</span> (je lui transmets un message ?) · <span class='ru'>Я перезвоню' по'зже</span> · <span class='ru'>Пусть он мне перезвони'т</span> (qu’il me rappelle)." },
      { h: "Épeler", p: "<span class='ru'>Продикту'йте, пожа'луйста, по бу'квам</span>. Pour un nom français, épelle avec l’alphabet russe : Leroy → <span class='ru'>Л-е-р-у-а</span>. En cas de mauvaise ligne : <span class='ru'>Вас пло'хо слы'шно</span> (je vous entends mal)." }
    ],
    vocab: [["соедини'ть","passer (au téléphone)"],["перезвони'ть","rappeler"],["переда'ть","transmettre"],["на ме'сте","à son poste"],["по по'воду","au sujet de"],["продикто'вать","dicter"],["по бу'квам","lettre par lettre"],["доба'вочный","poste (téléphonique)"],["секрета'рь","secrétaire"],["пло'хо слы'шно","on entend mal"],["обраща'ться","s’adresser à"],["сообще'ние","message"]],
    dialogue: [
      ["Секретарь","Компания «Восток», добрый день.","Société Vostok, bonjour."],
      ["Пьер","Здравствуйте, это Пьер Леруа из Парижа. Могу я поговорить с Андреем Ивановичем?","Bonjour, Pierre Leroy de Paris. Puis-je parler à Andreï Ivanovitch ?"],
      ["Секретарь","К сожалению, его нет на месте. Что-нибудь передать?","Malheureusement il n’est pas à son bureau. Je lui transmets un message ?"],
      ["Пьер","Да, передайте, пожалуйста, что я звонил по поводу договора.","Oui, dites-lui s’il vous plaît que j’ai appelé au sujet du contrat."],
      ["Секретарь","Хорошо. Продиктуйте, пожалуйста, фамилию по буквам.","D’accord. Épelez-moi votre nom, s’il vous plaît."],
      ["Пьер","Л-е-р-у-а. Я перезвоню после обеда.","L-e-r-o-y. Je rappellerai cet après-midi."]
    ],
    drills: [
      { q: "Могу я ___ с Андреем Ивановичем?", opts: ["поговорить","говорю","поговорю"], a: "поговорить" },
      { q: "Его нет на ___", opts: ["месте","место","местом"], a: "месте" },
      { q: "Что-нибудь ___?", opts: ["передать","передал","передам"], a: "передать" },
      { q: "Я ___ позже (rappellerai)", opts: ["перезвоню","перезвонил","перезванивать"], a: "перезвоню" },
      { q: "___ фамилию по буквам.", opts: ["Продиктуйте","Диктуете","Продиктовать"], a: "Продиктуйте" }
    ]
  }
];
