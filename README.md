# Chouette Maraîcher

Cette fois ci l'object va être de supprimer le fichier data.js et de requêter une base de données.

## Exercice

Modifier la page `/rayons`

Pour faire en sorte de ne plus utiliser le fichier de data

Mais à la place faire une requête à la bdd pour selectionner toutes les catégories

1. Trouver la méthode de controller associée à la route `/rayons`
2. Importer le module `client`
3. Utiliser la méthode `query` pour executer la bonne requête SQL qui permet de selectionner toutes les categories par ordre alphabétique de préférence
4. Passer les lignes de résultat à la vue (attention à bien attendre le résultat dans une fonciton asynchrone)
5. Gérer les erreurs eventuelles avec un block try/catch

## Exercices suite

### A - Pour bien refaire la nouveauté du jour

Modifier la page `/product/best` pour faire en sorte de ne plus utiliser le fichier de data  mais interroger à la place la bdd.

### B - Pour prendre de l'avance pour demain

Modifier les 2 routes paramétrées (`/produit/:slug`, `/rayon/:name`) (déjà 1 puis éventuellement l'autre) pour ne plus utiliser le fichier de data mais interroger à la place la bdd.

Il faudra sans doute jeter un oeil à la doc [à ce niveau là](https://node-postgres.com/features/queries#parameterized-query)

