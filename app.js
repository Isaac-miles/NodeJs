const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const errorHandlerController = require('./controllers/errorHandlers')
const db = require('./utils/db');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products')
    .then(data=>{

    })
    .catch(err=>console.log(err));

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
app.listen(PORT,()=>`server running on port ${PORT}`);