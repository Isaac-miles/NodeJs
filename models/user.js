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

    static findById(id){
        const db= getDB();
        if(db){
           return db.collection('users').findOne({_id:ObjectId.createFromHexString(id)})
           
        }else{
            console.log("failed to establish connection to the data base")
        }
    }


    addToCart(product){
        const db = getDB();
       const existingProductIndex = this.cart?.items.findIndex(cartProduct=>{
           return cartProduct.productId.toString() === product._id.toString();
       });

       let newQuantity = 1
       let updatedCartItems = [...this.cart.items];

       if(existingProductIndex >=0){
           // updatedCartItems = [...this.cart.items]
           newQuantity = this.cart.items[existingProductIndex].quantity + 1
           updatedCartItems[existingProductIndex].quantity = newQuantity;
       }else{
           updatedCartItems.push({productId:product._id, quantity:newQuantity})
       }

       const updatedCart = {items:updatedCartItems};
       return db.collection('users').updateOne({_id:this._id},{$set:{cart:updatedCart}})
        .toArray()
        .then(products=>{
            return products.map(p=>{
                return {...p,quantity:this.cart.items.find(i=>{
                    i.productId.toString() === p._id.toString();
                })}
            })
        })
   }

   getCart(){
    const db = getDB();
    const productIds = this.cart.items.map(i=>{
        return i.productId
    })

    return db.collection('products').find({_id:{$in:productIds}})
   }
}


module.exports = UserModel;