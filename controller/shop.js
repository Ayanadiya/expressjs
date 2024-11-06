const path = require('path');

const rootdir = require('../util/path');

exports.getContactPage = (req,res,next) => {
    res.sendFile(path.join(rootdir,'views', 'contact.html'));
};

exports.postContactPage = (req, res,next) => {
    res.json({message:"Form filled Successfully"})
};

