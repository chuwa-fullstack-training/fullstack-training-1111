import mongoose from 'mongoose';
import Counter from './counterDB.js';
// import AutoIncrementFactory from 'mongoose-sequence';
// import { AutoIncrement } from '../index.js';

const TodoSchema = new mongoose.Schema({
    id : {
        type: Number,
        unique: true
    },
    todo: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});
// TodoSchema.plugin(AutoIncrement, { inc_field: 'id' });

TodoSchema.pre('save', async function (next) {
    if (this.isNew) {
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'todo_id' }, 
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.id = counter.seq;
    }
    next();
});

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;