const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorHandlerController = require('./controllers/errorHandlers')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./utils/db');
const ProductsModel = require('./models/product');
const UserModel = require('./models/user');
const CartModel = require('./models/cart');
const CartItemModel = require('./models/cart-item');
const OrderModel = require('./models/order');
const OrderItemModel = require('./models/order-item');

let PORT = 4000;
const app = express();

//for ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    UserModel.findByPk(1)
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>console.log(err));
})

//you can add a filter to this base url
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(errorHandlerController.get404);

 async function connectToDataBase(){
    ProductsModel.belongsTo(UserModel,{constraints:true, onDelete:'CASCADE' });
    UserModel.hasMany(ProductsModel);
    UserModel.hasOne(CartModel);
    CartModel.belongsTo(UserModel); //optional the above one direction is enough
    CartModel.belongsToMany(ProductsModel,{through:CartItemModel});
    ProductsModel.belongsToMany(CartModel,{through:CartItemModel});
    OrderModel.belongsTo(UserModel);
    UserModel.hasMany(OrderModel);
    OrderModel.belongsToMany(ProductsModel,{through:OrderItemModel});

    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // sequelize.sync({force:true}) // on load the app drops existing tables and create a new one
        sequelize.sync()
          .then(result=>{
            return UserModel.findByPk(1);
          })
          .then(user=>{
            if(!user){
               return UserModel.create({
                name:"Miles",
                email:"miles@test.com"
            });
            }
            return user;
          })
          .then(user=>{
            // console.log(user);
            user.createCart();
            app.listen(PORT,()=>`server running on port ${PORT}`);

          })
          .catch(err=>console.log(err));

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  connectToDataBase();