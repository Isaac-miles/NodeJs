
const express = require('express');
const {log} = console;

let PORT = 4000;
const app = express();

app.use('/', (req,res,next)=>{
    log('in the second middleware')
    res.send('<h1>Hello</h1>');
})
app.use('/add-products', (req,res,next)=>{
    log('in the second middleware')
    res.send('<body><form action="/products" method="POST"><input type="text" name="product"/><button type="submit">send</button></form></body>');
})
app.use('/product',(req,res,next)=>{
    res.redirect('/')
})
app.listen(PORT,()=>`server running on port ${PORT}`);