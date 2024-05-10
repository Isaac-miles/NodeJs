import fs from 'fs';
import path from 'path';
import RootDIRE from '../utils/path';

const p = path.join(
   RootDIRE,'data','cart.json'
);

export default class Cart{

    static addProduct(id){
        //fetch the previous cart
        fs.readFile(p,(err,data)=>{
            let cart = {products:[],totalPrice:0};
            if(!err){
                cart = JSON.parse(data);
            }

        //Analyze the cart => find existing product
        const existingProduct = cart.products.find(prod=>prod.id===id);
            let updatedProduct;
            if(existingProduct){
                updatedProduct={...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
            }
        })
      

        //Add new product increase quantity
    }
}