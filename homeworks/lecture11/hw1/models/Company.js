const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

module.exports = mongoose.model("Company", companySchema);
