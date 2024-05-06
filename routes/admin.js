const path = require('path');
const Router = require('express').Router();

const {log} = console;

Router.get('/add-product', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})

Router.post('/product',(req,res,next)=>{
    log(req.body.product);
    res.redirect('/');
})

module.exports = Router;