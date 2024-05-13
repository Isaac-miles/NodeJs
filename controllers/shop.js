const Product = require('../models/product');
const ProductsModel = require('../models/product');
const Cart = require('../models/cart');

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
        res.render('shop/product-detail',
            {
                pageTitle:'Product-detail page',
                product:product,
                docTitle:'Product detail',
                path:'/products',
            })
    });
    // res.redirect('/');
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
    Cart.getCart(cart=>{
        res.render('shop/cart',
        {
            pageTitle:'your cart',
            docTitle:'shop',
            path:'/cart',
        });
    })
 
}
exports.addToCart = (req,res,next)=>{
    const productId = req.body.productId;
    Product.findById(productId, product =>{
        Cart.addProduct(productId,product.price);
    });
    res.redirect('/cart');
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
