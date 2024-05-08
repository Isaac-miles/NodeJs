const fs = require('fs');
const path = require('path');

const products =[]
const rootDir = require('../utils/path');

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        let pth =path.join(rootDir,'data','product.json');
        fs.readFile(pth,(error,data)=>{
            let products = [];
            console.log(error);
            if(!error){
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(pth,JSON.stringify(products),(err)=>{
                console.log(error)
            });
        });
    }

    static fetchAll(){
        return products;
    }
}