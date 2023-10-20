// Je vais exporté l'objet connecté à la bdd qui me permettra d'envoyer des requêtes à la bdd
// Ainsi je vais pouvoir l'importer partout où j'ai besoin de faire une requête

// j'ai besoin du module pg qui dispose des outils pour se connecter
import pg from 'pg';
// j'ai aussi besoin du module dotenv car mes informations de connexion sont dans un fichier .env
import * as dotenv from 'dotenv';

// je m'assure de lancer la config de dotenv en premier sans quoi pg ne saura pas à quelle bdd se connecter
dotenv.config();

// on crée un objet qui disposera de la méthode pour se connecter
const client = new pg.Client();
// qu'on execute, ainsi nous voilà connecté à la bdd choisie dans notre .env
client.connect();

// on exporte l'objet connecté, ne reste plus qu'à l'importer ailleurs pour commencer à effectuer des requêtes
export default client;
