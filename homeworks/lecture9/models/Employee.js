const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  startDate: {
    type: Date,
    default: Date.now
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;