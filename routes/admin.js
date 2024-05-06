const path = require('path');
const Router = require('express').Router();

const {log} = console;
const rootDir = require('../utils/path');

Router.get('/add-product', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

Router.post('/add-product',(req,res,next)=>{
    log(req.body.product);
    res.redirect('/');
})

module.exports = Router;