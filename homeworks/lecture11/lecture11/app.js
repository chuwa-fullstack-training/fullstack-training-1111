const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const companiesRouter = require('./routes/companies');
const employeesRouter = require('./routes/employees');
const authRouter = require('./middleware/auth');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

// Authentication routes
app.use('/api', authRouter);

// Protected and unprotected routes
app.use('/companies', companiesRouter);
app.use('/employees', employeesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
