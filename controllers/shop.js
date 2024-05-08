const ProductsModel = require('../models/product');

exports.getProducts = (req,res,next)=>{
     ProductsModel.fetchAll((products)=>{
        res.render('shop/product-list',
        {
            pageTitle:'shopify',
            prods:products,
            docTitle:'shop',
            path:'/products',
            hasProducts:products.length>0,
            activeShop:true
        });
     });
}

exports.getIndex = (req,res,next)=>{
    ProductsModel.fetchAll((products)=>{
        res.render('shop/index',
        {
            pageTitle:'home page',
            prods:products,
            docTitle:'shop',
            path:'/',
            hasProducts:products.length>0,
        });
     });
}
exports.getCart = (req,res,next)=>{
    res.render('shop/cart',
    {
        pageTitle:'your cart',
        // prods:products,
        docTitle:'shop',
        path:'/cart',
        // hasProducts:products.length>0,
    });
}
exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkout',
    {
        pageTitle:'checkout',
        // prods:products,
        docTitle:'shop',
        path:'/checkout',
        // hasProducts:products.length>0,
    });
}
