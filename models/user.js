const {ObjectId} = require('mongodb');
const getDB = require('../utils/db._mongodb').getDB;
class UserModel {
    constructor(username, email){
        this.name = username
        this.email = email
    }

    save(){
        let db = getDB();

        if(db){
            db.collections('users').insertOne(this)
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }else{
            console.log('user collections not found...')
        }
    }

    static findById(id){
        const db= getDB();
        if(db){
            db.collection('users').findOne({_id:ObjectId.createFromHexString(id)})
            .then(result=>{
                return result
            })
            .catch(err=>console.log(err))
        }else{
            console.log("failed to establish connection to the data base")
        }
    }
}


module.exports = UserModel;