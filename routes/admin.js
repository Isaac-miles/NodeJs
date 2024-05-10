const path = require('path');
const Router = require('express').Router();
const adminController =require('../controllers/admin');

Router.get('/add-product',adminController.getAddProduct);

Router.post('/add-product',adminController.postAddProduct);

Router.get('/products',adminController.getProducts);

Router.get('/edit-product/:productId',adminController.getEditProduct);


module.exports = Router;