const Company = require('../models/Company');
const Employee = require('../models/Employee');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getAllEmployees: ${err.message}`,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getEmployeeById: ${err.message}`,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const companyId = req.body?.company;
    await employee.save();
    const newEmployee = await employee.save();

    if (companyId) {
      let company = await Company.findById(companyId);
      if (company._employees) {
        company._employees.push(newEmployee._id);
      } else {
        company._employees = [newEmployee._id];
      }
      await company.save();
    }

    res.status(201).json({message: 'Employee created'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at createEmployee: ${err.message}`,
    });
  }
};

const updateEmployeeById = async (req, res) => {
  try {
    // find the employee
    const employee = await Employee.findById(req.params?.id);

    // update the employee
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.resigned = req.body.resigned ?? employee.resigned;
    employee.salary = req.body.salary ?? employee.salary;

    let prevCompanyId = employee.company;
    let newCompanyId = req.body?.company;
    if (newCompanyId && prevCompanyId !== newCompanyId) {
      let newCompany = await Company.findById(newCompanyId);
      if (newCompany._employees) {
        newCompany._employees.push(employee._id);
      } else {
        newCompany._employees = [employee._id];
      }
      newCompany.save();

      if (prevCompanyId) {
        let prevCompany = await Company.findById(prevCompanyId);
        prevCompany._employees = prevCompany._employees.filter(
          (id) => id.toString() != employee._id.toString()
        );
        prevCompany.save();
      }
      employee.company = newCompanyId;
    }
    let updatedEmployee = await employee.save();

    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at updatedEmployee: ${err.message}`,
    });
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    // find the employee
    const employee = await Employee.findById(req.params?.id);
    console.log(employee);

    if (employee.company) {
      let company = await Company.findById(employee.company);
      company._employees = company._employees.filter(
        (id) => id.toString() != employee._id.toString()
      );
      company.save();
    }

    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({message: 'Company deleted'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at deleteCompanyById: ${err.message}`,
    });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
