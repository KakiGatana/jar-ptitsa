// Leçons supplémentaires B2 et C1 : nuances, particules, émotions, ironie, registres.
export const LESSONS_B2 = [
  {
    id: "b2-05", level: "B2", title: "Les préfixes verbaux", ru: "Приставки глаголов",
    goal: "Commencer, faire un peu, refaire, finir, en avoir assez : tout est dans le préfixe.",
    theory: [
      { h: "Un préfixe change le sens", p: "<table class='gram'><tr><th>préfixe</th><th>nuance</th><th>exemple</th></tr><tr><td class='ru'>за-</td><td>commencer</td><td class='ru'>запла'кать, засмея'ться</td></tr><tr><td class='ru'>по-</td><td>un peu, un moment</td><td class='ru'>поспа'ть, поговори'ть</td></tr><tr><td class='ru'>про-</td><td>toute une durée ; rater</td><td class='ru'>проспа'ть</td></tr><tr><td class='ru'>пере-</td><td>refaire ; trop</td><td class='ru'>переде'лать, перее'сть</td></tr><tr><td class='ru'>до-</td><td>finir jusqu’au bout</td><td class='ru'>дочита'ть</td></tr><tr><td class='ru'>недо-</td><td>pas assez</td><td class='ru'>недоспа'ть, недосоли'ть</td></tr><tr><td class='ru'>вы- + -ся</td><td>à fond, tout son soûl</td><td class='ru'>вы'спаться</td></tr><tr><td class='ru'>на- + -ся</td><td>à satiété</td><td class='ru'>нае'сться</td></tr></table>" },
      { h: "Un seul verbe, mille nuances", p: "<span class='ru'>спать</span> dormir → <span class='ru'>поспа'ть</span> faire un somme → <span class='ru'>проспа'ть</span> ne pas se réveiller à temps → <span class='ru'>вы'спаться</span> dormir tout son soûl → <span class='ru'>недоспа'ть</span> manquer de sommeil. Les natifs jouent sans cesse avec ces préfixes : c’est ce qui rend leur russe vivant." },
      { h: "Aspect", p: "Le préfixe rend presque toujours le verbe <b>perfectif</b>. Pour l’imperfectif, on ajoute souvent un suffixe : <span class='ru'>переде'лать → переде'лывать</span>, <span class='ru'>дочита'ть → дочи'тывать</span>." }
    ],
    vocab: [["запла'кать","se mettre à pleurer"],["засмея'ться","se mettre à rire"],["поспа'ть","dormir un peu"],["проспа'ть","ne pas se réveiller à temps"],["переде'лать","refaire"],["перее'сть","trop manger"],["дочита'ть","finir de lire"],["недоспа'ть","manquer de sommeil"],["вы'спаться","dormir tout son soûl"],["нае'сться","manger à sa faim"],["переду'мать","changer d’avis"],["приоткры'ть","entrouvrir"]],
    dialogue: [
      ["Лена","Ты чего такой сонный?","Pourquoi t’as l’air si endormi ?"],
      ["Матьё","Недоспал. Вчера дочитывал книгу до трёх ночи.","J’ai pas assez dormi. Hier j’ai fini mon livre à trois heures du matin."],
      ["Лена","А сегодня утром не проспал?","Et ce matin, tu ne t’es pas réveillé en retard ?"],
      ["Матьё","Чуть не проспал! В выходные высплюсь.","J’ai failli ! Ce week-end je dormirai tout mon soûl."],
      ["Лена","А отчёт ты переделал?","Et le rapport, tu l’as refait ?"],
      ["Матьё","Начал, но передумал: лучше напишу заново.","J’ai commencé, mais j’ai changé d’avis : je vais plutôt le réécrire."]
    ],
    drills: [
      { q: "Он вдруг ___ (se mit à rire)", opts: ["засмеялся","посмеялся","высмеялся"], a: "засмеялся" },
      { q: "Я хочу немного ___ (faire un somme)", opts: ["поспать","проспать","выспаться"], a: "поспать" },
      { q: "Я ___ и опоздал на работу.", opts: ["проспал","поспал","выспался"], a: "проспал" },
      { q: "Не ___, это вредно! (trop manger)", opts: ["переедай","доедай","наедайся"], a: "переедай" },
      { q: "Сначала ___ книгу! (finis de lire)", opts: ["дочитай","перечитай","почитай"], a: "дочитай" }
    ]
  },
  {
    id: "b2-06", level: "B2", title: "Les petits mots qui changent tout", ru: "Частицы",
    goal: "же, ведь, разве, неужели, -ка… : le secret pour ne plus parler comme un manuel.",
    theory: [
      { h: "Pourquoi c’est essentiel", p: "Un étranger qui parle sans particules sonne comme un robot. Les natifs en mettent partout pour insister, s’étonner, adoucir. Elles ne se traduisent pas mot à mot : écoute l’intonation." },
      { h: "Insister et rappeler", p: "<span class='ru'>же</span> : <span class='ru'>Я же говори'л!</span> (je te l’avais bien dit !) · <span class='ru'>ведь</span> : évidence partagée, <span class='ru'>Ведь ты зна'ешь…</span> (tu sais bien que…) · <span class='ru'>всё-таки</span> : quand même." },
      { h: "S’étonner, douter", p: "<span class='ru'>ра'зве</span> : <span class='ru'>Ра'зве ты не знал?</span> (tu ne savais pas ?) · <span class='ru'>неуже'ли</span> : <span class='ru'>Неуже'ли э'то пра'вда?</span> (pas possible, c’est vrai ?) · <span class='ru'>вро'де (бы)</span> : <span class='ru'>Он вро'де до'ма</span> (on dirait qu’il est là)." },
      { h: "Adoucir, réagir", p: "<span class='ru'>-ка</span> adoucit un ordre : <span class='ru'>Дай-ка посмотре'ть</span> (fais voir) · <span class='ru'>ну</span> : <span class='ru'>Ну дава'й!</span> <span class='ru'>Ну и что?</span> · <span class='ru'>уж</span> : <span class='ru'>не так уж пло'хо</span> (pas si mal) · <span class='ru'>вот</span> : <span class='ru'>Вот э'то да!</span> (ça alors !), <span class='ru'>Вот и'менно!</span> (exactement !)." }
    ],
    vocab: [["же","(insistance)"],["ведь","puisque, tu sais bien"],["ра'зве","est-ce que… vraiment ?"],["неуже'ли","pas possible !"],["вро'де бы","on dirait, apparemment"],["всё-таки","quand même"],["как раз","justement"],["вот и'менно","exactement"],["не так уж","pas si…"],["ну и что?","et alors ?"],["вот э'то да!","ça alors !"],["дай-ка","fais voir, donne voir"]],
    dialogue: [
      ["Оля","Ты что, не пришёл на вечеринку?","Quoi, t’es pas venu à la soirée ?"],
      ["Стас","Я же тебе писал, что заболел!","Je t’avais bien écrit que j’étais malade !"],
      ["Оля","Разве? Неужели я не видела?","Ah bon ? J’aurais pas vu ?"],
      ["Стас","Ты ведь никогда не читаешь сообщения!","Mais tu ne lis jamais les messages !"],
      ["Оля","Ну и что? Всё-таки мог бы позвонить.","Et alors ? Tu aurais quand même pu appeler."],
      ["Стас","Ладно. Дай-ка твой телефон, проверю.","Bon. Fais voir ton téléphone, je vérifie."]
    ],
    drills: [
      { q: "Я ___ говорил! (je te l’avais bien dit)", opts: ["же","ли","ка"], a: "же" },
      { q: "___ это правда?! (pas possible)", opts: ["Неужели","Ведь","Вот"], a: "Неужели" },
      { q: "Дай___ посмотреть (fais voir)", opts: ["-ка","-то","же"], a: "-ка" },
      { q: "Фильм не так ___ плох.", opts: ["уж","же","ведь"], a: "уж" },
      { q: "Он ___ бы дома, но я не уверен.", opts: ["вроде","разве","неужели"], a: "вроде" }
    ]
  },
  {
    id: "b2-07", level: "B2", title: "L’actualité", ru: "Новости",
    goal: "Comprendre et commenter les infos, citer ses sources.",
    theory: [
      { h: "Citer une source", p: "<span class='ru'>по слова'м</span> + génitif (d’après) : <span class='ru'>по слова'м мини'стра</span> · <span class='ru'>по да'нным</span> + génitif (selon les données de) · <span class='ru'>как сообща'ет…</span> (comme le rapporte…) · <span class='ru'>говоря'т, что…</span> (on dit que…)." },
      { h: "Le style des titres", p: "La presse aime les noms plutôt que les verbes : <span class='ru'>Рост цен на жильё</span> (hausse des prix du logement), et le passif en -ся : <span class='ru'>Вопро'с обсужда'ется</span> (la question est débattue)." },
      { h: "Hausse et baisse", p: "<span class='ru'>вы'расти / рост</span> augmenter, hausse · <span class='ru'>упа'сть / паде'ние</span> chuter, chute · <span class='ru'>сни'зиться / сниже'ние</span> baisser, baisse." }
    ],
    vocab: [["но'вости","actualités, infos"],["СМИ","médias"],["заголо'вок","titre"],["статья'","article"],["по слова'м","d’après (+ gén.)"],["по да'нным","selon les données de"],["сообща'ть","rapporter, informer"],["опро'с","sondage"],["вы'боры","élections"],["рост","hausse, croissance"],["сниже'ние","baisse"],["исто'чник","source"]],
    dialogue: [
      ["Вадим","Ты читала новости сегодня?","T’as lu les infos aujourd’hui ?"],
      ["Элиз","Да. По данным опроса, цены на жильё снова выросли.","Oui. Selon un sondage, les prix du logement ont encore augmenté."],
      ["Вадим","А по словам министра, ожидается снижение.","Mais d’après le ministre, une baisse est attendue."],
      ["Элиз","Как сообщают СМИ, это обсуждается уже год.","Comme le rapportent les médias, on en parle depuis un an déjà."],
      ["Вадим","Надо читать разные источники и не верить заголовкам.","Il faut lire différentes sources et ne pas croire les titres."]
    ],
    drills: [
      { q: "по ___ министра", opts: ["словам","слова","слов"], a: "словам" },
      { q: "по ___ опроса", opts: ["данным","данные","данных"], a: "данным" },
      { q: "Цены снова ___ (ont augmenté)", opts: ["выросли","выросла","вырос"], a: "выросли" },
      { q: "Этот вопрос ___ уже год (est débattu)", opts: ["обсуждается","обсуждает"], a: "обсуждается" },
      { q: "Écris « élections » en russe", a: "выборы" }
    ]
  },
  {
    id: "b2-08", level: "B2", title: "Se disputer, se réconcilier", ru: "Ссора и примирение",
    goal: "Exprimer l’agacement, apaiser, s’excuser comme un natif.",
    theory: [
      { h: "Les reproches", p: "<span class='ru'>Ско'лько мо'жно?</span> (jusqu’à quand ?) · <span class='ru'>Опя'ть ты…!</span> (encore toi qui…) · <span class='ru'>Ты ве'чно…</span> (tu passes ton temps à…) · <span class='ru'>Хва'тит!</span> (ça suffit !) · <span class='ru'>Отста'нь!</span> (lâche-moi !) · <span class='ru'>Не начина'й</span> (ne commence pas)." },
      { h: "Calmer le jeu", p: "<span class='ru'>Дава'й успоко'имся</span> · <span class='ru'>Дава'й поговори'м споко'йно</span> · <span class='ru'>Я не э'то име'л в виду'</span> (ce n’est pas ce que je voulais dire)." },
      { h: "S’excuser, faire la paix", p: "<span class='ru'>Прости', я был непра'в</span> · <span class='ru'>Я погорячи'лся</span> (je me suis emporté) · <span class='ru'>Не обижа'йся</span> (ne le prends pas mal). Accepter : <span class='ru'>Ла'дно, прое'хали</span> (bon, on passe). Le rituel enfantin que même les adultes emploient : <span class='ru'>— Мир? — Мир!</span>" }
    ],
    vocab: [["ссо'ра","dispute"],["ссо'риться","se disputer"],["мири'ться","se réconcilier"],["обижа'ться","se vexer"],["хва'тит!","ça suffit !"],["отста'нь!","lâche-moi !"],["ско'лько мо'жно?","jusqu’à quand ?"],["я погорячи'лся","je me suis emporté"],["не обижа'йся","ne le prends pas mal"],["прое'хали","laisse tomber, on passe"],["винова'т","fautif, coupable"],["оправда'ние","excuse, justification"]],
    dialogue: [
      ["Аня","Опять ты опоздал! Сколько можно?","Encore en retard ! Jusqu’à quand ?"],
      ["Жюль","Не начинай, пожалуйста. Были пробки.","Ne commence pas, s’il te plaît. Il y avait des bouchons."],
      ["Аня","Ты вечно находишь оправдания!","Tu trouves toujours des excuses !"],
      ["Жюль","Хорошо, я виноват. Прости, я погорячился.","D’accord, c’est ma faute. Pardon, je me suis emporté."],
      ["Аня","Ладно, проехали. Я тоже не хотела тебя обидеть.","Bon, laisse tomber. Moi non plus je ne voulais pas te blesser."],
      ["Жюль","Мир?","On fait la paix ?"],
      ["Аня","Мир!","La paix !"]
    ],
    drills: [
      { q: "___ можно? (jusqu’à quand ?)", opts: ["Сколько","Как","Когда"], a: "Сколько" },
      { q: "Не ___, я пошутил.", opts: ["обижайся","обижаешься","обидься"], a: "обижайся" },
      { q: "Я не это имел в ___", opts: ["виду","вид","виде"], a: "виду" },
      { q: "Ладно, ___ (laisse tomber)", opts: ["проехали","приехали","уехали"], a: "проехали" },
      { q: "Écris « ça suffit ! » en russe", a: "хватит" }
    ]
  }
];

export const LESSONS_C1 = [
  {
    id: "c1-04", level: "C1", title: "Les diminutifs", ru: "Уменьшительные формы",
    goal: "Tendresse, politesse, ironie : la magie des suffixes affectueux.",
    theory: [
      { h: "Les suffixes", p: "<span class='ru'>-ик / -чик</span> : <span class='ru'>до'мик, ко'тик</span> · <span class='ru'>-ок / -ёк</span> : <span class='ru'>сыно'к, чаёк</span> · <span class='ru'>-очка / -ечка</span> : <span class='ru'>минуто'чка, ма'мочка</span> · <span class='ru'>-енька</span> : <span class='ru'>Ма'шенька</span> · <span class='ru'>-ышко</span> : <span class='ru'>со'лнышко</span>." },
      { h: "Trois usages", p: "<b>Tendresse</b> avec les proches et les enfants (<span class='ru'>со'лнышко, ко'тик, ба'бушка</span>). <b>Politesse</b> dans les services : <span class='ru'>Мину'точку!</span>, <span class='ru'>Вам паке'тик?</span>, <span class='ru'>Ва'ши докуме'нтики</span>. <b>Ironie ou condescendance</b> : <span class='ru'>Ну что, у'мничек?</span>" },
      { h: "Les prénoms : attention", p: "Мари'я → <span class='ru'>Ма'ша</span> (normal entre proches) → <span class='ru'>Ма'шенька</span> (tendre) → <span class='ru'>Ма'шка</span> (familier, entre très proches ou… méprisant). Dans la bouche d’un inconnu, la forme en <span class='ru'>-ка</span> peut vexer." }
    ],
    vocab: [["чаёк","petit thé"],["сыно'к","fiston"],["до'мик","maisonnette"],["мину'точку!","une petite minute !"],["паке'тик","petit sachet"],["со'лнышко","mon soleil (affectueux)"],["ма'мочка","maman chérie"],["ко'тик","mon chou (litt. petit chat)"],["Ма'шенька","Machenka (tendre)"],["Ма'шка","Machka (familier)"],["пирожо'к","petit pâté"],["у'мничка","petit génie (affectueux ou ironique)"]],
    dialogue: [
      ["Мама","Сынок, садись, выпей чайку!","Fiston, assieds-toi, prends un petit thé !"],
      ["Сын","Спасибо, мамочка. Минуточку, только руки помою.","Merci, maman. Une petite minute, je me lave juste les mains."],
      ["Мама","Машенька тоже придёт?","La petite Macha vient aussi ?"],
      ["Сын","Да, со своим котиком. Ой, то есть с мужем!","Oui, avec son chéri. Euh, je veux dire avec son mari !"],
      ["Мама","Ну пусть приходят, пирожков на всех хватит.","Eh bien qu’ils viennent, il y a assez de petits pâtés pour tout le monde."]
    ],
    drills: [
      { q: "Diminutif tendre de Маша :", opts: ["Машенька","Машка","Мария"], a: "Машенька" },
      { q: "Подождите ___! (une petite minute)", opts: ["минуточку","минуточка","минуте"], a: "минуточку" },
      { q: "Appeler une inconnue « Машка », c’est…", opts: ["familier, voire vexant","très poli"], a: "familier, voire vexant" },
      { q: "« Солнышко », adressé à quelqu’un, veut dire…", opts: ["mon soleil, mon chéri","il fait beau"], a: "mon soleil, mon chéri" },
      { q: "Выпей ___! (un petit thé)", opts: ["чайку","чаёк","чая"], a: "чайку" }
    ]
  },
  {
    id: "c1-05", level: "C1", title: "Ironie et sous-entendus", ru: "Ирония",
    goal: "Comprendre le second degré russe et y répondre.",
    theory: [
      { h: "Le second degré du quotidien", p: "<span class='ru'>Ага', щас!</span> (c’est ça, compte là-dessus) · <span class='ru'>Ну-ну</span> (mouais, c’est ça) · <span class='ru'>Как бы не так!</span> (tu parles !) · <span class='ru'>О'чень смешно'</span> (très drôle, sarcastique) · <span class='ru'>Спаси'бо, кэп</span> (merci Captain Obvious)." },
      { h: "Le fameux « да нет »", p: "<span class='ru'>Да нет, наве'рное</span> = non, sans doute pas. Le <span class='ru'>да</span> initial n’est qu’un adoucissant, c’est <span class='ru'>нет</span> qui compte. À l’inverse, <span class='ru'>Ещё бы!</span> veut dire « et comment ! »." },
      { h: "L’intonation fait tout", p: "<span class='ru'>Коне'чно</span> dit vite et bas, avec un regard : « bien sûr… (pas du tout) ». Les Russes pratiquent beaucoup l’humour pince-sans-rire : dans le doute, souris, et demande <span class='ru'>Ты шу'тишь?</span>" }
    ],
    vocab: [["ага', щас!","c’est ça, compte là-dessus !"],["ну-ну","mouais, c’est ça (sceptique)"],["как бы не так!","tu parles !"],["о'чень смешно'","très drôle (sarcastique)"],["спаси'бо, кэп","merci Captain Obvious"],["да нет, наве'рное","non, sans doute pas"],["ещё бы!","et comment !"],["ты шу'тишь?","tu plaisantes ?"],["вот э'то друго'е де'ло!","ah, ça c’est autre chose !"],["ну ты даёшь!","t’es incroyable !"]],
    dialogue: [
      ["Костя","Слушай, поможешь мне переехать в субботу?","Dis, tu m’aides à déménager samedi ?"],
      ["Тибо","Ага, щас! В субботу я сплю до обеда.","C’est ça, compte là-dessus ! Le samedi je dors jusqu’à midi."],
      ["Костя","Ну-ну. А кто обещал всегда помогать?","Mouais. Et qui avait promis de toujours aider ?"],
      ["Тибо","Да ладно, я пошутил. Конечно помогу.","Allez, je rigolais. Bien sûr que je t’aide."],
      ["Костя","Ещё бы! Пицца с меня.","Encore heureux ! La pizza, c’est pour moi."],
      ["Тибо","Вот это другое дело!","Ah, ça c’est autre chose !"]
    ],
    drills: [
      { q: "« Ага, щас ! » veut dire…", opts: ["sûrement pas","tout de suite","d’accord"], a: "sûrement pas" },
      { q: "— Ты устал? — ___, наверное. (non, sans doute pas)", opts: ["Да нет","Нет да","Да да"], a: "Да нет" },
      { q: "— Пойдёшь на концерт любимой группы? — ___!", opts: ["Ещё бы","Как бы не так"], a: "Ещё бы" },
      { q: "« Спасибо, кэп » s’emploie quand…", opts: ["quelqu’un dit une évidence","on remercie un capitaine"], a: "quelqu’un dit une évidence" },
      { q: "« Ну-ну » exprime…", opts: ["le scepticisme","l’enthousiasme"], a: "le scepticisme" }
    ]
  },
  {
    id: "c1-06", level: "C1", title: "La langue administrative", ru: "Официальный стиль",
    goal: "Lire et écrire courriers, demandes, documents officiels.",
    theory: [
      { h: "Le « канцелярит »", p: "Le style administratif aime les noms et les verbes lourds : <span class='ru'>осуществля'ть прове'рку</span> (= <span class='ru'>проверя'ть</span>), <span class='ru'>явля'ться</span> (= être), <span class='ru'>да'нный</span> (= ce, le présent). Comprends-le, mais n’en abuse pas : à l’oral il sonne bureaucrate." },
      { h: "Connecteurs officiels", p: "<span class='ru'>в связи' с</span> + instr. (en raison de) · <span class='ru'>в це'лях</span> + gén. (afin de) · <span class='ru'>согла'сно</span> + dat. (conformément à) · <span class='ru'>в слу'чае</span> + gén. (en cas de) · <span class='ru'>по вопро'су</span> + gén. (au sujet de)." },
      { h: "La demande écrite (заявление)", p: "<span class='ru'>Прошу' предоста'вить мне о'тпуск с 1 по 14 ию'ля.</span> Formule : <span class='ru'>Прошу'</span> + infinitif. Dans une lettre, <span class='ru'>Вы</span> s’écrit avec une majuscule quand on s’adresse à une seule personne." }
    ],
    vocab: [["заявле'ние","demande écrite"],["явля'ться","être (officiel)"],["да'нный","ce, le présent"],["в связи' с","en raison de"],["в це'лях","afin de"],["согла'сно","conformément à"],["в слу'чае","en cas de"],["осуществля'ть","effectuer"],["предоста'вить","accorder, fournir"],["рассмотре'ть","examiner"],["прилага'ю","je joins (un document)"],["по вопро'су","au sujet de"]],
    dialogue: [
      ["Вы","Добрый день. Я по вопросу продления визы.","Bonjour. Je viens au sujet de la prolongation de visa."],
      ["Сотрудник","Согласно правилам, необходимо подать заявление.","Conformément au règlement, il faut déposer une demande."],
      ["Вы","В связи с работой мне нужна виза на год. Документы прилагаю.","En raison de mon travail, il me faut un visa d’un an. Je joins les documents."],
      ["Сотрудник","Ваше заявление будет рассмотрено в течение десяти дней.","Votre demande sera examinée sous dix jours."],
      ["Вы","В случае отказа меня уведомят?","En cas de refus, serai-je prévenu ?"],
      ["Сотрудник","Да, вам придёт письмо.","Oui, vous recevrez une lettre."]
    ],
    drills: [
      { q: "В ___ с ремонтом офис закрыт (en raison de)", opts: ["связи","целях","случае"], a: "связи" },
      { q: "Прошу ___ мне отпуск.", opts: ["предоставить","предоставлю","предоставил"], a: "предоставить" },
      { q: "___ правилам (conformément à)", opts: ["Согласно","Согласен","Согласие"], a: "Согласно" },
      { q: "Version courante de « осуществлять проверку » :", opts: ["проверять","делать проверку","являться"], a: "проверять" },
      { q: "Dans une lettre à une personne, « vous » s’écrit…", opts: ["Вы","вы"], a: "Вы" }
    ]
  },
  {
    id: "c1-07", level: "C1", title: "Les faux amis du français", ru: "Ложные друзья переводчика",
    goal: "Éviter les mots qui ressemblent au français mais trahissent.",
    theory: [
      { h: "Ils te piègent", p: "<table class='gram'><tr><th>russe</th><th>veut dire</th><th>pas</th></tr><tr><td class='ru'>фами'лия</td><td>nom de famille</td><td>famille (<span class='ru'>семья'</span>)</td></tr><tr><td class='ru'>арти'ст</td><td>acteur, artiste de scène</td><td>peintre (<span class='ru'>худо'жник</span>)</td></tr><tr><td class='ru'>симпати'чный</td><td>joli, mignon (physique)</td><td>sympa (<span class='ru'>прия'тный, сла'вный</span>)</td></tr><tr><td class='ru'>аккура'тный</td><td>soigneux, ordonné</td><td>exact (<span class='ru'>то'чный</span>)</td></tr><tr><td class='ru'>дека'да</td><td>période de 10 jours</td><td>décennie (<span class='ru'>десятиле'тие</span>)</td></tr><tr><td class='ru'>гардеро'б</td><td>vestiaire ; armoire</td><td>—</td></tr><tr><td class='ru'>прете'нзия</td><td>réclamation, reproche</td><td>prétention (<span class='ru'>самонаде'янность</span>)</td></tr><tr><td class='ru'>брига'да</td><td>équipe (ouvriers, secours)</td><td>brigade de police</td></tr></table>" },
      { h: "Les mots venus du français", p: "Le russe a emprunté des centaines de mots au français aux XVIIIᵉ et XIXᵉ siècles : <span class='ru'>пляж, тротуа'р, шофёр, макия'ж, бульо'н, абажу'р, шарм, сувени'р, парашю'т</span>. Bonne nouvelle : ceux-là, tu les comprends tout de suite." }
    ],
    vocab: [["фами'лия","nom de famille"],["арти'ст","acteur, artiste de scène"],["худо'жник","peintre, artiste"],["симпати'чный","joli, mignon"],["аккура'тный","soigneux, ordonné"],["дека'да","période de dix jours"],["прете'нзия","réclamation"],["брига'да","équipe"],["гардеро'б","vestiaire"],["тротуа'р","trottoir"],["пляж","plage"],["шофёр","chauffeur"]],
    dialogue: [
      ["Ира","Как твоя фамилия?","Quel est ton nom de famille ?"],
      ["Люка","Дюпон. А что?","Dupont. Pourquoi ?"],
      ["Ира","Ты такой аккуратный, у тебя всё по полочкам!","T’es tellement ordonné, chez toi tout est bien rangé !"],
      ["Люка","Спасибо! А твой брат — артист?","Merci ! Et ton frère, il est acteur ?"],
      ["Ира","Да, в театре. И очень симпатичный, кстати.","Oui, au théâtre. Et très beau garçon, d’ailleurs."],
      ["Люка","Оставлю куртку в гардеробе, и пойдём в зал.","Je laisse ma veste au vestiaire et on va dans la salle."]
    ],
    drills: [
      { q: "« Фамилия » signifie…", opts: ["nom de famille","famille"], a: "nom de famille" },
      { q: "« Симпатичный » décrit surtout…", opts: ["l’apparence (mignon)","la gentillesse"], a: "l’apparence (mignon)" },
      { q: "Au théâtre, on laisse son manteau…", opts: ["в гардеробе","в кабинете","на пляже"], a: "в гардеробе" },
      { q: "« Аккуратный » =", opts: ["soigneux, ordonné","ponctuel","exact"], a: "soigneux, ordonné" },
      { q: "Un client mécontent écrit une…", opts: ["претензию","декаду","бригаду"], a: "претензию" }
    ]
  }
];
