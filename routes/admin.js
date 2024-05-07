const path = require('path');
const router = require('express').Router();

const {log} = console;
const rootDir = require('../utils/path');

const products =[];
router.get('/add-product', (req,res,next)=>{
    res.render('add-product',{pageTitle:"add-product"});
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.products = products;