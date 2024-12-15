const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    
    const company = await Company.findById(employee.company);
    company.employees.push(employee._id);
    await company.save();

    res.status(201).json(employee);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate("company").populate("manager");
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.status(200).json(employee);
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
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.status(200).json(employees);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};
