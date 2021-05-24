This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

L'application se lance à l'aide de la commande "npm start" une fois dans le dossier.

Elle permet :
- D'afficher 5 résultats d'une recherche youtube
- De lire au choix tous ces résultats
- D'afficher l'ensemble des vidéos dont le titre est contenu dans un fichier json
- De lire au choix toutes ces vidéos

Elle ne permet pas d'ajouter ou de retirer de vidéos à la liste sans passer par le json.

Le changement d'utilisateur n'est pas directement pris en charge, il faut pour cela remplacer la ligne 41 de "App.js" "var user = john" par "var user = mark"

L'affichage des vidéos depuis le fichier json utilise uniquement les titres, donc un changement de titre ou une autre vidéo avec le même titre pourraient poser problème. Cela est du au fait que l'affichage fonctionne via l'utilisation de la fonction "search" de l'api youtube. Il existe bien une fonction "videos" qui permet notamment de récupérer les données d'une vidéo via son id (qui est unique et non modifiable), je n'ai malheuresement pas réussi à la faire fonctionner.
