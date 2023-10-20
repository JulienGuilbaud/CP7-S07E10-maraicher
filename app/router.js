import express from 'express';
import mainController from './controllers/mainController.js';
import productController from './controllers/productController.js';

const router = express.Router();

router.get('/', mainController.home);
router.get('/a-propos', mainController.about);
router.get('/produit/:slug', productController.detail);
router.get('/product/best', productController.best);
router.get('/rayon/:name', productController.category);
router.get('/rayons', productController.allCategories);

export default router;