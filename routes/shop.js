const path = require('path');
const Router = require('express').Router();

const productController =require('../controllers/products')



Router.get('/',productController.getProducts);

module.exports = Router; 