
const bodyParser = require('body-parser');
const express = require('express');
const {log} = console;

let PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product', (req,res,next)=>{
    res.send('<body><form action="/product" method="POST"><input type="text" name="product"/><button type="submit">send</button></form></body>');
})
app.post('/product',(req,res,next)=>{
    log(req.body.product);
    res.redirect('/');
})
app.use('/', (req,res,next)=>{
    res.send('<h1>Hello</h1>');
})

app.listen(PORT,()=>`server running on port ${PORT}`);