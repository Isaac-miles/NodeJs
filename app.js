
const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

let PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//you can add a filter to this base url
app.use('/admin',adminRoutes);

app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).json({'message':`${req.url} does not exists`});
})
app.listen(PORT,()=>`server running on port ${PORT}`);