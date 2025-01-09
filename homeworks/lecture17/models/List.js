const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  todo: String,
  done: Boolean
});

const List = mongoose.model('List', listSchema);

module.exports = List;