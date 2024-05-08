const path = require('path');
const router = require('express').Router();
const getAddProducts =require('../controllers/products').getAddProduct
const postAddProducts =require('../controllers/products').postAddProduct

const products =[];
router.get('/add-product',getAddProducts)

router.post('/add-product',)

exports.routes = router;
exports.products = products;