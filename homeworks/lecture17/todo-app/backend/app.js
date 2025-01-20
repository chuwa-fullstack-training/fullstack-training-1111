const mongoose = require('mongoose');
const express = require('express');
const todoRouter = require('./routers/todo');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log(`Error connecting to MongoDB ${error}`));

app.use('/todos', todoRouter);

app.listen(PORT, () => {console.log("Server is running on port", PORT)});
    
