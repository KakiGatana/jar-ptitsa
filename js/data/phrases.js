// Guide de conversation thématique : [russe, français, note facultative]
export const PHRASES = [
  { id: "essentiel", title: "Essentiels", icon: "✦", items: [
    ["Да / Нет","Oui / Non"],["Спасибо большое!","Merci beaucoup !"],["Пожалуйста","S’il vous plaît / Je vous en prie"],
    ["Извините","Excusez-moi"],["Простите, я не понимаю","Pardon, je ne comprends pas"],["Повторите, пожалуйста","Répétez, s’il vous plaît"],
    ["Говорите медленнее, пожалуйста","Parlez plus lentement, s’il vous plaît"],["Как сказать по-русски…?","Comment dit-on en russe… ?"],
    ["Что это значит?","Qu’est-ce que ça veut dire ?"],["Я учу русский язык","J’apprends le russe"],
    ["Можно на ты?","On peut se tutoyer ?","Proposer le tutoiement"],["Ничего страшного","Ce n’est pas grave"],["Без проблем","Pas de problème"]
  ]},
  { id: "proches", title: "Famille et proches", icon: "♥", items: [
    ["Я так рад(а) тебя видеть!","Je suis si content(e) de te voir !"],["Я по тебе скучаю","Tu me manques"],
    ["Я тебя люблю","Je t’aime"],["Как ты себя чувствуешь?","Comment te sens-tu ?"],["Береги себя","Prends soin de toi"],
    ["Не волнуйся, всё будет хорошо","Ne t’inquiète pas, tout ira bien"],["Я горжусь тобой","Je suis fier/fière de toi"],
    ["С днём рождения!","Joyeux anniversaire !"],["С Новым годом!","Bonne année !","La fête la plus importante en Russie"],
    ["Христос воскресе! — Воистину воскресе!","Christ est ressuscité ! — En vérité il est ressuscité !","Salutation de Pâques"],
    ["Приходите к нам в гости","Venez nous rendre visite"],["Спасибо за гостеприимство","Merci pour votre hospitalité"],
    ["Всё было очень вкусно","Tout était délicieux"],["За здоровье!","À la santé !"],["Обнимаю, целую","Je t’embrasse, bisous","Fin de message affectueuse"]
  ]},
  { id: "travail", title: "Travail", icon: "◆", items: [
    ["Разрешите представиться","Permettez-moi de me présenter"],["Вот моя визитка","Voici ma carte de visite"],
    ["Удобно говорить?","Vous pouvez parler ?","Au téléphone, avant d’entrer dans le sujet"],
    ["Давайте назначим встречу","Fixons un rendez-vous"],["Можно перенести встречу?","Peut-on reporter le rendez-vous ?"],
    ["Я пришлю вам письмо","Je vous enverrai un e-mail"],["Какие сроки?","Quels sont les délais ?"],
    ["Давайте обсудим детали","Discutons des détails"],["Я с вами согласен","Je suis d’accord avec vous"],
    ["Мне нужно подумать","J’ai besoin d’y réfléchir"],["Не могли бы вы уточнить?","Pourriez-vous préciser ?"],
    ["Уважаемый Иван Петрович!","Cher Ivan Petrovitch,","Début d’e-mail formel"],["С уважением,","Cordialement,","Fin d’e-mail formel"],
    ["Хороших выходных!","Bon week-end !"]
  ]},
  { id: "quotidien", title: "Vie quotidienne", icon: "☀", items: [
    ["Сколько это стоит?","Combien ça coûte ?"],["Можно картой?","Je peux payer par carte ?"],
    ["Где здесь метро?","Où est le métro ?"],["Как доехать до центра?","Comment aller au centre ?"],
    ["Один билет, пожалуйста","Un billet, s’il vous plaît"],["Счёт, пожалуйста","L’addition, s’il vous plaît"],
    ["У вас есть столик на двоих?","Avez-vous une table pour deux ?"],["Я вегетарианец / вегетарианка","Je suis végétarien / végétarienne"],
    ["Какой пароль от вайфая?","Quel est le mot de passe du wifi ?"],["Можно здесь сфотографировать?","Peut-on prendre des photos ici ?"],
    ["Остановите здесь, пожалуйста","Arrêtez-vous ici, s’il vous plaît"],["Приятного аппетита!","Bon appétit !"]
  ]},
  { id: "sentiments", title: "Opinions et sentiments", icon: "☾", items: [
    ["По-моему…","À mon avis…"],["Я думаю, что…","Je pense que…"],["Мне кажется, что…","Il me semble que…"],
    ["Ты прав / Ты права","Tu as raison (à un homme / à une femme)"],["Я не уверен(а)","Je ne suis pas sûr(e)"],
    ["Как здорово!","Comme c’est génial !"],["Какая жалость!","Quel dommage !"],["Мне всё равно","Ça m’est égal"],
    ["Я устал(а)","Je suis fatigué(e)"],["Я в восторге!","Je suis ravi(e) !"],["Не может быть!","Pas possible !"]
  ]},
  { id: "urgence", title: "Urgences", icon: "✚", items: [
    ["Помогите!","Au secours !"],["Вызовите скорую!","Appelez une ambulance !"],["Мне плохо","Je me sens mal"],
    ["Где больница?","Où est l’hôpital ?"],["Я потерял(а) паспорт","J’ai perdu mon passeport"],
    ["Позвоните в полицию","Appelez la police"],["У меня аллергия на…","Je suis allergique à…"],["112","Numéro d’urgence unique en Russie"]
  ]},
  { id: "courant", title: "Expressions du quotidien", icon: "☕", items: [
    ["Ну давай!","Allez ! / Bon, salut !","Sert à encourager ou à finir une conversation."],
    ["Да ладно!","Sans blague ! / Allez, arrête !"],["Без разницы","Peu importe"],["Как хочешь","Comme tu veux"],
    ["Как скажешь","Si tu le dis, comme tu veux"],["Посмотрим","On verra"],["Не за что","De rien"],
    ["Ничего страшного","C’est rien, pas grave"],["Мне пора","Je dois y aller"],["Я сейчас!","J’arrive tout de suite !"],
    ["Секундочку!","Une petite seconde !"],["Будь здоров! / Будьте здоровы!","À tes / vos souhaits !","Après un éternuement."],
    ["На здоровье!","Je t’en prie (après un merci pour un repas)","Ce n’est PAS un toast : on trinque avec « За здоровье! »."],
    ["С лёгким паром!","Bon bain ! (après la douche ou le sauna)","Aussi le titre du film culte du Nouvel An."],
    ["Счастливо!","Bonne continuation !"],["Удачи!","Bonne chance !"],
    ["Ну ты даёшь!","T’es incroyable ! (admiratif ou reproche)"],["Наконец-то!","Enfin !"],["Слава богу!","Dieu merci !"],
    ["Я в шоке","J’hallucine, je suis choqué(e)"],["Не вопрос!","Pas de souci !"],["Так и быть","Bon, d’accord (à contrecœur)"],
    ["Садись, в ногах правды нет","Assieds-toi, on n’est pas bien debout","Proverbe pour inviter à s’asseoir."],
    ["Это не моё","Ce n’est pas mon truc"],["Ну и ну!","Eh bien, ça alors !"],["Всё путём","Tout roule"],
    ["Будем на связи","On reste en contact"],["Чем богаты, тем и рады","C’est sans façon (en servant à manger)","Formule modeste de l’hôte."]
  ]},
  { id: "argot", title: "Familier et argot", icon: "✌", items: [
    ["Тачка","Caisse, bagnole"],["Бабки","Fric, thunes"],["Прикол / прикольно","Truc marrant / cool, marrant"],
    ["Тусоваться / тусовка","Traîner, faire la fête / soirée, milieu"],["Клёво","Cool, chouette","Un peu daté mais compris de tous."],
    ["Офигеть! / Обалдеть!","Dingue ! / Waouh !","Versions acceptables d’un juron."],["Фигня","Connerie, truc sans importance"],
    ["Ты меня достал(а)!","Tu me saoules !"],["Меня бесит…","…m’énerve, je supporte pas…"],["Чувак","Mec"],
    ["Тупить / я туплю","Bugger, être lent / je rame"],["Халява","Truc gratuit, à l’œil"],["Кайф / кайфовать","Le pied / kiffer"],
    ["Забей!","Laisse tomber !"],["Не парься!","Te prends pas la tête !"],["Ржать","Se marrer (litt. hennir)"],
    ["Днюха","Anniv’"],["Комп, универ, общага","Ordi, fac, résidence étudiante"],["Капец!","C’est la cata !","Euphémisme poli d’un mot vulgaire."],
    ["Пофиг","Je m’en fiche"],["Блин!","Zut ! / Mince !","Ultra courant. Évite seulement en contexte très formel."],
    ["Ёлки-палки!","Punaise ! / Nom d’un chien !"],["Короче","Bref, en gros"],["Типа","Genre"]
  ]},
  { id: "insultes", title: "Insultes courantes", icon: "☠", items: [
    ["Дурак / дура","Idiot / idiote","Courant, même affectueux entre proches : « Дурачок! »."],
    ["Идиот / идиотка","Idiot / idiote"],["Придурок","Crétin, abruti"],
    ["Козёл","Salaud (litt. bouc)","Insulte forte pour un homme, plus grave qu’en français."],
    ["Сволочь","Ordure, salaud"],["Свинья","Porc (personne grossière ou sale)"],
    ["Хам / хамка","Malpoli, rustre","Хамство = comportement grossier."],["Зануда","Rabat-joie, casse-pieds"],
    ["Лох","Pigeon, loser","Argot méprisant."],["Тупой / тупая","Débile"],["Урод","Monstre, abruti","Blessant."],
    ["Балбес","Nigaud","Gentil, plutôt affectueux."],["Тормоз","Lent à la détente (litt. frein)"],
    ["Отвали!","Fous-moi la paix !"],["Заткнись!","Ferme-la !"],["Иди к чёрту!","Va au diable !"]
  ]},
  { id: "mat", title: "Мат (vulgaire)", icon: "⚠", gated: true, items: [
    ["Бля / блядь","Putain (interjection)","Très vulgaire. Euphémisme : блин."],
    ["Сука","Salope ; « putain » (interjection)","Insulte forte. Euphémisme : зараза."],
    ["Пиздец","C’est la cata, c’est foutu","Euphémismes : капец, звиздец."],
    ["Охуеть! / охуенно","Putain c’est dingue ! / Génial à mort","Euphémismes : офигеть, обалдеть / офигенно."],
    ["Похуй","J’en ai rien à foutre","Euphémismes : пофиг, по барабану."],
    ["Иди нахуй!","Va te faire foutre !","Très grave. Euphémismes : иди нафиг, иди к чёрту."],
    ["Заебал(а)!","Tu me fais chier !","Euphémismes : задолбал(а), достал(а)."],
    ["Хуйня","Connerie, truc nul","Euphémismes : фигня, ерунда."],
    ["Пиздеть","Raconter des conneries, mentir","Euphémismes : врать, болтать."],
    ["Ни хуя себе!","Putain, ça alors !","Euphémismes : ни фига себе, ничего себе."],
    ["Ёб твою мать!","Nom de Dieu ! (juron visant la mère)","Euphémismes : ёлки-палки, ёшкин кот."],
    ["Мудак","Connard","Insulte forte."],["Долбоёб","Abruti fini","Très insultant."],
    ["Хуй","Bite","Base de nombreux mots. Euphémismes : хрен, фиг."]
  ]}
];
