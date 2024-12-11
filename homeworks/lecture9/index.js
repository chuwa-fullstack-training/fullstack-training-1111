const express = require('express')
const mongoose = require('mongoose')
const companyRouter = require('./routers/company')
const employeeRouter = require('./routers/employee')
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.log('Error connecting to the database', err);
  });



// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/company', companyRouter)
app.use('/employee', employeeRouter)


app.listen(3000, () => {
    console.log('Listening on port 3000!')
})