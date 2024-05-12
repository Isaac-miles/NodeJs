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
    constructor(id,title,imageUrl,description,price){
        this.id=id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        getProductFromFile(product=>{
            if(this.id){
                const existingProductIndex = product.findIndex(prod=>prod.id===this.id);
                const updatedProducts = [...product];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(pth,JSON.stringify(updatedProducts),err=>console.log(err));
            }else{
                this.id = Math.random().toString();
                product.push(this);
                fs.writeFile(pth,JSON.stringify(product),(err)=>{
                });
            }
          
        })}

        delete(id){
            getProductFromFile(product=>{
                const existingProduct = product.find(prod=>prod.id=== id);
                if(existingProduct){
                    const updatedProduct = product.filter(prod=>prod.id !== existingProduct.id);
                    fs.writeFile(pth,JSON.stringify(updatedProduct),err=>console.log(err));
                }else{
                    return "no product found";
                }
            })
        }
        static deleteProduct(id){
            this.delete(id);
        }

    static fetchAll(cb){
        getProductFromFile(cb);
    }
    static findById(id,cb){
        getProductFromFile(products=>{
            const product = products.find(p=>p.id==id);
            cb(product);
        });
    }
}