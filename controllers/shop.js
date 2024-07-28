const Product = require('../models/product');
const ProductsModel = require('../models/product');

exports.getIndex = (req,res,next)=>{
    Product.fetchAll()
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
    ProductsModel.fetchAll()
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
    ProductsModel.findById(requestParam)
        .then(product=>{
            res.render('shop/product-detail',
            {
                pageTitle:'Product-detail page',
                product:product,
                docTitle:'Product detail',
                path:'/products',
            })
        })
}

exports.addToCart = (req,res,next)=>{
    const productId = req.body.productId;
    ProductsModel.findById(productId)
        .then(product=>{
            return req.user.addToCart(product);
        })
        .then(result=>{
            res.redirect('/cart')

        })
        .catch(err=>console.log(err))
}
exports.getCart = (req,res,next)=>{
    req.user.getCart()
        .then(products=>{  
               res.render('shop/cart',
                {
                    pageTitle:'your cart',
                    docTitle:'shop',
                    path:'/cart',
                    products:products
                });
                })
        .catch(err=>console.log(err)) 
}

exports.postOrder= (req,res,next)=>{
        req.user.addOrder()
        .then(result=>{
            res.redirect('/orders');
        })
        .catch(err=>console.log(err));
}

exports.getOrders = (req, res, next) => {
    req.user
      .getOrders()
      .then(orders => {
        console.log("nested",JSON.stringify(orders, null, 2));
        res.render('shop/orders', {
          path: '/orders',
          pageTitle: 'Your Orders',
          orders: orders
        });
      })
      .catch(err => console.log(err));
  };


exports.deleteCartItem =(req,res,next)=>{
    const id = req.body.productId;
    req.user.deleteItemFromCart(id)
        .then(result=>{
          res.redirect('/cart')
        })
        .catch(err=>console.log(err))
}
