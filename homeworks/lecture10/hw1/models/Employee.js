const mongoose = require('mongoose');
const {Schema} = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  jobTitle: {
    type: String,
  },
  resigned: {
    type: Boolean,
    default: false,
  },
  salary: {
    type: Number,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
