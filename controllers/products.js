const ProductsModel = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',
    {
        pageTitle:"add-product",
        path:'/admin/add-product',
        addProduct:true
    });
}

exports.postAddProduct = (req,res,next)=>{
    products.push(new ProductsModel(req.body.title));
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.render('shopify',
    {
        pageTitle:'shopify',
        prods:products,
        docTitle:'shop',
        path:'/',
        hasProducts:products.length>0,
        activeShop:true
    });
}

