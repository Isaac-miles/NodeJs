const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const URI ='mongodb+srv://exploreNode:h3i1xfx8tS1G7GHE@cluster0.hp6xb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectToMongodb =(callback)=>{
    MongoClient.connect(URI)
    .then(result=>{
        callback(result);
    })
    .catch(err=>console.log(err));
}

module.exports = connectToMongodb;