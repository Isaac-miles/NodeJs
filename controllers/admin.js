const {ObjectId} = require('mongodb');
const ProductsModel = require('../models/product');


exports.getProducts = (req,res,next)=>{
    ProductsModel.fetchAll()
        .then((products)=>{
        res.render('admin/products',
        {
            pageTitle:'Admin products',
            prods:products,
            docTitle:'shop',
            path:'/admin/products',
            hasProducts:products.length>0,
            activeShop:true
        });
     })
     .catch(err=>console.log(err));
}
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

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    if(!editMode) res.redirect('/');
    const prodId = req.params.productId;

        // req.user.getProducts({where:{id:prodId}})
        ProductsModel.findById(prodId)
        .then(product=>{
           if(!product)res.redirect('/');
        res.render('admin/edit-product',
        {
            pageTitle:"edit product",
            path:'/admin/edit-product',
            editing:editMode,
            product:product
        });
    })
    .catch(err=>console.log(err));
   
}

exports.updateProduct = (req,res,next)=>{
    const {productId,title,price,description,imageUrl} = req.body;
     const product = new ProductsModel(title,price,description,imageUrl,productId)

     product.save()
        .then(result=>res.redirect('/admin/products'))
        .catch(err=>console.log(err));
}

exports.deleteProduct =(req,res,next)=>{
    const productId = req.body.productId;
    if(!productId){
        res.status(404).send(JSON.stringify({message:"invalid product Id"}));
    }
    ProductsModel.deleteById(productId)
    .then(result=>{
        res.redirect('/admin/products')
    })
    .catch(err=>console.log(err));
}