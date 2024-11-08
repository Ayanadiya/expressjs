const express = require('express');
const bodyParser =require('body-parser');
const path=require('path')

const app = express();

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const errorController = require('./controller/error');

const rootdir=require('./util/path')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootdir,'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use(errorController.getError);

app.listen(3000);