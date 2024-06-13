const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectToMongodb =(callback)=>{
    MongoClient.connect("mongodb+srv://exploreNode:exploreNode @cluster0.hp6xb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(result=>{
        callback("Connection Established");
    })
    .catch(err=>console.log(err));
}

module.exports = connectToMongodb;