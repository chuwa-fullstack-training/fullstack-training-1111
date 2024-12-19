const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: { type: Date, default: Date.now },
  jobTitle: { type: String, required: true },
  resigned: { type: Boolean, default: false },
  salary: { type: Number, required: true },
  _manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null } 
});

module.exports = mongoose.model('Employee', EmployeeSchema);