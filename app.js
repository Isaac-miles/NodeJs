const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandlerController = require('./controllers/errorHandlers')
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
const connectMongoDb = require('./utils/db._mongodb');

let PORT = 4000;
const app = express();

//for ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// app.use((req,res,next)=>{
//     UserModel.findByPk(1)
//     .then(user=>{
//         req.user = user;
//         next();
//     })
//     .catch(err=>console.log(err));
// })

//you can add a filter to this base url
// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

app.use(errorHandlerController.get404);

connectMongoDb((client)=>{
    console.log("Connection Established");
    app.listen(PORT,()=>console.log('server running on: ', PORT));
})