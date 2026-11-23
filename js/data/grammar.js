// Guides de grammaire (tutos). Les mots russes sont dans <span class='ru'>…</span> : cliquables pour les écouter.
const r = (s) => `<span class='ru'>${s}</span>`;

export const GRAMMAR = [
  {
    id: "prononciation", level: "A0", title: "Prononciation et accent", ru: "Произношение",
    html: `
<p>Le russe se lit presque comme il s’écrit, à trois règles près. Les connaître dès le début t’évitera un accent « de livre ».</p>
<h3>1. L’accent tonique</h3>
<p>Une seule syllabe par mot est forte et longue. Elle est libre et peut bouger dans la déclinaison : ${r("го'род")} → ${r("города'")}. Apprends toujours un mot <b>avec</b> son accent.</p>
<h3>2. La réduction des voyelles</h3>
<table class='gram'><tr><th>écrit</th><th>accentué</th><th>non accentué</th><th>exemple</th></tr>
<tr><td>о</td><td>o</td><td>a</td><td>${r("молоко'")} = malako</td></tr>
<tr><td>е</td><td>ié</td><td>i</td><td>${r("сестра'")} = sistra</td></tr>
<tr><td>я</td><td>ia</td><td>i</td><td>${r("язы'к")} = iizyk</td></tr></table>
<h3>3. Les consonnes dures et douces</h3>
<p>Presque chaque consonne existe en version dure et douce. Elle devient douce devant ${r("е, ё, и, ю, я")} et ${r("ь")}. Pour une consonne douce, place le milieu de la langue contre le palais, comme si tu allais dire « i ». ${r("мат")} ≠ ${r("мать")}.</p>
<h3>4. Assourdissement et assimilation</h3>
<p>En fin de mot, б→p, в→f, г→k, д→t, ж→ch, з→s : ${r("хлеб")} = khliep, ${r("любо'вь")} = lioubof’. Devant une consonne sourde, c’est pareil : ${r("ло'жка")} = lochka.</p>
<h3>5. L’intonation</h3>
<p>Affirmation : la voix descend sur la fin. Question oui/non : la voix <b>monte fortement</b> sur le mot important, puis retombe. ${r("Ты до'ма?")} (tu es à la maison ?) — la montée se fait sur ${r("до'ма")}.</p>`
  },
  {
    id: "genre", level: "A1", title: "Le genre des noms", ru: "Род",
    html: `
<p>Chaque nom est masculin, féminin ou neutre. C’est la terminaison qui le dit presque toujours, pas le sens.</p>
<table class='gram'><tr><th>genre</th><th>terminaison</th><th>exemples</th></tr>
<tr><td>masculin</td><td>consonne, -й</td><td>${r("стол, музе'й, чай")}</td></tr>
<tr><td>féminin</td><td>-а, -я</td><td>${r("ма'ма, неде'ля, семья'")}</td></tr>
<tr><td>neutre</td><td>-о, -е, -мя</td><td>${r("окно', мо'ре, и'мя, вре'мя")}</td></tr>
<tr><td>m. ou f.</td><td>-ь</td><td>${r("день")} (m.), ${r("ночь")} (f.)</td></tr></table>
<h3>Les pièges</h3>
<ul><li>Les hommes en -а / -я restent masculins : ${r("па'па, де'душка, дя'дя, Са'ша")}.</li>
<li>Les mots en -ь : apprends-les avec un adjectif (${r("хоро'ший день")}, ${r("тёмная ночь")}). Les mots en -сть, -чь, -шь sont presque toujours féminins.</li>
<li>${r("ко'фе")} est masculin ; les mots étrangers en -о, -и, -у sont neutres et invariables : ${r("метро', такси', меню'")}.</li></ul>`
  },
  {
    id: "pluriel", level: "A1", title: "Le pluriel", ru: "Множественное число",
    html: `
<table class='gram'><tr><th>singulier</th><th>pluriel</th><th>exemples</th></tr>
<tr><td>consonne, -а</td><td>-ы</td><td>${r("стол → столы'")}, ${r("ма'ма → ма'мы")}</td></tr>
<tr><td>-й, -ь, -я</td><td>-и</td><td>${r("музе'й → музе'и")}, ${r("неде'ля → неде'ли")}</td></tr>
<tr><td>-о</td><td>-а</td><td>${r("окно' → о'кна")}</td></tr>
<tr><td>-е</td><td>-я</td><td>${r("мо'ре → моря'")}</td></tr></table>
<h3>La règle des 7 lettres</h3>
<p>Après ${r("г, к, х, ж, ш, ч, щ")} on n’écrit jamais ы, mais и : ${r("кни'га → кни'ги")}, ${r("нож → ножи'")}.</p>
<h3>Irréguliers indispensables</h3>
<p>${r("челове'к → лю'ди")} · ${r("ребёнок → де'ти")} · ${r("друг → друзья'")} · ${r("брат → бра'тья")} · ${r("дом → дома'")} · ${r("го'род → города'")} · ${r("глаз → глаза'")}.</p>`
  },
  {
    id: "cas", level: "A1", title: "Les 6 cas : vue d’ensemble", ru: "Падежи",
    html: `
<p>En russe, la fin des noms, adjectifs et pronoms change selon leur rôle dans la phrase. Il y a 6 cas. Pas de panique : tu les apprends un par un, dans des situations concrètes.</p>
<table class='gram'><tr><th>cas</th><th>question</th><th>rôle principal</th><th>prépositions</th></tr>
<tr><td>Nominatif</td><td>${r("кто? что?")}</td><td>sujet</td><td>—</td></tr>
<tr><td>Génitif</td><td>${r("кого'? чего'?")}</td><td>« de », absence, quantité</td><td>${r("у, без, из, от, до, по'сле, для")}</td></tr>
<tr><td>Datif</td><td>${r("кому'? чему'?")}</td><td>« à » quelqu’un, âge, goûts</td><td>${r("к, по")}</td></tr>
<tr><td>Accusatif</td><td>${r("кого'? что? куда'?")}</td><td>complément direct, direction</td><td>${r("в, на, че'рез, про")}</td></tr>
<tr><td>Instrumental</td><td>${r("кем? чем?")}</td><td>« avec », moyen, métier</td><td>${r("с, над, под, ме'жду, пе'ред, за")}</td></tr>
<tr><td>Prépositionnel</td><td>${r("о ком? о чём? где?")}</td><td>lieu, « au sujet de »</td><td>${r("в, на, о")}</td></tr></table>
<h3>Dans quel ordre les apprendre ?</h3>
<p>L’appli suit l’ordre le plus utile : prépositionnel (où ?) → accusatif (objet, direction) → datif (goûts, âge) → génitif (avoir / ne pas avoir, quantités) → instrumental (avec, métiers). Le pluriel vient ensuite.</p>`
  },
  {
    id: "declinaisons", level: "A2", title: "Tableau des déclinaisons", ru: "Склонение",
    html: `
<h3>Singulier</h3>
<table class='gram'><tr><th>cas</th><th>masc. (стол)</th><th>neutre (окно')</th><th>fém. (ма'ма)</th><th>fém. -ь (ночь)</th></tr>
<tr><td>Nom.</td><td class='ru'>стол</td><td class='ru'>окно'</td><td class='ru'>ма'ма</td><td class='ru'>ночь</td></tr>
<tr><td>Gén.</td><td class='ru'>стола'</td><td class='ru'>окна'</td><td class='ru'>ма'мы</td><td class='ru'>но'чи</td></tr>
<tr><td>Dat.</td><td class='ru'>столу'</td><td class='ru'>окну'</td><td class='ru'>ма'ме</td><td class='ru'>но'чи</td></tr>
<tr><td>Acc.</td><td class='ru'>стол</td><td class='ru'>окно'</td><td class='ru'>ма'му</td><td class='ru'>ночь</td></tr>
<tr><td>Instr.</td><td class='ru'>столо'м</td><td class='ru'>окно'м</td><td class='ru'>ма'мой</td><td class='ru'>но'чью</td></tr>
<tr><td>Prép.</td><td class='ru'>о столе'</td><td class='ru'>об окне'</td><td class='ru'>о ма'ме</td><td class='ru'>о но'чи</td></tr></table>
<p><b>Animé ou inanimé ?</b> À l’accusatif, les masculins <b>animés</b> prennent la forme du génitif : ${r("Я ви'жу стол")} mais ${r("Я ви'жу бра'та")}.</p>
<h3>Pluriel</h3>
<table class='gram'><tr><th>cas</th><th>terminaisons</th><th>exemple (столы')</th></tr>
<tr><td>Nom.</td><td>-ы / -и / -а</td><td class='ru'>столы'</td></tr>
<tr><td>Gén.</td><td>-ов / -ей / zéro</td><td class='ru'>столо'в</td></tr>
<tr><td>Dat.</td><td>-ам / -ям</td><td class='ru'>стола'м</td></tr>
<tr><td>Acc.</td><td>= nom. (inanimé) / = gén. (animé)</td><td class='ru'>столы'</td></tr>
<tr><td>Instr.</td><td>-ами / -ями</td><td class='ru'>стола'ми</td></tr>
<tr><td>Prép.</td><td>-ах / -ях</td><td class='ru'>о стола'х</td></tr></table>
<p>Bonne nouvelle : au pluriel, datif, instrumental et prépositionnel sont <b>les mêmes pour tous les genres</b>.</p>`
  },
  {
    id: "adjectifs", level: "A1", title: "Les adjectifs", ru: "Прилагательные",
    html: `
<p>L’adjectif s’accorde en genre, nombre et cas avec le nom. Il se place généralement avant.</p>
<table class='gram'><tr><th></th><th>masc.</th><th>fém.</th><th>neutre</th><th>pluriel</th></tr>
<tr><td>dur (но'вый)</td><td class='ru'>но'вый</td><td class='ru'>но'вая</td><td class='ru'>но'вое</td><td class='ru'>но'вые</td></tr>
<tr><td>accentué (молодо'й)</td><td class='ru'>молодо'й</td><td class='ru'>молода'я</td><td class='ru'>молодо'е</td><td class='ru'>молоды'е</td></tr>
<tr><td>doux (си'ний)</td><td class='ru'>си'ний</td><td class='ru'>си'няя</td><td class='ru'>си'нее</td><td class='ru'>си'ние</td></tr>
<tr><td>7 lettres (ру'сский)</td><td class='ru'>ру'сский</td><td class='ru'>ру'сская</td><td class='ru'>ру'сское</td><td class='ru'>ру'сские</td></tr></table>
<h3>Déclinaison (masc. / neutre · fém. · pluriel)</h3>
<table class='gram'><tr><th>cas</th><th>m./n.</th><th>f.</th><th>pl.</th></tr>
<tr><td>Gén.</td><td>-ого (dit « -ova »)</td><td>-ой</td><td>-ых</td></tr>
<tr><td>Dat.</td><td>-ому</td><td>-ой</td><td>-ым</td></tr>
<tr><td>Acc.</td><td>= nom. ou gén.</td><td>-ую</td><td>= nom. ou gén.</td></tr>
<tr><td>Instr.</td><td>-ым</td><td>-ой</td><td>-ыми</td></tr>
<tr><td>Prép.</td><td>-ом</td><td>-ой</td><td>-ых</td></tr></table>
<p>Attention : dans ${r("-ого")}, le г se prononce <b>v</b> : ${r("ново'го")} = novava, ${r("его'")} = ievo.</p>
<h3>Le comparatif</h3>
<p>${r("бо'лее")} + adjectif (${r("бо'лее интере'сный")}) ou forme courte en -ее : ${r("быстре'е, интере'снее")}. Irréguliers : ${r("лу'чше")} (mieux), ${r("ху'же")} (pire), ${r("бо'льше")} (plus), ${r("ме'ньше")} (moins). « que » = ${r("чем")}.</p>`
  },
  {
    id: "pronoms", level: "A2", title: "Les pronoms personnels", ru: "Местоимения",
    html: `
<table class='gram'><tr><th>nom.</th><th>gén. / acc.</th><th>dat.</th><th>instr.</th><th>prép.</th></tr>
<tr><td class='ru'>я</td><td class='ru'>меня'</td><td class='ru'>мне</td><td class='ru'>мной</td><td class='ru'>обо мне</td></tr>
<tr><td class='ru'>ты</td><td class='ru'>тебя'</td><td class='ru'>тебе'</td><td class='ru'>тобо'й</td><td class='ru'>о тебе'</td></tr>
<tr><td class='ru'>он / оно'</td><td class='ru'>его'</td><td class='ru'>ему'</td><td class='ru'>им</td><td class='ru'>о нём</td></tr>
<tr><td class='ru'>она'</td><td class='ru'>её</td><td class='ru'>ей</td><td class='ru'>ей</td><td class='ru'>о ней</td></tr>
<tr><td class='ru'>мы</td><td class='ru'>нас</td><td class='ru'>нам</td><td class='ru'>на'ми</td><td class='ru'>о нас</td></tr>
<tr><td class='ru'>вы</td><td class='ru'>вас</td><td class='ru'>вам</td><td class='ru'>ва'ми</td><td class='ru'>о вас</td></tr>
<tr><td class='ru'>они'</td><td class='ru'>их</td><td class='ru'>им</td><td class='ru'>и'ми</td><td class='ru'>о них</td></tr></table>
<h3>Le н- après préposition</h3>
<p>Après une préposition, les pronoms de la 3ᵉ personne prennent un н : ${r("у него'")}, ${r("к ней")}, ${r("с ни'ми")}. Mais pas les possessifs : ${r("у его' бра'та")} (chez son frère).</p>
<h3>Свой : son propre</h3>
<p>Quand le possesseur est le sujet de la phrase, on emploie ${r("свой")} : ${r("Он лю'бит свою' жену'")} (sa propre femme) ≠ ${r("Он лю'бит его' жену'")} (la femme d’un autre !).</p>`
  },
  {
    id: "present", level: "A1", title: "Le présent", ru: "Настоящее время",
    html: `
<table class='gram'><tr><th></th><th>1ʳᵉ conj. (чита'ть)</th><th>2ᵉ conj. (говори'ть)</th></tr>
<tr><td class='ru'>я</td><td class='ru'>чита'ю</td><td class='ru'>говорю'</td></tr>
<tr><td class='ru'>ты</td><td class='ru'>чита'ешь</td><td class='ru'>говори'шь</td></tr>
<tr><td class='ru'>он / она'</td><td class='ru'>чита'ет</td><td class='ru'>говори'т</td></tr>
<tr><td class='ru'>мы</td><td class='ru'>чита'ем</td><td class='ru'>говори'м</td></tr>
<tr><td class='ru'>вы</td><td class='ru'>чита'ете</td><td class='ru'>говори'те</td></tr>
<tr><td class='ru'>они'</td><td class='ru'>чита'ют</td><td class='ru'>говоря'т</td></tr></table>
<p>Accentué, le е de la 1ʳᵉ conjugaison devient ё : ${r("живёшь, идёт")}.</p>
<h3>Verbes en -ся</h3>
<p>On ajoute ${r("-ся")} après consonne, ${r("-сь")} après voyelle : ${r("я учу'сь, ты у'чишься, они' у'чатся")}. Ils expriment souvent le réfléchi ou le réciproque : ${r("мы встреча'емся")} (nous nous retrouvons).</p>
<h3>Irréguliers à connaître par cœur</h3>
<table class='gram'><tr><th>verbe</th><th>я</th><th>ты</th><th>они'</th></tr>
<tr><td class='ru'>хоте'ть</td><td class='ru'>хочу'</td><td class='ru'>хо'чешь</td><td class='ru'>хотя'т</td></tr>
<tr><td class='ru'>мочь</td><td class='ru'>могу'</td><td class='ru'>мо'жешь</td><td class='ru'>мо'гут</td></tr>
<tr><td class='ru'>есть</td><td class='ru'>ем</td><td class='ru'>ешь</td><td class='ru'>едя'т</td></tr>
<tr><td class='ru'>дать</td><td class='ru'>дам</td><td class='ru'>дашь</td><td class='ru'>даду'т</td></tr>
<tr><td class='ru'>жить</td><td class='ru'>живу'</td><td class='ru'>живёшь</td><td class='ru'>живу'т</td></tr>
<tr><td class='ru'>идти'</td><td class='ru'>иду'</td><td class='ru'>идёшь</td><td class='ru'>иду'т</td></tr>
<tr><td class='ru'>писа'ть</td><td class='ru'>пишу'</td><td class='ru'>пи'шешь</td><td class='ru'>пи'шут</td></tr>
<tr><td class='ru'>брать</td><td class='ru'>беру'</td><td class='ru'>берёшь</td><td class='ru'>беру'т</td></tr></table>`
  },
  {
    id: "passe-futur", level: "A2", title: "Le passé et le futur", ru: "Прошедшее и будущее",
    html: `
<h3>Le passé</h3>
<p>Un seul passé, accordé en genre et nombre : ${r("-л, -ла, -ло, -ли")}. L’aspect remplace la différence imparfait / passé composé : ${r("я чита'л")} (je lisais, j’ai lu un moment) · ${r("я прочита'л")} (j’ai lu en entier).</p>
<p>Irréguliers : ${r("идти' → шёл, шла")} · ${r("мочь → мог, могла'")} · ${r("нести' → нёс, несла'")} · ${r("умере'ть → у'мер, умерла'")}.</p>
<h3>Le futur</h3>
<table class='gram'><tr><th>imperfectif : быть + infinitif</th><th>perfectif : forme conjuguée</th></tr>
<tr><td>${r("я бу'ду писа'ть")} — je vais écrire (processus)</td><td>${r("я напишу'")} — j’écrirai (résultat)</td></tr>
<tr><td>${r("мы бу'дем рабо'тать")}</td><td>${r("мы сде'лаем")}</td></tr></table>
<h3>Pour passer du français au russe</h3>
<p>Imparfait → presque toujours imperfectif. Passé composé → souvent perfectif. Futur proche (« je vais faire ») → selon que tu insistes sur le processus ou le résultat.</p>`
  },
  {
    id: "aspects", level: "A2", title: "Les aspects verbaux", ru: "Вид глагола",
    html: `
<p>C’est LE point clé du verbe russe. Chaque action se dit avec un verbe <b>imperfectif</b> (НСВ) ou <b>perfectif</b> (СВ).</p>
<table class='gram'><tr><th>Imperfectif</th><th>Perfectif</th></tr>
<tr><td>processus, durée</td><td>résultat, achèvement</td></tr>
<tr><td>habitude, répétition</td><td>action unique</td></tr>
<tr><td>présent, passé, futur composé</td><td>passé et futur simple seulement</td></tr>
<tr><td>${r("Я до'лго писа'л письмо'")}</td><td>${r("Я написа'л письмо'")}</td></tr></table>
<h3>Comment se forment les paires</h3>
<ul><li>Préfixe : ${r("де'лать → сде'лать")}, ${r("писа'ть → написа'ть")}, ${r("чита'ть → прочита'ть")}</li>
<li>Suffixe : ${r("реша'ть → реши'ть")}, ${r("покупа'ть → купи'ть")}, ${r("открыва'ть → откры'ть")}</li>
<li>Verbe différent : ${r("говори'ть → сказа'ть")}, ${r("брать → взять")}, ${r("класть → положи'ть")}</li></ul>
<h3>Les cas où l’imperfectif est obligatoire</h3>
<p>Après ${r("начина'ть, конча'ть, продолжа'ть")} (commencer, finir, continuer) · après ${r("не на'до")} (pas la peine) · pour l’habitude (${r("ка'ждый день")}).</p>
<h3>Et à l’impératif ?</h3>
<p>Imperfectif = invitation polie ou encouragement : ${r("Проходи'те, сади'тесь!")} (Entrez, asseyez-vous). Perfectif = demande précise : ${r("Закро'йте дверь, пожа'луйста")}. À la négation, presque toujours imperfectif : ${r("Не звони'!")}</p>`
  },
  {
    id: "mouvement", level: "A2", title: "Les verbes de mouvement", ru: "Глаголы движения",
    html: `
<p>Le russe distingue la manière de se déplacer et le type de trajet.</p>
<table class='gram'><tr><th>sens</th><th>unidirectionnel</th><th>multidirectionnel</th></tr>
<tr><td>aller à pied</td><td class='ru'>идти'</td><td class='ru'>ходи'ть</td></tr>
<tr><td>aller en véhicule</td><td class='ru'>е'хать</td><td class='ru'>е'здить</td></tr>
<tr><td>courir</td><td class='ru'>бежа'ть</td><td class='ru'>бе'гать</td></tr>
<tr><td>voler</td><td class='ru'>лете'ть</td><td class='ru'>лета'ть</td></tr>
<tr><td>nager</td><td class='ru'>плыть</td><td class='ru'>пла'вать</td></tr>
<tr><td>porter (à pied)</td><td class='ru'>нести'</td><td class='ru'>носи'ть</td></tr>
<tr><td>mener, conduire</td><td class='ru'>вести'</td><td class='ru'>води'ть</td></tr>
<tr><td>transporter</td><td class='ru'>везти'</td><td class='ru'>вози'ть</td></tr></table>
<h3>Unidirectionnel</h3><p>Un seul trajet vers un but, en cours : ${r("Я иду' домо'й")} (je rentre à la maison, là).</p>
<h3>Multidirectionnel</h3><p>Habitude, aller-retour, mouvement sans but, capacité : ${r("Я хожу' в шко'лу")} · ${r("Вчера' я ходи'л в кино'")} · ${r("Ребёнок уже' хо'дит")} (marche déjà).</p>
<h3>Avec préfixes (B1)</h3>
<table class='gram'><tr><th>préfixe</th><th>sens</th><th>perfectif / imperfectif</th></tr>
<tr><td>при-</td><td>arriver</td><td class='ru'>прийти' / приходи'ть</td></tr>
<tr><td>у-</td><td>partir</td><td class='ru'>уйти' / уходи'ть</td></tr>
<tr><td>в(о)-</td><td>entrer</td><td class='ru'>войти' / входи'ть</td></tr>
<tr><td>вы-</td><td>sortir</td><td class='ru'>вы'йти / выходи'ть</td></tr>
<tr><td>пере-</td><td>traverser</td><td class='ru'>перейти' / переходи'ть</td></tr>
<tr><td>про-</td><td>passer devant</td><td class='ru'>пройти' / проходи'ть</td></tr>
<tr><td>за-</td><td>passer chez</td><td class='ru'>зайти' / заходи'ть</td></tr>
<tr><td>под-</td><td>s’approcher</td><td class='ru'>подойти' / подходи'ть</td></tr>
<tr><td>от-</td><td>s’éloigner</td><td class='ru'>отойти' / отходи'ть</td></tr>
<tr><td>об-</td><td>contourner</td><td class='ru'>обойти' / обходи'ть</td></tr></table>`
  },
  {
    id: "nombres", level: "A2", title: "Les nombres et l’accord", ru: "Числительные",
    html: `
<h3>Le nom change après le nombre</h3>
<table class='gram'><tr><th>nombre</th><th>forme du nom</th><th>exemple</th></tr>
<tr><td>1, 21, 31… (sauf 11)</td><td>nominatif singulier</td><td>${r("оди'н рубль")}</td></tr>
<tr><td>2, 3, 4, 22… (sauf 12-14)</td><td>génitif singulier</td><td>${r("два рубля'")}</td></tr>
<tr><td>5-20, 25…, 0</td><td>génitif pluriel</td><td>${r("пять рубле'й")}</td></tr></table>
<p>C’est le <b>dernier chiffre</b> qui compte : 101 ${r("год")}, 102 ${r("го'да")}, 111 ${r("лет")}.</p>
<h3>Genre de 1 et 2</h3>
<p>${r("оди'н стол, одна' кни'га, одно' окно'")} · ${r("два стола'")} mais ${r("две кни'ги")}.</p>
<h3>Les ordinaux</h3>
<p>Ils se déclinent comme des adjectifs : ${r("пе'рвый, второ'й, тре'тий, четвёртый, пя'тый")}. Les dates : ${r("пе'рвое ма'я")} (le 1ᵉʳ mai, neutre + génitif du mois).</p>
<h3>Les centaines utiles</h3>
<p>${r("сто")} 100 · ${r("две'сти")} 200 · ${r("три'ста")} 300 · ${r("пятьсо'т")} 500 · ${r("ты'сяча")} 1 000 · ${r("миллио'н")}.</p>`
  },
  {
    id: "imperatif-conditionnel", level: "B1", title: "Impératif et conditionnel", ru: "Повелительное наклонение",
    html: `
<h3>Former l’impératif</h3>
<table class='gram'><tr><th>radical (они')</th><th>règle</th><th>ты / вы</th></tr>
<tr><td>чита'-ют</td><td>après voyelle → -й</td><td class='ru'>чита'й / чита'йте</td></tr>
<tr><td>говор-я'т</td><td>accent sur la terminaison → -и</td><td class='ru'>говори' / говори'те</td></tr>
<tr><td>встан-ут</td><td>accent sur le radical → -ь</td><td class='ru'>встань / вста'ньте</td></tr></table>
<p>Irréguliers : ${r("дать → дай")}, ${r("есть → ешь")}, ${r("пить → пей")}, ${r("е'хать → поезжа'й")}. « Allons-y / faisons » : ${r("дава'й(те)")} + perfectif : ${r("Дава'йте начнём")}.</p>
<h3>Le conditionnel</h3>
<p>Passé + ${r("бы")} : ${r("я бы хоте'л")}, ${r("мы бы пое'хали")}. ${r("бы")} se place après le premier mot important : ${r("Я бы с удово'льствием")}.</p>
<table class='gram'><tr><th>réel (futur)</th><th>irréel (бы)</th></tr>
<tr><td>${r("Е'сли бу'дет хоро'шая пого'да, мы пойдём гуля'ть")}</td><td>${r("Е'сли бы была' хоро'шая пого'да, мы бы пошли' гуля'ть")}</td></tr></table>`
  },
  {
    id: "participes", level: "B2", title: "Participes et gérondifs", ru: "Причастия",
    html: `
<p>Indispensables pour comprendre la presse, les documents, la littérature. À l’oral, on les remplace souvent par ${r("кото'рый")}.</p>
<table class='gram'><tr><th>forme</th><th>formation</th><th>exemple</th></tr>
<tr><td>Actif présent</td><td>они' sans -т + -щий</td><td>${r("чита'ющий")} qui lit</td></tr>
<tr><td>Actif passé</td><td>passé sans -л + -вший</td><td>${r("прочита'вший")} qui a lu</td></tr>
<tr><td>Passif présent</td><td>мы + -ый</td><td>${r("чита'емый")} qu’on lit</td></tr>
<tr><td>Passif passé</td><td>-нный / -тый</td><td>${r("прочи'танный")} lu</td></tr>
<tr><td>Passif court</td><td>-н, -на, -но, -ны</td><td>${r("Кни'га прочи'тана")}</td></tr>
<tr><td>Gérondif imperf.</td><td>radical + -я / -а</td><td>${r("чита'я")} en lisant</td></tr>
<tr><td>Gérondif perf.</td><td>radical + -в / -вшись</td><td>${r("прочита'в")} après avoir lu</td></tr></table>
<h3>Transformer</h3>
<p>${r("Челове'к, кото'рый сиди'т у окна'")} = ${r("челове'к, сидя'щий у окна'")}.<br>
${r("Когда' он верну'лся домо'й, он позвони'л")} = ${r("Верну'вшись домо'й, он позвони'л")}.</p>`
  },
  {
    id: "ordre", level: "B1", title: "Ordre des mots et intonation", ru: "Порядок слов",
    html: `
<p>Grâce aux cas, l’ordre des mots est libre… mais pas sans effet : <b>l’information nouvelle va à la fin</b>.</p>
<p>${r("Ма'ша купи'ла кни'гу")} — Macha a acheté <i>un livre</i> (réponse à « qu’a-t-elle acheté ? »).<br>
${r("Кни'гу купи'ла Ма'ша")} — c’est <i>Macha</i> qui a acheté le livre.</p>
<h3>Les cinq intonations de base (ИК)</h3>
<table class='gram'><tr><th>type</th><th>usage</th><th>exemple</th></tr>
<tr><td>ИК-1</td><td>affirmation, voix qui descend</td><td>${r("Э'то мой брат.")}</td></tr>
<tr><td>ИК-2</td><td>question avec mot interrogatif, accent fort</td><td>${r("Где ты живёшь?")}</td></tr>
<tr><td>ИК-3</td><td>question oui/non, montée brusque</td><td>${r("Ты до'ма?")}</td></tr>
<tr><td>ИК-4</td><td>« et… ? », voix qui monte en fin</td><td>${r("А ты?")}</td></tr>
<tr><td>ИК-5</td><td>exclamation admirative</td><td>${r("Кака'я краси'вая семья'!")}</td></tr></table>
<p>Une bonne intonation compte autant que les déclinaisons pour sonner naturel. Écoute et imite les dialogues de l’appli en exagérant.</p>`
  }
];
