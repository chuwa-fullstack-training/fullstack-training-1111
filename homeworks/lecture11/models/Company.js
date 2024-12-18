const mongoose = require("mongoose");
// - name: String
// - description: String
// - headquarters: String
// - industry: String
// - _employees: [EmployeeSchema]_
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  headquarters: String,
  industry: String,
  _employees: {
    type: [mongoose.Schema.ObjectId],
    ref: "Employee",
  }
});

module.exports = mongoose.model("Company", companySchema);
