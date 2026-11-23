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
