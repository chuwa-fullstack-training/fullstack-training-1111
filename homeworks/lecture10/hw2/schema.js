const mongoose = require('mongoose');
const {Schema} = mongoose;

const listItemSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
  },
});

const ListItem = mongoose.model('ListItem', listItemSchema);

module.exports = ListItem;
