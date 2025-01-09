const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
