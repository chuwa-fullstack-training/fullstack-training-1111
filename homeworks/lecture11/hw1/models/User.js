const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true
  },
  password: { 
    type: String, 
    required: true 
  },
  company: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Company", 
    required: true 
  },
});

module.exports = mongoose.model("User", userSchema);
