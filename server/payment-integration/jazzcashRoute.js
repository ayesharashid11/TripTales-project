const express = require('express');
const router = express.Router();
const { pay } = require('./paymentController');

router.post('/pay/:id', pay);

module.exports = router;
