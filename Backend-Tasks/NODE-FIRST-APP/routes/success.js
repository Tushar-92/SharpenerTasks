const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /contactus => GET
router.get('/success', (req, res, next) => {
  res.send('<h1>Form successfuly filled</h1>');
});

module.exports = router;
