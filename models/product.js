const getDB = require('../utils/db._mongodb');
class ProductsModel {
    constructor(title,price,description,imageUrl){
        this.title = title;
        this.price = price;
        this.description = price;
        this.imageUrl = imageUrl;
    }

    save(){
        const db = getDB();
        return db.collection('products').insertOne(this)
            .then(result=>{
                console.log(result)
            })
            .catch(err=>console.log(err))
    }
}


module.exports = ProductsModel;