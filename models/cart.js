const fs = require('fs');
const path = require('path');
const RootDIRE = require('../utils/path');

const p = path.join(
   RootDIRE,'data','cart.json'
);

module.exports = class Cart{

    static addProduct(id,productPrice){
        //fetch the previous cart
        fs.readFile(p,(err,data)=>{
            let cart = {products:[],totalPrice:0};
            if(!err){
                cart = JSON.parse(data);
            }

        //Analyze the cart => find existing product
        const existingProductIndex = cart.products.findIndex(prod=>prod.id===id);
        const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            if(existingProduct){
                updatedProduct={...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = {id:id,qty:1};
                cart.products = [...cart.products, updatedProduct]

            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>console.log(err));
        });
      

        //Add new product increase quantity
    }
    static deleteProduct(id,productPrice){
        fs.readFile(p,(err,data)=>{
            let cart;
            if(err){
                return
            }
            cart = JSON.parse(data);
            const updatedCart = {...cart};
            const product = updatedCart.products.find(prod=>prod.id===id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod=>prod.id !== id);
            updatedCart.totalPrice -= (productPrice * productQty);
        });

    }
}