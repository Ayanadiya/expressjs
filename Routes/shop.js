const express = require('express');
const path= require('path');

const rootdir = require('../util/path');

const router= express.Router();

router.get('/contactus', (req,res,next) => {
    res.sendFile(path.join(rootdir,'views', 'contact.html'));
})

router.post('/success', (req, res,next) => {
    res.json({message:"Form filled Successfully"})
})

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootdir,'views','shop.html'));
});

module.exports=router;