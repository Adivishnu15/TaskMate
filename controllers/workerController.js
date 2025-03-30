// controllers/workerController.js
const Worker = require('../models/Worker');

exports.registerWorker = async (req, res) => {
    try {
        const { name, phone, location, profession, availableDates } = req.body;
        const referenceCode = 'W' + Math.random().toString(36).substring(2, 8).toUpperCase();
        
        const worker = new Worker({
            name,
            phone,
            location,
            profession,
            availableDates,
            referenceCode
        });
        
        await worker.save();
        res.json({ success: true, referenceCode });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.checkWorkerStatus = async (req, res) => {
    try {
        const { referenceCode } = req.params;
        const worker = await Worker.findOne({ referenceCode });

        if (!worker) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }

        res.json({ success: true, status: worker.status });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
