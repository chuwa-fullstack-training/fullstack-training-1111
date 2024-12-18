const express = require('express');
require('dotenv').config();

const authRouter = require('./routers/auth');
const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');

const app = express();
const port = process.env.PORT || 4000;
const connectDB = require('./utils/db');

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', authRouter);
app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.get('*', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

