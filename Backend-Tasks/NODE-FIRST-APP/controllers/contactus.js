const path = require('path');

const rootDir = require('../util/path');

//contactuscontroller for get method
exports.getcontactus = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};