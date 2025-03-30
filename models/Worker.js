const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    location: String,
    profession: String,
    availableDates: [Date],
    referenceCode: { type: String, unique: true },
    status: { type: String, default: 'Available' } // Default status
});

module.exports = mongoose.model('Worker', workerSchema);
