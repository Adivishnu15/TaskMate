// server.js
const express = require('express');
const connectDB = require('./config/db');
const workerRoutes = require('./routes/workerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/worker', workerRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 3070;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

