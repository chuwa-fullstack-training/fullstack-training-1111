const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  jobTitle: [{
    type: String,
    required: true,
  }],
  resigned: {
    type: Boolean,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  manager: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Employee", 
    default: null,
  },
})

module.exports = mongoose.model("Employee", employeeSchema);