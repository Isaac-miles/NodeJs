
const express = require('express');
const {log} = console;

let PORT = 4000;
const app = express();

app.use((req,res,next)=>{
    log('in the first middleware');
    next();
})
app.use((req,res,next)=>{
    log('in the second middleware')
    res.send('<h1>Hello</h1>')
})

app.listen(PORT,()=>`server running on port ${PORT}`)