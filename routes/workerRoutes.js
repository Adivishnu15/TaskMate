const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');

router.post('/register', workerController.registerWorker);
router.get('/status/:referenceCode', workerController.checkWorkerStatus); // New route

module.exports = router;
