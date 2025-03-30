// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/book', customerController.bookWorker);
router.get('/status/:referenceCode', customerController.checkStatus);

module.exports = router;
