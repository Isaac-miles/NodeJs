const Product = require('../models/product');
const ProductsModel = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/edit-product',
    {
        pageTitle:"add product",
        path:'/admin/add-product',
        addProduct:true
    });
}

exports.postAddProduct = (req,res,next)=>{
    const {title,imageUrl,description,price} = req.body;
    const product = new ProductsModel(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        if(!product)res.redirect('/');
        res.render('admin/edit-product',
        {
            pageTitle:"edit product",
            path:'/admin/edit-product',
            editing:editMode,
            product
        });
    })
   
}

exports.getProducts = (req,res,next)=>{
    ProductsModel.fetchAll((products)=>{
        res.render('admin/products',
        {
            pageTitle:'Admin products',
            prods:products,
            docTitle:'shop',
            path:'/admin/products',
            hasProducts:products.length>0,
            activeShop:true
        });
     });
}
