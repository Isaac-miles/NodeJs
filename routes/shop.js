const Router = require('express').Router();

Router.get('/',(req,res,next)=>{
    res.send('<h1>Hello</h1>');
})

module.exports = Router;