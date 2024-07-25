const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectMongoDB = require('./utils/db._mongodb').connectMongoDB;
const UserModel = require('./models/user')

const errorHandlerController = require('./controllers/errorHandlers')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


let PORT = 4000;
const app = express();

//for ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    UserModel.findById("66a23123eff695d7f35a9ced")
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>console.log(err));
    next();
})

//you can add a filter to this base url
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorHandlerController.get404);

connectMongoDB(()=>{
    app.listen(PORT,()=>console.log('server running on: ', PORT));
})