const fs = require('fs');
const path = require('path');

const products =[]
const rootDir = require('../utils/path');

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        fs.readFile(path.join(rootDir,'data','product.json'),(error,data)=>{
            let products = [];
            if(!error){
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile()
        });
    }

    static fetchAll(){
        return products;
    }
}