const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));