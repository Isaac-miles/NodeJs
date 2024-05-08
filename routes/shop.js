const path = require('path');
const Router = require('express').Router();

const productController =require('../controllers/products')



Router.get('/',productController.getProducts);

Router.get('/products',productController);

Router.get('/cart',productController);

Router.get('/checkout',productController);

module.exports = Router; 