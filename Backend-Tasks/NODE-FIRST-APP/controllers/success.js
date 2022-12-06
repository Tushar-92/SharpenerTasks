const path = require('path');

const rootDir = require('../util/path');

//successcontroller for get method
exports.getsuccess = (req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>');
};

