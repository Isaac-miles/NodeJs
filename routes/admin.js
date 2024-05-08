const path = require('path');
const Router = require('express').Router();
const productController =require('../controllers/products')


Router.get('/add-product',productController.getAddProduct);

Router.post('/add-product',productController.postAddProduct);

module.exports = Router;