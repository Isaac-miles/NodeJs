const path = require('path');
const Router = require('express').Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');


Router.get('/',(req,res,next)=>{
    res.render('shop',{prods:adminData.products,docTitle:'shop'});
    // console.log("from shop", adminData.products)
    // res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = Router; 