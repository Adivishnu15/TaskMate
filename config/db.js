// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://245122749303:Vishnu86888@webtech.q3oa8.mongodb.net/TaskMateDB',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;