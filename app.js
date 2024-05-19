const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorHandlerController = require('./controllers/errorHandlers')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./utils/db');
const ProductsModel = require('./models/product');
const UserModel = require('./models/user');

let PORT = 4000;
const app = express();

//for ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//you can add a filter to this base url
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(errorHandlerController.get404);

// sequelize.sync()
//  .then(result=>{
//     // console.log(result);
// app.listen(PORT,()=>`server running on port ${PORT}`);

//  }).catch(err=>console.log(err));
 
 async function connectToDataBase(){
    ProductsModel.belongsTo(UserModel,{constraints:true, onDelete:'CASCADE' });
    UserModel.hasMany(ProductsModel);
    
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.sync()
          .then(result=>{
            // console.log(result);
            app.listen(PORT,()=>`server running on port ${PORT}`);

          }).catch(err=>console.log(err));

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  connectToDataBase();