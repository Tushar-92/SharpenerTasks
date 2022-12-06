const express = require('express');

const router = express.Router();

const contactuscontroller = require('../controllers/contactus');

// /contactus => GET
router.get('/contactus', contactuscontroller.getcontactus);


module.exports = router;
