const {ObjectId} = require('mongodb');

const getDB = require('../utils/db._mongodb').getDB;

class ProductsModel {
    constructor(title,price,description,imageUrl,id,userId){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = id ? ObjectId.createFromHexString(id) :null;
        this.userId = userId;
    }

    save(){
        const db = getDB();
        let query;

        if (this._id) {
            // Update the product
            console.log(`Updating product with id: ${this._id}`);
            query = db.collection('products')
            .updateOne(
                { _id:this._id},
                { $set: this }
            );
        } else {
            // Insert the product
            console.log('Inserting new product');
            query = db.collection('products').insertOne(this);
        }
        return query
            .then(result=>{
                console.log(result)
            })
            .catch(err=>console.log(err))
    }

    static fetchAll(){
        const db = getDB();
        return db.collection('products')
        .find()
        .toArray()
        .then(products=>{
            return products
        })
        .catch(err=>console.log(err));
    }

    static findById(id){
        const db = getDB();
        return db.collection('products')
            .findOne({_id: ObjectId.createFromHexString(id)})
            .then(product=>{
                console.log(product)
                return product
            })
            .catch(err=>console.log(err));
    }
    static deleteById(id){
        const db = getDB();
        return db.collection('products')
        .deleteOne({_id:ObjectId.createFromHexString(id)})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
}


module.exports = ProductsModel;