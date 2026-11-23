// Conversations à embranchements. Chaque nœud : réplique du personnage + choix.
// ok:false → maladroit ou faux, avec une explication ; le joueur peut réessayer.
export const CONVERSATIONS = [
  {
    id: "cafe", ctx: "quotidien", level: "A1", title: "Au café", ru: "В кафе",
    who: "Серверша Даша", intro: "Tu entres dans un petit café de Moscou. Commande et paie.",
    nodes: {
      start: { npc: ["Здравствуйте! Что будете заказывать?", "Bonjour ! Que désirez-vous ?"], choices: [
        { ru: "Здравствуйте! Чай, пожалуйста.", fr: "Bonjour ! Un thé, s’il vous plaît.", next: "tea" },
        { ru: "Привет! Дай кофе.", fr: "Salut ! File-moi un café.", ok: false, tip: "Trop familier avec une serveuse inconnue : on dit Здравствуйте et on vouvoie (Дайте, пожалуйста)." },
        { ru: "Можно кофе с молоком?", fr: "Je peux avoir un café au lait ?", next: "coffee" }
      ]},
      tea: { npc: ["Чёрный или зелёный?", "Noir ou vert ?"], choices: [
        { ru: "Чёрный, с лимоном.", fr: "Noir, avec du citron.", next: "food" },
        { ru: "Зелёный, без сахара.", fr: "Vert, sans sucre.", next: "food" }
      ]},
      coffee: { npc: ["Конечно. Большой или маленький?", "Bien sûr. Grand ou petit ?"], choices: [
        { ru: "Большой, пожалуйста.", fr: "Un grand, s’il vous plaît.", next: "food" },
        { ru: "Маленькую.", fr: "Une petite.", ok: false, tip: "кофе est masculin : маленький (кофе)." }
      ]},
      food: { npc: ["Что-нибудь ещё? У нас вкусные блины.", "Autre chose ? Nous avons de bonnes crêpes."], choices: [
        { ru: "Да, блины со сметаной, пожалуйста.", fr: "Oui, des crêpes à la crème fraîche, s’il vous plaît.", next: "pay" },
        { ru: "Нет, спасибо. Сколько с меня?", fr: "Non, merci. Je vous dois combien ?", next: "pay" }
      ]},
      pay: { npc: ["С вас четыреста пятьдесят рублей. Картой или наличными?", "Ça fera 450 roubles. Carte ou espèces ?"], choices: [
        { ru: "Картой, пожалуйста.", fr: "Par carte, s’il vous plaît.", next: "end" },
        { ru: "Наличными. Вот, пожалуйста.", fr: "En espèces. Voilà.", next: "end" }
      ]},
      end: { npc: ["Спасибо! Приятного аппетита!", "Merci ! Bon appétit !"], end: true }
    }
  },
  {
    id: "parents", ctx: "proches", level: "A2", title: "Dîner chez ses parents", ru: "Знакомство с родителями",
    who: "Мама, Елена Николаевна", intro: "Tu rencontres pour la première fois la mère de ton/ta partenaire. Fais bonne impression !",
    nodes: {
      start: { npc: ["Здравствуйте, проходите! Я Елена Николаевна.", "Bonjour, entrez ! Je suis Elena Nikolaïevna."], choices: [
        { ru: "Здравствуйте, Елена Николаевна! Очень приятно. Это вам.", fr: "Bonjour, Elena Nikolaïevna ! Enchanté(e). C’est pour vous.", next: "flowers" },
        { ru: "Привет, Лена!", fr: "Salut, Léna !", ok: false, tip: "Avec la mère de ton/ta partenaire, à la première rencontre : vouvoiement + prénom et patronyme." }
      ]},
      flowers: { npc: ["Ой, какие красивые цветы! Спасибо! Садитесь, пожалуйста.", "Oh, quelles belles fleurs ! Merci ! Asseyez-vous, je vous en prie."], choices: [
        { ru: "Спасибо. У вас очень уютно.", fr: "Merci. C’est très chaleureux chez vous.", next: "food" },
        { ru: "Спасибо. А где можно помыть руки?", fr: "Merci. Où puis-je me laver les mains ?", next: "food" }
      ]},
      food: { npc: ["Попробуйте салат, я сама готовила. Как вам?", "Goûtez la salade, je l’ai faite moi-même. Comment la trouvez-vous ?"], choices: [
        { ru: "Очень вкусно! Можно рецепт?", fr: "C’est délicieux ! Je peux avoir la recette ?", next: "work" },
        { ru: "Нормально.", fr: "Ça va.", ok: false, tip: "« Нормально » sonne tiède. Pour une hôtesse russe, complimente le repas avec enthousiasme : Очень вкусно !" },
        { ru: "Спасибо, я уже наелся.", fr: "Merci, j’ai déjà assez mangé.", ok: false, tip: "Refuser dès le premier plat peut vexer. Goûte au moins, et complimente." }
      ]},
      work: { npc: ["А кем вы работаете?", "Et que faites-vous dans la vie ?"], choices: [
        { ru: "Я работаю инженером в Париже.", fr: "Je travaille comme ingénieur à Paris.", next: "russian" },
        { ru: "Я учитель.", fr: "Je suis professeur.", next: "russian" }
      ]},
      russian: { npc: ["Вы так хорошо говорите по-русски! Где вы учили язык?", "Vous parlez si bien russe ! Où avez-vous appris ?"], choices: [
        { ru: "Спасибо! Я учу русский каждый день, чтобы говорить с вами.", fr: "Merci ! J’apprends le russe tous les jours pour pouvoir parler avec vous.", next: "toast" },
        { ru: "Спасибо, но я ещё делаю много ошибок.", fr: "Merci, mais je fais encore beaucoup d’erreurs.", next: "toast" }
      ]},
      toast: { npc: ["Как приятно! Ну, давайте выпьем чаю с тортом.", "Comme c’est gentil ! Bon, prenons le thé avec le gâteau."], choices: [
        { ru: "С удовольствием! За знакомство!", fr: "Avec plaisir ! À notre rencontre !", next: "end" }
      ]},
      end: { npc: ["За знакомство! Приходите к нам почаще.", "À notre rencontre ! Revenez nous voir souvent."], end: true }
    }
  },
  {
    id: "collegue", ctx: "pro", level: "A2", title: "Appel d’un collègue", ru: "Звонок коллеге",
    who: "Коллега Игорь Сергеевич", intro: "Un collègue de Moscou t’appelle pour la réunion de demain.",
    nodes: {
      start: { npc: ["Алло, добрый день! Это Игорь Сергеевич. Удобно говорить?", "Allô, bonjour ! C’est Igor Sergueïevitch. Vous pouvez parler ?"], choices: [
        { ru: "Добрый день, Игорь Сергеевич! Да, конечно.", fr: "Bonjour, Igor Sergueïevitch ! Oui, bien sûr.", next: "meeting" },
        { ru: "Чё надо?", fr: "Qu’est-ce que tu veux ?", ok: false, tip: "Très familier, voire impoli. Au travail : Добрый день + prénom et patronyme." }
      ]},
      meeting: { npc: ["Завтра совещание в десять. Можно перенести на одиннадцать?", "Demain la réunion est à dix heures. Peut-on la décaler à onze heures ?"], choices: [
        { ru: "Да, без проблем. Я предупрежу коллег.", fr: "Oui, sans problème. Je préviendrai les collègues.", next: "report" },
        { ru: "К сожалению, в одиннадцать я занят. Может быть, в двенадцать?", fr: "Malheureusement, à onze heures je suis pris. Peut-être à midi ?", next: "noon" }
      ]},
      noon: { npc: ["Хорошо, давайте в двенадцать.", "D’accord, à midi alors."], choices: [
        { ru: "Отлично, договорились.", fr: "Parfait, c’est entendu.", next: "report" }
      ]},
      report: { npc: ["И пришлите, пожалуйста, отчёт до вечера.", "Et envoyez-moi le rapport avant ce soir, s’il vous plaît."], choices: [
        { ru: "Конечно, я отправлю его до шести.", fr: "Bien sûr, je l’enverrai avant six heures.", next: "end" },
        { ru: "Хорошо, я пришлю его завтра.", fr: "D’accord, je l’enverrai demain.", ok: false, tip: "Il te l’a demandé pour ce soir : propose une heure aujourd’hui ou explique pourquoi c’est impossible." }
      ]},
      end: { npc: ["Спасибо большое. До завтра!", "Merci beaucoup. À demain !"], end: true }
    }
  },
  {
    id: "entretien", ctx: "pro", level: "B1", title: "Entretien d’embauche", ru: "Собеседование",
    who: "HR-менеджер Марина", intro: "Tu passes un entretien pour un poste dans une entreprise russe.",
    nodes: {
      start: { npc: ["Добрый день! Расскажите, пожалуйста, немного о себе.", "Bonjour ! Parlez-moi un peu de vous, s’il vous plaît."], choices: [
        { ru: "Меня зовут Тома, мне тридцать лет. Я пять лет работаю менеджером проектов.", fr: "Je m’appelle Thomas, j’ai trente ans. Je suis chef de projet depuis cinq ans.", next: "why" },
        { ru: "Ну… я нормальный человек.", fr: "Euh… je suis quelqu’un de normal.", ok: false, tip: "Trop vague. Présente-toi : nom, âge, expérience, compétences." }
      ]},
      why: { npc: ["Почему вы хотите работать в нашей компании?", "Pourquoi voulez-vous travailler dans notre entreprise ?"], choices: [
        { ru: "Мне интересны ваши проекты, и я хочу работать в международной команде.", fr: "Vos projets m’intéressent et je veux travailler dans une équipe internationale.", next: "strength" },
        { ru: "Потому что у вас большая зарплата.", fr: "Parce que vous payez bien.", ok: false, tip: "Honnête, mais maladroit en entretien. Parle d’abord de l’intérêt pour le poste." }
      ]},
      strength: { npc: ["Какие у вас сильные стороны?", "Quels sont vos points forts ?"], choices: [
        { ru: "Я умею работать в команде и всегда соблюдаю сроки.", fr: "Je sais travailler en équipe et je respecte toujours les délais.", next: "russian" },
        { ru: "Я быстро учусь и легко нахожу общий язык с людьми.", fr: "J’apprends vite et je m’entends facilement avec les gens.", next: "russian" }
      ]},
      russian: { npc: ["Вы свободно говорите по-русски?", "Vous parlez couramment le russe ?"], choices: [
        { ru: "Я говорю достаточно хорошо для работы и продолжаю учиться каждый день.", fr: "Je le parle assez bien pour travailler et je continue d’apprendre chaque jour.", next: "questions" }
      ]},
      questions: { npc: ["У вас есть вопросы к нам?", "Avez-vous des questions à nous poser ?"], choices: [
        { ru: "Да. Как выглядит обычный рабочий день в вашей команде?", fr: "Oui. À quoi ressemble une journée de travail type dans votre équipe ?", next: "end" },
        { ru: "Нет, вопросов нет.", fr: "Non, aucune question.", ok: false, tip: "Ne pas poser de question peut sembler désintéressé. Prépare toujours une ou deux questions." }
      ]},
      end: { npc: ["Хороший вопрос! Мы свяжемся с вами на следующей неделе. Спасибо!", "Bonne question ! Nous vous recontacterons la semaine prochaine. Merci !"], end: true }
    }
  },
  {
    id: "amis", ctx: "proches", level: "B1", title: "Soirée entre amis", ru: "В гостях у друга",
    who: "Друг Миша", intro: "Ton ami Micha t’invite chez lui. Entre amis : tutoiement, familier, et les codes de l’invité.",
    nodes: {
      start: { npc: ["Здорово! Заходи, раздевайся. Тапки вон там.", "Salut ! Entre, enlève ta veste. Les chaussons sont là-bas."], choices: [
        { ru: "Привет! Держи, я торт принёс.", fr: "Salut ! Tiens, j’ai apporté un gâteau.", next: "gift" },
        { ru: "Здравствуйте, Михаил. Благодарю за приглашение.", fr: "Bonjour, Mikhaïl. Je vous remercie de l’invitation.", ok: false, tip: "Beaucoup trop formel avec un ami : tu lui parles comme à l’administration. Entre amis : Привет + ты." },
        { ru: "Привет! А разуваться обязательно?", fr: "Salut ! Je suis obligé d’enlever mes chaussures ?", ok: false, tip: "En Russie, on enlève toujours ses chaussures chez quelqu’un. Le demander paraît bizarre." }
      ]},
      gift: { npc: ["О, круто! Не стоило. Пиво будешь или чай?", "Oh, génial ! Fallait pas. Tu prends une bière ou un thé ?"], choices: [
        { ru: "Давай пиво, спасибо.", fr: "Une bière, merci.", next: "toast" },
        { ru: "Мне чаю, я за рулём.", fr: "Un thé pour moi, je conduis.", next: "toast" }
      ]},
      toast: { npc: ["Ну, ребята, давайте выпьем! За встречу!", "Bon les amis, on trinque ! À nos retrouvailles !"], choices: [
        { ru: "За встречу! Как же я рад вас видеть!", fr: "À nos retrouvailles ! Qu’est-ce que je suis content de vous voir !", next: "joke" },
        { ru: "На здоровье!", fr: "(croyant porter un toast)", ok: false, tip: "« На здоровье » répond à un merci pour un repas, ce n’est pas un toast. Reprends la formule : За встречу !" },
        { ru: "(Ты молча пьёшь.)", fr: "(Tu bois sans rien dire.)", ok: false, tip: "Pendant un toast, on ne boit pas en silence : on répète la formule et on trinque (sauf en mémoire d’un défunt)." }
      ]},
      joke: { npc: ["Слушай, ты уже по-русски шпаришь как настоящий русский!", "Dis donc, tu parles russe comme un vrai Russe maintenant !"], choices: [
        { ru: "Да ладно, скажешь тоже! Ещё учиться и учиться.", fr: "Arrête, n’importe quoi ! J’ai encore tout à apprendre.", next: "leave" },
        { ru: "Спасибо, я очень стараюсь.", fr: "Merci, je fais beaucoup d’efforts.", next: "leave" }
      ]},
      leave: { npc: ["Уже уходишь? Посиди ещё!", "Tu pars déjà ? Reste encore un peu !"], choices: [
        { ru: "Не, мне пора, завтра рано вставать. Спасибо за вечер!", fr: "Non, je dois y aller, je me lève tôt demain. Merci pour la soirée !", next: "end" },
        { ru: "Пока.", fr: "Salut.", ok: false, tip: "Partir sans remercier ni t’expliquer paraît froid. Donne une raison et remercie pour la soirée." }
      ]},
      end: { npc: ["Давай, напиши, как доберёшься! Пока!", "Allez, écris-moi quand t’es arrivé ! Salut !"], end: true }
    }
  },
  {
    id: "babouchka", ctx: "proches", level: "A2", title: "Appeler sa grand-mère", ru: "Звонок бабушке",
    who: "Бабушка", intro: "Tu appelles ta grand-mère russe. Elle s’inquiète toujours de savoir si tu manges assez.",
    nodes: {
      start: { npc: ["Алло! Кто это?", "Allô ! Qui est-ce ?"], choices: [
        { ru: "Бабуля, привет! Это я, твой внук!", fr: "Mamie, coucou ! C’est moi, ton petit-fils !", next: "how" },
        { ru: "Здравствуйте, это ваш внук.", fr: "Bonjour, c’est votre petit-fils.", ok: false, tip: "On ne vouvoie jamais sa grand-mère ! En famille : ты, et un diminutif affectueux comme бабуля." }
      ]},
      how: { npc: ["Ой, родной мой! Как ты? Ты хорошо кушаешь?", "Oh, mon chéri ! Comment tu vas ? Tu manges bien ?"], choices: [
        { ru: "Да, бабуль, всё хорошо. А ты как себя чувствуешь?", fr: "Oui, mamie, tout va bien. Et toi, comment tu te sens ?", next: "health" },
        { ru: "Да. Пока!", fr: "Oui. Salut !", ok: false, tip: "Raccrocher si vite blesserait ta grand-mère. Prends de ses nouvelles : А ты как себя чувствуешь ?" }
      ]},
      health: { npc: ["Да ничего, давление немножко. Когда приедешь?", "Ça va, un peu de tension. Quand viens-tu ?"], choices: [
        { ru: "Летом обязательно приеду. Береги себя!", fr: "Je viendrai sans faute cet été. Prends soin de toi !", next: "end" },
        { ru: "Не знаю, много работы.", fr: "Je sais pas, j’ai beaucoup de travail.", ok: false, tip: "Même si c’est vrai, avec une grand-mère on rassure et on promet quelque chose : Летом обязательно приеду." }
      ]},
      end: { npc: ["Жду тебя, мой хороший! Целую!", "Je t’attends, mon trésor ! Bisous !"], end: true }
    }
  },
  {
    id: "pharmacie", ctx: "quotidien", level: "A2", title: "À la pharmacie", ru: "В аптеке",
    who: "Фармацевт", intro: "Tu as mal à la gorge et tu entres dans une pharmacie.",
    nodes: {
      start: { npc: ["Здравствуйте! Чем могу помочь?", "Bonjour ! Que puis-je pour vous ?"], choices: [
        { ru: "Здравствуйте. У меня болит горло. Что вы посоветуете?", fr: "Bonjour. J’ai mal à la gorge. Que me conseillez-vous ?", next: "q" },
        { ru: "Дайте антибиотик.", fr: "Donnez-moi un antibiotique.", ok: false, tip: "Les antibiotiques demandent une ordonnance, et on décrit d’abord ses symptômes : У меня болит…" }
      ]},
      q: { npc: ["Температура есть? Кашель?", "Vous avez de la fièvre ? De la toux ?"], choices: [
        { ru: "Температуры нет, но есть небольшой кашель.", fr: "Pas de fièvre, mais je tousse un peu.", next: "reco" },
        { ru: "Да, тридцать девять и сильный кашель.", fr: "Oui, trente-neuf et une forte toux.", next: "doctor" }
      ]},
      doctor: { npc: ["С такой температурой лучше вызвать врача. Пока могу дать жаропонижающее.", "Avec une telle fièvre, mieux vaut appeler un médecin. En attendant je peux vous donner un antipyrétique."], choices: [
        { ru: "Хорошо, дайте, пожалуйста.", fr: "D’accord, donnez-le-moi, s’il vous plaît.", next: "pay" }
      ]},
      reco: { npc: ["Возьмите эти таблетки для рассасывания и спрей для горла.", "Prenez ces pastilles à sucer et un spray pour la gorge."], choices: [
        { ru: "Как их принимать?", fr: "Comment faut-il les prendre ?", next: "dose" }
      ]},
      dose: { npc: ["По одной таблетке каждые три часа, не больше восьми в день.", "Une pastille toutes les trois heures, pas plus de huit par jour."], choices: [
        { ru: "Понятно, спасибо. Сколько с меня?", fr: "Compris, merci. Je vous dois combien ?", next: "pay" }
      ]},
      pay: { npc: ["Шестьсот сорок рублей. Выздоравливайте!", "Six cent quarante roubles. Rétablissez-vous bien !"], choices: [
        { ru: "Вот, пожалуйста. Спасибо большое!", fr: "Voilà. Merci beaucoup !", next: "end" }
      ]},
      end: { npc: ["Всего доброго!", "Bonne journée !"], end: true }
    }
  },
  {
    id: "marche", ctx: "quotidien", level: "A2", title: "Au marché", ru: "На рынке",
    who: "Продавец", intro: "Au marché, on peut discuter les prix. Achète des tomates sans te faire avoir.",
    nodes: {
      start: { npc: ["Подходите, выбирайте! Всё свежее!", "Approchez, choisissez ! Tout est frais !"], choices: [
        { ru: "Почём помидоры?", fr: "Elles sont à combien, les tomates ?", next: "price" },
        { ru: "Сколько стоят ваши помидоры, уважаемый господин?", fr: "Combien coûtent vos tomates, cher monsieur ?", ok: false, tip: "« Господин » sonne très étrange au marché. Simplement : Почём… ? ou Сколько стоят… ?" }
      ]},
      price: { npc: ["Двести пятьдесят за кило. Сладкие, как мёд!", "Deux cent cinquante le kilo. Sucrées comme du miel !"], choices: [
        { ru: "Дороговато… Отдадите за двести?", fr: "C’est un peu cher… Vous me les faites à deux cents ?", next: "deal" },
        { ru: "Хорошо, дайте два кило.", fr: "D’accord, mettez-m’en deux kilos.", next: "weigh" }
      ]},
      deal: { npc: ["Ну ладно, для вас — за двести двадцать.", "Bon d’accord, pour vous : deux cent vingt."], choices: [
        { ru: "Договорились! Два кило, пожалуйста.", fr: "Marché conclu ! Deux kilos, s’il vous plaît.", next: "weigh" }
      ]},
      weigh: { npc: ["Вот, два кило с небольшим. Ещё что-нибудь?", "Voilà, deux kilos et un peu plus. Autre chose ?"], choices: [
        { ru: "Да, пучок укропа, пожалуйста.", fr: "Oui, une botte d’aneth, s’il vous plaît.", next: "end" },
        { ru: "Нет, спасибо, это всё.", fr: "Non merci, ce sera tout.", next: "end" }
      ]},
      end: { npc: ["Держите! Приходите ещё!", "Tenez ! Revenez nous voir !"], end: true }
    }
  },
  {
    id: "rendezvous", ctx: "proches", level: "B1", title: "Premier rendez-vous", ru: "Первое свидание",
    who: "Настя", intro: "Ton premier rendez-vous avec Nastia. Sois naturel, chaleureux, curieux.",
    nodes: {
      start: { npc: ["Привет! Извини, я немного опоздала.", "Salut ! Désolée, je suis un peu en retard."], choices: [
        { ru: "Ничего страшного! Ты отлично выглядишь.", fr: "C’est rien ! Tu es superbe.", next: "where" },
        { ru: "Ты опоздала на пятнадцать минут.", fr: "Tu as quinze minutes de retard.", ok: false, tip: "Exact mais glacial pour un premier rendez-vous. Un petit retard se pardonne avec le sourire : Ничего страшного !" }
      ]},
      where: { npc: ["Спасибо! Ну что, куда пойдём?", "Merci ! Bon, on va où ?"], choices: [
        { ru: "Я знаю уютное кафе рядом. Пойдём?", fr: "Je connais un café sympa à côté. On y va ?", next: "talk" },
        { ru: "Не знаю, а ты куда хочешь?", fr: "Je sais pas, où tu veux aller ?", next: "corner" }
      ]},
      corner: { npc: ["Давай в кафе на углу, там вкусные десерты.", "Allons au café du coin, ils ont de bons desserts."], choices: [
        { ru: "Отличная идея, пойдём!", fr: "Excellente idée, allons-y !", next: "talk" }
      ]},
      talk: { npc: ["Расскажи о себе. Чем ты занимаешься?", "Parle-moi de toi. Qu’est-ce que tu fais dans la vie ?"], choices: [
        { ru: "Я архитектор, а по выходным играю на гитаре. А ты?", fr: "Je suis architecte, et le week-end je joue de la guitare. Et toi ?", next: "her" },
        { ru: "Работаю. А ты?", fr: "Je travaille. Et toi ?", ok: false, tip: "Trop laconique : on a l’impression que tu ne veux pas parler. Donne un détail personnel et retourne la question." }
      ]},
      her: { npc: ["Я учитель музыки! Вот совпадение.", "Je suis prof de musique ! Quelle coïncidence."], choices: [
        { ru: "Правда? Тогда ты обязательно должна мне что-нибудь сыграть!", fr: "C’est vrai ? Alors tu dois absolument me jouer quelque chose !", next: "bill" }
      ]},
      bill: { npc: ["С удовольствием. Ой, уже поздно… Давай разделим счёт?", "Avec plaisir. Oh, il est déjà tard… On partage l’addition ?"], choices: [
        { ru: "Не надо, я приглашаю. В следующий раз — ты.", fr: "Laisse, c’est moi qui invite. La prochaine fois, ce sera toi.", next: "end" },
        { ru: "Давай, как хочешь.", fr: "D’accord, comme tu veux.", next: "end" }
      ]},
      end: { npc: ["Договорились! Мне было очень приятно. Напиши мне!", "Ça marche ! J’ai passé un très bon moment. Écris-moi !"], end: true }
    }
  },
  {
    id: "delai", ctx: "pro", level: "B2", title: "Négocier un délai", ru: "Разговор с начальником",
    who: "Начальник Виктор Павлович", intro: "Ton rapport ne sera pas prêt à temps. Préviens ton chef avec tact.",
    nodes: {
      start: { npc: ["Ну что, отчёт будет готов к пятнице?", "Alors, le rapport sera prêt pour vendredi ?"], choices: [
        { ru: "Виктор Павлович, боюсь, что к пятнице не успею. Можно перенести на вторник?", fr: "Viktor Pavlovitch, je crains de ne pas avoir fini vendredi. Peut-on décaler à mardi ?", next: "why" },
        { ru: "Нет, не успею.", fr: "Non, je n’aurai pas le temps.", ok: false, tip: "Trop sec avec un supérieur. Adoucis (Боюсь, что…) et propose tout de suite une solution." }
      ]},
      why: { npc: ["А в чём проблема?", "Et quel est le problème ?"], choices: [
        { ru: "Клиент прислал новые данные только вчера, и их нужно проверить.", fr: "Le client n’a envoyé les nouvelles données qu’hier, et il faut les vérifier.", next: "offer" },
        { ru: "Ну, так получилось.", fr: "Bah, c’est comme ça.", ok: false, tip: "« Так получилось » ne justifie rien et agace un chef. Donne une raison concrète." }
      ]},
      offer: { npc: ["Понятно. Но мне нужны хотя бы предварительные результаты.", "Je vois. Mais il me faut au moins des résultats préliminaires."], choices: [
        { ru: "Конечно. В пятницу пришлю предварительную версию, а финальную — во вторник.", fr: "Bien sûr. Vendredi j’envoie une version préliminaire, et la finale mardi.", next: "end" }
      ]},
      end: { npc: ["Договорились. Спасибо, что предупредили заранее.", "Entendu. Merci d’avoir prévenu à l’avance."], end: true }
    }
  },
  {
    id: "taxi", ctx: "quotidien", level: "A2", title: "En taxi", ru: "В такси",
    who: "Таксист", intro: "Tu prends un taxi depuis la gare jusqu’à ton hôtel.",
    nodes: {
      start: { npc: ["Добрый вечер! Куда едем?", "Bonsoir ! On va où ?"], choices: [
        { ru: "Добрый вечер! В гостиницу «Москва», пожалуйста.", fr: "Bonsoir ! À l’hôtel « Moskva », s’il vous plaît.", next: "time" },
        { ru: "Где гостиница «Москва».", fr: "Où l’hôtel « Moskva ».", ok: false, tip: "Pour une direction, on utilise в + accusatif : В гостиницу…" }
      ]},
      time: { npc: ["Хорошо. Сейчас пробки, поедем минут сорок.", "D’accord. Il y a des bouchons, ça prendra une quarantaine de minutes."], choices: [
        { ru: "Ничего страшного. А сколько это будет стоить?", fr: "Ce n’est pas grave. Et combien ça va coûter ?", next: "price" },
        { ru: "Можно побыстрее? Я опаздываю.", fr: "On peut aller plus vite ? Je suis en retard.", next: "price" }
      ]},
      price: { npc: ["Примерно восемьсот рублей.", "Environ huit cents roubles."], choices: [
        { ru: "Хорошо. Остановите, пожалуйста, у входа.", fr: "D’accord. Arrêtez-vous à l’entrée, s’il vous plaît.", next: "end" }
      ]},
      end: { npc: ["Приехали! Всего доброго!", "Nous voilà ! Bonne soirée !"], end: true }
    }
  }
];
