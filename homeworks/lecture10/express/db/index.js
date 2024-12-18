import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('../.env');

// connect to mongodb

const mongoURL = process.env.MONGODB_URL;
const connectDB = async () => {
    try {

        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
  };

export default connectDB;