
const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin');

const {log} = console;

let PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(adminRoutes);

app.use('/', (req,res,next)=>{
    res.send('<h1>Hello</h1>');
})

app.listen(PORT,()=>`server running on port ${PORT}`);