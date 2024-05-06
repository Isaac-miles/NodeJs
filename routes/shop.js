const path = require('path');
const Router = require('express').Router();

Router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})

module.exports = Router;