const express = require('express');

const productController= require('../controller/products');
const shopController= require('../controller/shop');

const router= express.Router();

router.get('/contactus', shopController.getContactPage );

router.post('/success', shopController.postContactPage);

router.get('/', productController.getProducts);

module.exports=router;