import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/todo.js';
import Counter from "./models/counterDB.js";

const app = express();



connectDB()

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', router)


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
