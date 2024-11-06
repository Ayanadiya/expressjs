const fs= require('fs');
const path = require('path');
 
const rootdir=require('../util/path');
const p= path.join(rootdir, 'data', 'products.json');

const getfiledata = (cb) =>{
   
    fs.readFile(p, (err,fileContent) => {
        if(err)
        {
         cb([]) ;
        }
        cb(JSON.parse(fileContent));
    })
}



const products=[];

module.exports = class Product {
    constructor(title,size)
    {
        this.title=title,
        this.size=size
    }
    save() {
        getfiledata(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products) , (err) =>{
                console.log(err);
        })
    })
}

    static fetchAll(cb) {
        getfiledata(cb);
    }
       
}