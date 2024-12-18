require('dotenv').config(); //env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const companiesRouter = require('./routes/companies');
const employeesRouter = require('./routes/employees');

 const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

 mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

app.use(cors());
app.use(express.json());

app.use('/companies', companiesRouter);
app.use('/employees', employeesRouter);

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
