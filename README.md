# Жар-птица · Jar-Ptitsa

**L’Oiseau de feu** : une application web (PWA, hors ligne) pour apprendre le russe sur plusieurs années, de l’alphabet jusqu’au bilinguisme. Pensée pour les francophones qui veulent parler avec leurs proches, au travail et avec n’importe qui.

## Fonctionnalités
- **Parcours de 38 leçons** de A0 à C1 (alphabet, A1, A2, B1, B2, C1), chacune avec théorie, vocabulaire, dialogue audio et exercices.
- **Exercices variés** : QCM, écoute, saisie en cyrillique (clavier russe intégré), remise en ordre de phrases, prononciation au micro (Chrome / Edge).
- **Révisions espacées** (algorithme type SM-2) : chaque mot appris revient juste avant que tu ne l’oublies.
- **Alphabet interactif** : 33 lettres en 4 familles, formes imprimée et italique, quiz.
- **15 guides de grammaire** : cas, déclinaisons, aspects, verbes de mouvement, participes, intonation…
- **Conversations à embranchements** : dîner chez les parents, entretien d’embauche, appel d’un collègue, café, taxi. Les répliques maladroites sont expliquées.
- **Guide de phrases** par thème (proches, travail, quotidien, urgences…), ajoutables aux révisions.
- **Programme sur plusieurs années** : projection des dates selon ton temps quotidien, objectifs « je sais faire » par niveau pour la famille, le travail et le quotidien, routine et ressources conseillées.
- **Prononciation** : synthèse vocale russe sur chaque mot, accent tonique affiché, translittération phonétique (avec réduction des voyelles).
- Série de jours, XP, objectif quotidien, calendrier d’activité, thème sombre « nuit d’hiver » et clair « parchemin », intro animée, export / import de la progression.

## Lancer en local
Aucun build. Servir le dossier avec un serveur statique :

```
python -m http.server 8000
```

puis ouvrir http://localhost:8000.

Pour la voix : Chrome et Edge proposent des voix russes. Sous Windows, on peut aussi ajouter la voix russe dans Paramètres › Heure et langue › Voix.

## Publier sur GitHub Pages
1. Créer le dépôt sur GitHub, puis pousser ce dossier sur la branche `main`.
2. Dans le dépôt : **Settings › Pages › Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. L’appli sera disponible à `https://<ton-pseudo>.github.io/<nom-du-depot>/`, installable sur téléphone (« Ajouter à l’écran d’accueil ») et utilisable hors ligne.

## Structure
```
index.html            coquille de l’appli et intro
css/style.css         design (thèmes, composants, animations)
js/app.js             routeur et écrans
js/quiz.js            moteur d’exercices
js/store.js           progression, série, répétition espacée
js/util.js            synthèse vocale, translittération, outils
js/logo.js            logo SVG (le Ж oiseau de feu)
js/data/              contenu : programme, alphabet, leçons, grammaire, conversations, phrases
sw.js                 fonctionnement hors ligne
```

## Ajouter du contenu
Les leçons sont dans `js/data/lessons-a.js` et `lessons-b.js`. Dans le russe, une apostrophe `'` après une voyelle marque l’accent tonique (`молоко'`). Dans le français, utiliser l’apostrophe typographique `’`.

## Une remarque honnête
L’appli donne la structure, la grammaire, le vocabulaire et la prononciation. Pour devenir vraiment bilingue, il faut l’associer dès l’A1 à de vraies conversations avec des natifs, puis à l’immersion. Le programme intégré explique quoi ajouter à chaque niveau.
