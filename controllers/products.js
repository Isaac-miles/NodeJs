exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',
    {pageTitle:"add-product",
     path:'/admin/add-product',
     addProduct:true});
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
}