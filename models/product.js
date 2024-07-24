const {ObjectId} = require('mongodb');

const getDB = require('../utils/db._mongodb').getDB;

class ProductsModel {
    constructor(title,price,description,imageUrl,id){
        this.title = title;
        this.price = price;
        this.description = price;
        this.imageUrl = imageUrl;
        this._id = id;
    }

    save(){
        const db = getDB();
        let query;
        if(this._id){
            //update the product
            query = db.collection('products').updateOne({_id: createFromHexString(this._id)},{$set:this});

        }else{
            query = db.collection('products').insertOne(this)

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
}


module.exports = ProductsModel;