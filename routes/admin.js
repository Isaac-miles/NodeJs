const path = require('path');
const Router = require('express').Router();
const adminController =require('../controllers/admin');

Router.get('/add-product',adminController.getAddProduct);

Router.get('/products',adminController.getProducts);

module.exports = Router;