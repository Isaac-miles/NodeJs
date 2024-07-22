const { where } = require('sequelize');
const ProductsModel = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/edit-product',
    {
        pageTitle:"add product",
        path:'/admin/add-product',
        addProduct:true,
        editing:false,
    });
}

exports.postAddProduct = (req,res,next)=>{
    const {title,imageUrl,description,price} = req.body;
   const product = new ProductsModel(title,price,description,imageUrl);
   product.save()
    .then(result=>{
        console.log(result);
        res.redirect('/admin/products');
    })
    .catch(err=>console.log(err));
        
}

// exports.getEditProduct = (req,res,next)=>{
//     const editMode = req.query.edit;
//     const prodId = req.params.productId;
//     if(!editMode) res.redirect('/');
//         req.user.getProducts({where:{id:prodId}})
//         .then(product=>{
//             console.log(product)
//         if(!product)res.redirect('/');
//         res.render('admin/edit-product',
//         {
//             pageTitle:"edit product",
//             path:'/admin/edit-product',
//             editing:editMode,
//             product:product[0].dataValues
//         });
//     })
//     .catch(err=>console.log(err));
   
// }

// exports.getProducts = (req,res,next)=>{
//     // ProductsModel.findAll() instead of getting all products, find the user's specific products
//     req.user.getProducts()
//         .then((products)=>{
//         res.render('admin/products',
//         {
//             pageTitle:'Admin products',
//             prods:products,
//             docTitle:'shop',
//             path:'/admin/products',
//             hasProducts:products.length>0,
//             activeShop:true
//         });
//      })
//      .catch(err=>console.log(err));
// }

// exports.updateProduct = (req,res,next)=>{
//     const {productId,title,price,description,imageUrl} = req.body;
//     ProductsModel.findByPk(productId)
//         .then(product=>{
//             product.title =title;
//             product.price = price;
//             product.description = description;
//             product.imageUrl = imageUrl;
//             return product.save();
//         })
//         .then(result=>res.redirect('/admin/products'))
//         .catch(err=>console.log(err));
// }

// exports.deleteProduct =(req,res,next)=>{
//     const productId = req.body.productId;
//     if(!productId){
//         res.status(404).send(JSON.stringify({message:"invalid product Id"}));
//     }
//     ProductsModel.findByPk(productId)
//     .then(product=>{
//         return product.destroy();
//     })
//     .then(result=>{
//         res.redirect('/admin/products')
//     })
//     .catch(err=>console.log(err));
// }