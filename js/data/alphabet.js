// [majuscule, minuscule, son, explication, exemple, traduction, groupe]
// groupes : amie (même forme, même son), faux (même forme, autre son), nouvelle, unique
export const ALPHABET = [
  ["А","а","a","Comme le « a » de « papa ».","ма'ма","maman","amie"],
  ["Б","б","b","Comme le « b » de « bébé ».","брат","frère","nouvelle"],
  ["В","в","v","Faux ami : ressemble à B, se prononce « v ».","вода'","eau","faux"],
  ["Г","г","g","Toujours dur, comme « gare ».","го'род","ville","nouvelle"],
  ["Д","д","d","Comme le « d » de « dame ».","дом","maison","nouvelle"],
  ["Е","е","ié","« ié » en début de mot ou après une voyelle ; sinon « é » qui mouille la consonne.","нет","non","faux"],
  ["Ё","ё","io","Toujours accentué. Souvent écrit sans les points (е).","ёлка","sapin","nouvelle"],
  ["Ж","ж","j","Comme le « j » de « jour », un peu plus grave.","журна'л","magazine","unique"],
  ["З","з","z","Comme le « z » de « zéro ». Ressemble au chiffre 3.","зи'ма","hiver","nouvelle"],
  ["И","и","i","Comme le « i » de « lit ».","и'мя","prénom","nouvelle"],
  ["Й","й","ï","« i bref », comme dans « paille ».","мой","mon","nouvelle"],
  ["К","к","k","Comme le « k » de « kilo ».","кот","chat","amie"],
  ["Л","л","l","« l » dur, la langue contre les dents.","ла'мпа","lampe","nouvelle"],
  ["М","м","m","Comme le « m » de « maman ».","мир","monde, paix","amie"],
  ["Н","н","n","Faux ami : ressemble à H, se prononce « n ».","нос","nez","faux"],
  ["О","о","o","« o » quand il est accentué, « a » sinon (молоко́ → malako).","о'кна","fenêtres","amie"],
  ["П","п","p","Comme le « p » de « papa ».","па'па","papa","nouvelle"],
  ["Р","р","r","Faux ami : ressemble à P, c’est un « r » roulé.","ры'ба","poisson","faux"],
  ["С","с","s","Faux ami : ressemble à C, toujours « s ».","сок","jus","faux"],
  ["Т","т","t","Comme le « t » de « tête ». En italique il s’écrit т ≈ m.","там","là-bas","amie"],
  ["У","у","ou","Faux ami : ressemble à Y, se prononce « ou ».","у'тро","matin","faux"],
  ["Ф","ф","f","Comme le « f » de « fête ».","фильм","film","nouvelle"],
  ["Х","х","kh","Faux ami : ressemble à X, c’est un « r » raclé, comme la jota espagnole.","хлеб","pain","faux"],
  ["Ц","ц","ts","« ts » comme dans « tsar ».","ца'рь","tsar","unique"],
  ["Ч","ч","tch","« tch » comme dans « tchèque », toujours doux.","чай","thé","unique"],
  ["Ш","ш","ch","« ch » dur, comme « chat », langue en arrière.","шко'ла","école","unique"],
  ["Щ","щ","chtch","« ch » long et doux, presque « chch ».","борщ","bortsch","unique"],
  ["Ъ","ъ","—","Signe dur : ne se prononce pas, sépare la consonne de la voyelle suivante.","подъе'зд","entrée d’immeuble","unique"],
  ["Ы","ы","y","Son entre « i » et « ou » : dis « i » en reculant la langue.","ты","tu","unique"],
  ["Ь","ь","ʼ","Signe mou : ne se prononce pas, rend la consonne précédente douce.","мать","mère","unique"],
  ["Э","э","è","Comme le « è » de « mère ».","э'то","c’est","nouvelle"],
  ["Ю","ю","iou","« iou » comme dans « you ».","юг","sud","nouvelle"],
  ["Я","я","ia","« ia » comme dans « yak ». Veut aussi dire « je ».","я","je","nouvelle"]
];

export const GROUPS = {
  amie: ["Les lettres amies", "Même forme, même son qu’en français. Tu les sais déjà."],
  faux: ["Les faux amis", "Elles ressemblent à des lettres latines mais se prononcent autrement. Attention !"],
  nouvelle: ["Les nouvelles lettres", "Des formes nouvelles pour des sons que tu connais déjà."],
  unique: ["Les sons propres au russe", "Des sons et des signes qui n’existent pas en français."]
};
