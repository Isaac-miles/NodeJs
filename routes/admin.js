const path = require('path');
const Router = require('express').Router();
const productController =require('../controllers/products')

Router.get('/add-product',productController.getAddProduct);

Router.get('/products',productController);

module.exports = Router;