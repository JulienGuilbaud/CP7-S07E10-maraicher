import client from '../database.js';

const mainController = {
  home: async function(req, res) {
    try {
      const result = await client.query('SELECT * FROM product ORDER BY title');
      res.render('list', { 
        products: result.rows, 
        title: 'Au Chouette Maraîcher',
      }); 
    } catch (error) {
      console.error(error);
      res.status(500).render('error-500');
    }
  },
  
  about: function(req, res) {
    res.render('about');
  },
}

export default mainController;
