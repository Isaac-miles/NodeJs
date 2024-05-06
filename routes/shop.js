const path = require('path');
const Router = require('express').Router();

const rootDir = require('../utils/path');

Router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = Router; 