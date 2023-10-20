// je vais récupérer mon client connecté à la bdd pour lui envoyer des requêtes
import client from '../database.js';

// Mission: détenir le code qui permet de préparer une réponse pour les requêtes liées aux pages produits
const productController = {

  detail: async function (req, res, next) {
    try {
      const askedSlug = req.params.slug;
      // on demande tous les produits qui ont un certain slug
      const text = `
        SELECT 
          product.*,
          category.slug AS category 
        FROM product 
        JOIN category 
          ON product.category_id = category.id 
        WHERE product.slug = $1;
      `;
      const result = await client.query(text, [askedSlug]);
      // si on en a trouvé
      if (result.rowCount > 0) {
        // on récupère toujours un tableau de résultat, ici on n'en veut qu'un, on isole donc la première valeur du tableau
        const product = result.rows[0];
        // on passe les données trouvées à la vue
        res.render('product', { product });
      }
      // sinon on dira que la page est non trouvée
      else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(500).render('error-500');
    }
  },

  category: async function(req, res, next) {
    const askedName = req.params.name;
    const categoryResult = await client.query('SELECT id, title FROM category WHERE slug = $1', [askedName]);
    if (categoryResult.rowCount > 0) {
      // const productsResult = await client.query(`
      //   SELECT product.* 
      //   FROM product 
      //   JOIN category
      //     ON category_id = category.id 
      //   WHERE category.slug = $1
      // `, [askedName]);
      const productsResult = await client.query('SELECT * FROM product WHERE category_id = $1', [categoryResult.rows[0].id]);
      res.render('list', { 
        products: productsResult.rows,
        title: categoryResult.rows[0].title, 
      });
    }
    else {
      next();
    }
  },

  best: async function(req, res) {
    try {
      const result = await client.query('SELECT * FROM product WHERE grade = 5 ORDER BY title');
      res.render('list', {
        title: 'Produits les mieux notés',
        products: result.rows,
      });
    } catch (error) {
      console.error(error);
      res.status(500).render('error-500');
    }
  },

  allCategories: async function(req, res) {
    try {
      const categoriesResult = await client.query('SELECT * FROM category ORDER BY title');
      res.render('simple-list', {
        title: 'Nos rayons',
        segmentTitle: 'Choisissez votre rayon',
        categories: categoriesResult.rows,
      });
    } catch (error) {
      console.error(error);
      res.status(500).render('error-500');
    }
  },

};

export default productController;