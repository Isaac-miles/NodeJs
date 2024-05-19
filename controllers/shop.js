const Product = require('../models/product');
const ProductsModel = require('../models/product');
const Cart = require('../models/cart');



exports.getIndex = (req,res,next)=>{
    Product.findAll()
        .then(products=>{
            res.render('shop/index',
            {
                pageTitle:'home page',
                prods:products,
                docTitle:'shop',
                path:'/',
                hasProducts:products.length>0,
            });
        })
        .catch(err=>console.log(err));
        
}
exports.getProducts = (req,res,next)=>{
    ProductsModel.findAll()
    .then(result=>{
        res.render('shop/product-list',{
            pageTitle:'All products',
            prods:result,
            docTitle:'shop',
            path:'/products',
            hasProducts:result.length>0,
            activeShop:true
        })
    })
    .catch(err=>console.log(err));
     }


exports.getProductDetails = (req,res,next)=>{
    const requestParam = req.params.productId;
    // ProductsModel.findAll({where:{id:requestParam}}).then().catch() another way of fetching a product
    ProductsModel.findByPk(requestParam)
        .then(product=>{
            res.render('shop/product-detail',
            {
                pageTitle:'Product-detail page',
                product:product.dataValues,
                docTitle:'Product detail',
                path:'/products',
            })
        })
}

exports.getCart = (req,res,next)=>{
    req.user.getCart()
        .then(cart=>{
            cart.getProducts()
                .then(products=>{
                    res.render('shop/cart',
                            {
                                pageTitle:'your cart',
                                docTitle:'shop',
                                path:'/cart',
                                products:products
                            });
                })
                .then(err=>console.log(err))
        })
        .catch(err=>console.log(err)) 
}
exports.addToCart = (req,res,next)=>{
    const productId = req.body.productId;
    let fetchedCart;
    req.user.getCart()
        .then(cart=>{
            fetchedCart= cart;
            return cart.getProducts({where:{id:productId}});
        })
        .then(products=>{
            let product;
            if(products.length > 0){
                product = products[0];
            }
            let newQuantity = 1;
            if(product){
                //get the quantity and change it
            }
            return ProductsModel.findByPk(productId)
                .then(product=>{
                    fetchedCart.addProduct(product,{through:{quantity:newQuantity}});
                })
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    // res.redirect('/cart');
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

exports.deleteCartItem =(req,res,next)=>{
    const id = req.body.productId;
    Product.findById(id,product=>{
      Cart.deleteProduct(id,product.price);
        res.redirect('/cart')
    })
}