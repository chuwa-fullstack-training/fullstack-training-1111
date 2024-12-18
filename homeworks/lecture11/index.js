import mongoose from 'mongoose';
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/index.js';

const app = express();
app.use(bodyParser.json());

app.use('/', routes)

// connect to mongodb
const mongoDBURL = process.env.MONGODB_URL;
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => console.log('Error connecting to MongoDB:', err))


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
