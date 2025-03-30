const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    dates: [Date],
    aadhar: { type: String, required: true }, // Remove `unique: true` if duplicates are allowed
    location: String,
    mobile: String,
    workType: String, // Added workType field
    referenceCode: { type: String, unique: true },
    assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Customer', customerSchema);
