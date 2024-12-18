import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 0
    }
});

const Counter = mongoose.model('Counter', CounterSchema);

mongoose.connection.once('open', async () => {
    console.log('intializing counter');
    
    // Ensure the counter document exists
    await Counter.findByIdAndUpdate(
        { _id: 'todo_id' },
        { $setOnInsert: { seq: 0 } },
        { upsert: true }
    );
});

export default Counter;
