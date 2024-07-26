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
       let updatedCartItems = this.cart ? [...this.cart.items]: []

       if(existingProductIndex >=0){
           newQuantity = this.cart.items[existingProductIndex].quantity + 1
           updatedCartItems[existingProductIndex].quantity = newQuantity;
       }else{
           updatedCartItems.push({productId:product._id, quantity:newQuantity})
       }

       const updatedCart = {items:updatedCartItems};
       return db.collection('users').updateOne({_id:this._id},{$set:{cart:updatedCart}});
   }

   getCart(){
    const db = getDB();
    const productIds = this.cart? this.cart.items.map(i=>{
        return i.productId
    }):null

    if(!productIds){
        return new Promise((resolve, reject)=>resolve([]))
    } else{
        return db.collection('products').find({_id:{$in:productIds}})
        .toArray()
        .then(products=>{
            //get the products from database
            return products.map(p=>{
                //transform the data to attach each product quantity
                return {...p, quantity:this.cart.items.find(item=>{
                   return item.productId.toString() == p._id.toString();
                }).quantity}
            })
        }).catch(err=>console.log(err))
    }

   }

   deleteItemFromCart(productId){
    const db=getDB();
    const updatedCartItems = this.cart.items.filter(item=>{
        return item.productId.toString() != productId.toString()
    });

    const updatedCart = {items:updatedCartItems};
    return db.collection('users').updateOne({_id:this._id},{$set:{cart:updatedCart}});
   }

   addOrder(){
    const db = getDB();
    db.collection('orders').insertOne(this.cart).then(result=>{
        this.cart = {items:[]};
        return db.collection('users')
        .updateOne({_id:this._id},{$set:{cart:{items:[]}}})
    })
   }
}


module.exports = UserModel;