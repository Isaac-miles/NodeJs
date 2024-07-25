const path = require('path');
const Router = require('express').Router();

const shopController =require('../controllers/shop')



Router.get('/',shopController.getIndex);

Router.get('/products',shopController.getProducts);

Router.get('/products/:productId',shopController.getProductDetails);

Router.get('/cart',shopController.getCart);

Router.post('/cart',shopController.addToCart);

// Router.get('/orders',shopController.getOrders);

// Router.post('/cart-delete-item',shopController.deleteCartItem);

// Router.post('/create-order',shopController.postOrder);

module.exports = Router; 