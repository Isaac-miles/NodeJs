exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',
    {pageTitle:"add-product",
     path:'/admin/add-product',
     addProduct:true});
}

exports.postAddProduct = (req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
}