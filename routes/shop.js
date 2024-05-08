const path = require('path');
const Router = require('express').Router();

const shopController =require('../controllers/shop')



Router.get('/',shopController.getIndex);

Router.get('/products',shopController.getProducts);

Router.get('/cart',shopController.getCart);

Router.get('/checkout',shopController.getCheckout);

module.exports = Router; 