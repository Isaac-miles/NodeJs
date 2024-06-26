const Product = require('../models/product');
const ProductsModel = require('../models/product');
const Cart = require('../models/cart');



exports.getIndex = (req,res,next)=>{
    ProductsModel.fetchAll()
    .then(([rows,fieldData])=>{
        console.log("fd",fieldData)
        res.render('shop/index',
        {
            pageTitle:'home page',
            prods:rows,
            docTitle:'shop',
            path:'/',
            hasProducts:rows.length>0,
        });

    })
    .catch(err=>{
        console.log(err);
    })
        
}
exports.getProducts = (req,res,next)=>{
     ProductsModel.fetchAll()
        .then(([rows])=>{
            res.render('shop/product-list',
            {
                pageTitle:'All products',
                prods:rows,
                docTitle:'shop',
                path:'/products',
                hasProducts:rows.length>0,
                activeShop:true
            });
        })
        .catch(err=>console.log(err));
   
     }


exports.getProductDetails = (req,res,next)=>{
    const requestParam = req.params.productId;
    ProductsModel.findById(requestParam)
        .then(([result])=>{
            if(result){
                res.render('shop/product-detail',
                {
                    pageTitle:'Product-detail page',
                    product:result[0],
                    docTitle:'Product detail',
                    path:'/products',
                })
            }else{
                
            }
         
        })
        .catch(err=>console.log(err));
    // res.redirect('/');
}

exports.getCart = (req,res,next)=>{
    Cart.getCart(cart=>{
        Product.fetchAll(products =>{
        const cartProducts =[];
            for(let product of products){
                const cartProductData = cart.products.find(prod=>prod.id=== product.id);
                if(cartProductData){
                    cartProducts.push({productData:product,qty:cartProductData.qty});
                }
            }
            res.render('shop/cart',
            {
                pageTitle:'your cart',
                docTitle:'shop',
                path:'/cart',
                products:cartProducts
            });
        });
     
    });
 
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

exports.deleteCartItem =(req,res,next)=>{
    const id = req.body.productId;
    Product.findById(id,product=>{
      Cart.deleteProduct(id,product.price);
        res.redirect('/cart')
    })
}