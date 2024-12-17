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
      if (req.user) {
        res.json(employees);
      } else {
        const publicEmployees = employees.map((employee) => ({
          firstName: employee.firstName,
          lastName: employee.lastName,
        }));
        res.json(publicEmployees);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employees", error });
    }
  },

  getEmployeesByCompany: async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Please log in" });
      }

      const { companyId } = req.params;

      if (req.user.companyId.toString() !== companyId) {
        return res
          .status(403)
          .json({ message: "Forbidden: Unauthorized company access" });
      }

      const employees = await Employee.find({ company: companyId });
      res.json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch company employees", error });
    }
  },
};
