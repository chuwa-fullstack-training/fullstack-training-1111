const mongoose = require('mongoose');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;