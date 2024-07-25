const {ObjectId} = require('mongodb');
const getDB = require('../utils/db._mongodb').getDB;
class UserModel {
    constructor(username, email,cart,id){
        this.name = username
        this.email = email
        this.cart= cart
        this._id = id
    }

    save(){
        let db = getDB();

        if(db){
            db.collections('users').insertOne(this)
            .then(result=> result)
            .catch(err=>console.log(err))
        }else{
            console.log('user collections not found...')
        }
    }

    addToCart(product){
         const db = getDB();
        const existingProduct = this.cart?.items?.findIndex(ep=>{
            return ep.productId=== product._id;
        });

        let newQuantity = 1

        if(existingProduct >=0){
            // const updatedCartItem = existingProduct.
            console.log(existingProduct)

        }else{
            const updatedCart = {items:[{productId:product._id, quantity:1}] };
         return db.collection('users').updateOne({_id:this._id},{$set:{cart:updatedCart}})
        }
    }
    static findById(id){
        const db= getDB();
        if(db){
           return db.collection('users').findOne({_id:ObjectId.createFromHexString(id)})
           
        }else{
            console.log("failed to establish connection to the data base")
        }
    }
}


module.exports = UserModel;