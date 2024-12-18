const mongoose = require('mongoose');
const express = require('express');
const PORT = 3000;
require('dotenv').config();

const app = express();
app.use(express.json());

const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err);
    });

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
