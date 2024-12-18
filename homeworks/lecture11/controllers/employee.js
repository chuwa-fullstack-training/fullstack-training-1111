// - Create a new employee
// - Get an employee by id
// - Update an employee by id
// - Delete an employee by id
// - Get all employees
const Employee = require("../models/Employee");
const Company = require("../models/Company");

const updateCompany = async (companyID, employeeID, action = "add") => {
  try {
    const updated = await Company.findOneAndUpdate(
      { _id: companyID },
      {
        [action === "add" ? "$push" : "$pull"]: { _employees: employeeID },
      },
      { new: true }
    );

    if (!updated) {
      console.error("Company not found");
    }

    return updated;
  } catch (err) {
    console.error(err.message);
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    if (employee.company) {
      // update the company's _employees array
      updateCompany(employee.company, employee._id);
    }
    await employee.save();
    res.status(201).send(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// unauthorized can only get employee first name and last name
const getEmployeeById = async (req, res) => {
  try {
    let projection = {};
    if (!req.user || req.user === "anonymous") {
      projection = { firstName: 1, lastName: 1 , _id: 0};
    }
    const employee = await Employee.findById(req.params?.id, projection);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.status(200).send(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const updateEmployee = async (req, res) => {
  if (!req.user || req.user === "anonymous") {
    return res.status(401).send("Unauthorized");
  }
  try {
    // check if company is being updated
    const employee = await Employee.findById(req.params?.id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    if (employee.company) {
      if (employee.company !== req.body.company) {
        if (req.body.company) {
          // update the old company's _employees array
          updateCompany(employee.company, employee._id, "remove");
          // update the new company's _employees array
          updateCompany(req.body.company, employee._id, "add");
        } else {
          // update the old company's _employees array
          updateCompany(employee.company, employee._id, "remove");
        }
      }
    } else {
      // update the new company's _employees array
      updateCompany(req.body.company, employee._id, "add");
    }
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedEmployee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteEmployee = async (req, res) => {
  if (!req.user || req.user === "anonymous") {
    return res.status(401).send("Unauthorized");
  }
  try {
    const employee = await Employee.findById(req.params?.id);
    if (employee.company) {
      // update the company's _employees array
      updateCompany(employee.company, employee._id, "remove");
    }
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).send("Employee successfully deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllEmployees = async (req, res) => {
  try {
    let projection = {};
    if (!req.user || req.user === "anonymous") {
      projection = { firstName: 1, lastName: 1, _id: 0 };
    }
    const employees = await Employee.find({}, projection);
    res.status(200).send(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
};
