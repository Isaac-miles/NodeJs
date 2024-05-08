const path = require('path');
const router = require('express').Router();
const productController =require('../controllers/products')


const products =[];
router.get('/add-product',productController.getAddProducts);

router.post('/add-product',productController.postAddProduct);

exports.routes = router;
exports.products = products;