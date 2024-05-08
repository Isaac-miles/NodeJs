const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');
let pth = path.join(rootDir,'data','product.json');

const getProductFromFile = (cb)=>{
    fs.readFile(pth,(err,data)=>{
        if(err){
           return cb([]);
        }
        cb(JSON.parse(data));
    });
}
module.exports = class Product{
    constructor(title,imageUrl,description,price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        getProductFromFile(product=>{
            product.push(this);
            fs.writeFile(pth,JSON.stringify(product),(err)=>{
            });
        })}

    static fetchAll(cb){
        getProductFromFile(cb);
    }
}