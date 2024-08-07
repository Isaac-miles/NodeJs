const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const URI ='mongodb+srv://exploreNode:h3i1xfx8tS1G7GHE@cluster0.hp6xb.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
const connectMongoDB =(callback)=>{
    MongoClient.connect(URI)
    .then(client=>{
        console.log("connection Established");
        _db = client.db();
        callback();
    })
    .catch(err=>{
        console.log(err)
        throw err;
});
};

const getDB = ()=>{
    if(_db){
        return _db
    }else{
        throw new Error("No database found !");
    }
}

exports.connectMongoDB = connectMongoDB;
exports.getDB = getDB;