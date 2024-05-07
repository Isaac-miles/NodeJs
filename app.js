const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

let PORT = 4000;
const app = express();
app.set('view engine', 'pug'); //set the configuration for the template engine
app.set('views','views') //telling express where to find dynamic templates for pug

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//you can add a filter to this base url
app.use('/admin',adminRoutes.routes);

app.use(shopRoutes)

app.use((req,res,next)=>{
    res.render('404',{pageTitle:"Error"})
    // res.status(404).sendFile(path.join(__dirname,'views','_404.html'));
})
app.listen(PORT,()=>`server running on port ${PORT}`);