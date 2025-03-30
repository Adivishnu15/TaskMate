const Customer = require('../models/Customer');

exports.bookWorker = async (req, res) => {
    try {
        const { name, dates, aadhar, location, mobile, workType } = req.body; // Added workType
        const referenceCode = 'C' + Math.random().toString(36).substring(2, 8).toUpperCase();
        
        const customer = new Customer({
            name,
            dates,
            aadhar,
            location,
            mobile,
            workType, // Storing workType
            referenceCode
        });
        
        await customer.save();
        res.json({ success: true, referenceCode });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.checkStatus = async (req, res) => {
    try {
        const { referenceCode } = req.params;
        console.log("Received referenceCode:", referenceCode); // Debugging

        if (!referenceCode) {
            return res.status(400).json({ success: false, message: "Reference Code is required" });
        }

        const booking = await Customer.findOne({ referenceCode }).populate('assignedWorker');

        if (!booking) {
            console.log("No booking found for referenceCode:", referenceCode);
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        console.log("Booking found:", booking);
        res.json({ 
            success: true, 
            booking: {
                status: booking.status,
                workType: booking.workType, // Include workType in response
                assignedWorker: booking.assignedWorker
            }
        });
    } catch (error) {
        console.error("Error checking status:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};
