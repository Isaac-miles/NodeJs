const ProductsModel = require('../models/product');

exports.postAddProduct = (req,res,next)=>{
    const product = new ProductsModel(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',
    {
        pageTitle:"add-product",
        path:'/admin/add-product',
        addProduct:true
    });
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
