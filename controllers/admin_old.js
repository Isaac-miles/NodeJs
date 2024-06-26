const Product = require('../models/product');
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
    const product = new ProductsModel(null,title,imageUrl,description,price);
    product.save()
        .then(()=>res.redirect('/'))
        .catch(err=>console.log(err));
        
}

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    if(!editMode) res.redirect('/');
    Product.findById(prodId,product=>{
        if(!product)res.redirect('/');
        res.render('admin/edit-product',
        {
            pageTitle:"edit product",
            path:'/admin/edit-product',
            editing:editMode,
            product
        });
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

exports.updateProduct = (req,res,next)=>{
    const {productId,title,price,description,imageUrl} = req.body;
    const updatedProduct = new Product(productId,title,imageUrl,description,price);
    updatedProduct.save();
    // res.redirect('/admin/products');

}
exports.deleteProduct =(req,res,next)=>{
    const productId = req.body.productId;
    if(!productId){
        res.status(404).send(JSON.stringify({message:"invalid product Id"}));
    }
     Product.deleteProduct(productId, deletedProduct =>{
         if(deletedProduct){
         res.redirect('/admin/products');   
        //  res.status(200).send(JSON.stringify({message:"product deleted"}));   
         }else {
        res.status(404).send(JSON.stringify({message:"product not found"}));
     }
     });
}