const mongoose = require('mongoose');
const express = require('express');
const Router = require('./middleware');

const app = express();
const PORT = 3000;
const URI = "mongodb+srv://jianganchen:3O8CeMMU2eBC10TV@cluster0.luyah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to Database
mongoose
    .connect(URI, {
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

app.use('/api', Router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




