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
  ]}
];
