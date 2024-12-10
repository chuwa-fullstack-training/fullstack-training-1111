const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: { 
    type: String, 
    required: true 
  },
  done: { 
    type: Boolean, 
    default: false 
  },
});

module.exports = mongoose.model('Todo', todoSchema);