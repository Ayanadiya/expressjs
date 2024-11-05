const express = require('express');
const bodyParser =require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next) =>{
    res.send(`
        <h1>Add Product Page</h1>
        <form action="/product" method="POST">
          <label for="name">Title</label>
          <input type="text" name="title" id="name">
          <label for="size">Size</label>
          <input type="text" name="size" id="size">
          <button type="submit">Add Product</button>
        </form>
        `)
})

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    res.send('<h1>Hello from Express.js</h1>');
})

app.listen(3000);