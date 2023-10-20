import client from './app/database.js';

// On a écarté la notation callback qui peut vite devenir illisible si on enchaine les requêtes

// client.query('SELECT * FROM category', (error, result) => {
//   console.log(result.rows);
// });

// On a préféré la notation async/await basée sur les promesses 

// 3. on peut se permettre d'attendre dans une fonction marquée async...
async function test() {
  // 2. on se place dans un block try catch pour attraper les erreurs eventuelles, ce qui permet de gérer les erreurs sans que notre programme ne s'arrête
  try {
    // 1. on attend la résultat de la promesses avec await
    const categories = await client.query('SELECT * FROM category');
    const products = await client.query('SELECT * FROM product');
    console.log(categories.rows);
    console.log(products.rows);
  } catch (error) {
    console.error("erreur :", error);
  }
}

// ... puisqu'une fonction async ne bloque pas l'execution du script quand elle est executée
test();
// c'est à dire qu'on verra ce coucou avant que l'execution de la fonction ne soit terminée
console.log('coucou');

