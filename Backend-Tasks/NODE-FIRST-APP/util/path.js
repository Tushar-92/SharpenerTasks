const path = require('path');

// module.exports = path.dirname(process.mainModule.filename);  this method is outdated now

module.exports = path.dirname(require.main.filename); // ye ab chalta hai but take care of upar wala bhi