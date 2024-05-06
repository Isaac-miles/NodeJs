const Router = require('express').Router();


Router.get('/add-product', (req,res,next)=>{
    res.send('<body><form action="/product" method="POST"><input type="text" name="product"/><button type="submit">send</button></form></body>');
})

Router.post('/product',(req,res,next)=>{
    log(req.body.product);
    res.redirect('/');
})

module.exports = Router;