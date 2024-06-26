const getDB = require('../utils/db._mongodb');
class Product {
    constructor(title,price,description,imageUrl){
        this.title = title;
        this.price = price;
        this.description = price;
        this.imageUrl = imageUrl;
    }

    save(){

    }
}



const ProductsModel = sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:DataTypes.STRING,
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    imageUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = ProductsModel;

// for core mysql queries
// module.exports = class Product{
//     constructor(id,title,imageUrl,description,price){
//         this.id=id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save(){
//        return db.execute('INSERT INTO products (title,price,imageUrl,description) VALUES (?, ?, ?, ?)',[this.title,this.price,this.imageUrl,this.description]);
//     }    
            
//        static deleteProduct(id){
            
//         }
      
//     static fetchAll(){
//       return db.execute('SELECT * FROM products');
        
//     }
//     static findById(id){
//        return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
//     }
// }