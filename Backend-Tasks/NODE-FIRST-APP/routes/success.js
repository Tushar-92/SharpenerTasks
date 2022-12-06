const express = require('express');

const router = express.Router();

const successcontroller = require('../controllers/success');

// /success => GET
router.get('/success', successcontroller.getsuccess);

module.exports = router;
