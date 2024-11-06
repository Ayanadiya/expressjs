const path = require('path');

const rootdir = require('../util/path');

const Product= require('../Models/product');

exports.getAddProduct = (req,res,next) =>{
    res.sendFile(path.join(rootdir,'views','add-product.html'));
};

exports.postAddProduct = (req,res,next) => {
    const product= new Product(req.body.title,req.body.size);
    product.save();
    res.sendFile(path.join(rootdir,'views','shop.html'));
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => console.log(products));
    res.sendFile(path.join(rootdir,'views','shop.html'));
};