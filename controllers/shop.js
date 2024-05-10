const Product = require('../models/product');
const ProductsModel = require('../models/product');

exports.getProducts = (req,res,next)=>{
     ProductsModel.fetchAll((products)=>{
        res.render('shop/product-list',
        {
            pageTitle:'All products',
            prods:products,
            docTitle:'shop',
            path:'/products',
            hasProducts:products.length>0,
            activeShop:true
        });
     });
}

exports.getProductDetails = (req,res,next)=>{
    const requestParam = req.params.productId;
    ProductsModel.findById(requestParam,product=>{

    });
    res.redirect('/');

    // ProductsModel.fetchAll((products)=>{
    //     res.render('shop/product-detail',
    //     {
    //         pageTitle:'Product-detail page',
    //         prods:products,
    //         docTitle:'Product detail',
    //         path:'/product-detail',
    //         hasProducts:products.length>0,
    //     })
    // });
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
        docTitle:'shop',
        path:'/cart',
    });
}
exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',
    {
        pageTitle:'your orders',
        docTitle:'shop',
        path:'/orders',
    });
}
exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkout',
    {
        pageTitle:'checkout',
        docTitle:'shop',
        path:'/checkout',
    });
}
