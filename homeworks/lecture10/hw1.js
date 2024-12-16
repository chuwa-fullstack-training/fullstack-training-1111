// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/companyEmployeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas and models
const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
  },
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

const Employee = mongoose.model("Employee", EmployeeSchema);
const Company = mongoose.model("Company", CompanySchema);

// Set up Express app
const app = express();
app.use(bodyParser.json());

// API Endpoints

// Create a new company
app.post("/companies", async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new employee
app.post("/employees", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    // Add employee to the company's employee list
    if (employee.company) {
      await Company.findByIdAndUpdate(employee.company, {
        $push: { employees: employee._id },
      });
    }

    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a company by id
app.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get an employee by id
app.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      "manager company"
    );
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a company by id
app.put("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee by id
app.put("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a company by id
app.delete("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });

    // Remove the company's reference from employees
    await Employee.updateMany(
      { company: company._id },
      { $unset: { company: "" } }
    );

    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee by id
app.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    // Remove the employee from the company's employee list
    if (employee.company) {
      await Company.findByIdAndUpdate(employee.company, {
        $pull: { employees: employee._id },
      });
    }

    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all companies
app.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find().populate("manager company");
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees of a company
app.get("/companies/:id/employees", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company.employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
