const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.send(`
        <h1>Add Product Page</h1>
        <form action="/admin/add-product" method="POST">
          <label for="name">Title</label>
          <input type="text" name="title" id="name">
          <label for="size">Size</label>
          <input type="text" name="size" id="size">
          <button type="submit">Add Product</button>
        </form>
        `)
});

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;