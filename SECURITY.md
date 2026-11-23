# Sécurité

## Signaler une faille
Merci de **ne pas ouvrir d’issue publique**. Utilise l’onglet **Security › Report a vulnerability** du dépôt (signalement privé) et décris le problème et comment le reproduire.

## Ce que fait l’appli
- Site 100 % statique : pas de serveur, pas de compte, pas de base de données, aucune dépendance npm.
- La progression reste dans le navigateur de l’utilisateur (`localStorage`) ; rien n’est envoyé ailleurs.
- Seules ressources externes : les polices Google Fonts.
- La synthèse et la reconnaissance vocales sont celles du navigateur.

## Protections en place
- **Content Security Policy** stricte (`index.html`) : scripts uniquement depuis l’appli, aucun script en ligne, pas de plugins, pas d’envoi de formulaire.
- Tout texte dynamique est échappé avant d’être inséré dans la page.
- Les données chargées depuis le stockage ou un fichier importé sont validées par liste blanche (types, tailles, formats de date), ce qui bloque l’injection de HTML et la pollution de prototype ; import limité à 5 Mo.
- Le service worker ne met en cache que les fichiers de l’appli et les polices, et ne supprime que ses propres caches (les applis GitHub Pages d’un même compte partagent la même origine).
- Pas de référent envoyé aux sites tiers (`no-referrer`).

## Côté dépôt
- Branche `main` protégée par un ruleset (suppression et force-push interdits).
- Secret scanning et push protection activés.
- Pages servi en HTTPS uniquement.
