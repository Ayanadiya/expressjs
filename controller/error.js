const path = require('path');

const rootdir = require('../util/path');

exports.getError = (req,res,next) => {
    res.status(404).sendFile(path.join(rootdir,'views','error.html'));
}