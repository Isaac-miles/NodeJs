const express = require('express').Router;

const app = express();
app.use('/add-product', (req,res,next)=>{
    res.send('<body><form action="/product" method="POST"><input type="text" name="product"/><button type="submit">send</button></form></body>');
})
app.post('/product',(req,res,next)=>{
    log(req.body.product);
    res.redirect('/');
})