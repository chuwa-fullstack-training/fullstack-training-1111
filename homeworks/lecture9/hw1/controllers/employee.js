const Employee = require("../models/Employee");

module.exports = {
  createEmployee: async (req, res) => {
    try {
      const employee = new Employee(req.body);
      const result = await employee.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id).populate(
        "company manager"
      );
      if (!employee)
        return res.status(404).json({ message: "Employee not found" });
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      res.json({ message: "Employee deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEmployees: async (req, res) => {
    try {
      const employees = await Employee.find().populate("company manager");
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEmployeesByCompany: async (req, res) => {
    try {
      const employees = await Employee.find({ company: req.params.companyId });
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
