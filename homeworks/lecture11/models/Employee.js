const mongoose = require("mongoose");
// - firstName: String
// - lastName: String
// - company: CompanySchema
// - startDate: Date
// - jobTitle: String
// - resigned: Boolean
// - salary: Number
// - _manager: EmployeeSchema_ (optional)
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  _manager: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
    required: false,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
