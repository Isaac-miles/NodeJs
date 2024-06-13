const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb+srv://exploreNode:exploreNode @cluster0.hp6xb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(result=>{
            console.log("Connection Established");
        })
        .catch(err=>console.log(err));