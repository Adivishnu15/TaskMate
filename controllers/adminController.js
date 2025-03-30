// controllers/adminController.js
const Customer = require('../models/Customer');

exports.assignWorker = async (req, res) => {
    try {
        const { customerRef, workerId } = req.body;
        const customer = await Customer.findOneAndUpdate(
            { referenceCode: customerRef },
            { assignedWorker: workerId, status: 'Assigned' },
            { new: true }
        );
        res.json({ success: true, customer });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};