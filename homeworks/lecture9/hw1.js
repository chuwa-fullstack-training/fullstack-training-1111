const mongoose = require('mongoose');
const express = require('express');
const Router = require('./middleware');
const authRouter = require('./auth');

const app = express();
const PORT = 3000;
require('dotenv').config();

// Connect to Database
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err)
    });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api', Router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




