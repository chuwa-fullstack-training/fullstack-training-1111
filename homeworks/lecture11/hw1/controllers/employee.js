const Employee = require("../models/Employee");
const Company = require("../models/Company");

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    const company = await Company.findById(employee.company);
    company.employees.push(employee._id);
    await company.save();

    res.status(201).json(employee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate("company").populate("manager");
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    if (!req.user || employee.company._id.toString() !== req.user.company._id) {
      return res.status(200).json({
        firstName: employee.firstName,
        lastName: employee.lastName,
      });
    } else {
      return res.status(200).json(employee);
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.status(201).json(employee);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.status(204).json({ message: "Employee deleted" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    if (req.user) {
      const employees = await Employee.find({ company: req.user.company });
      return res.status(200).json(employees);
    } else {
      const employees = await Employee.find();
      const restrictedData = employees.map(employee => ({
        firstName: employee.firstName,
        lastName: employee.lastName,
      }));
      res.status(200).json(restrictedData);
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });

    if (!req.user || req.params.companyId !== req.user.company._id) {
      const restrictedData = employees.map(employee => ({
        firstName: employee.firstName,
        lastName: employee.lastName,
      }));
      return res.status(200).json(restrictedData);
    }
    res.status(200).json(employees);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};
