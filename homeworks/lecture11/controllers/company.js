// - Create a new company
// - Get a company by id
// - Update a company by id
// - Delete a company by id
// - Get all companies
// - Get all employees of a company
const Company = require("../models/Company");
const Employee = require("../models/Employee");

const updateEmployees = async (oldEmployeeIds, newEmployeeIds, companyID) => {
  try {
    const employeesToAdd = newEmployeeIds.filter(
      (employee) => !oldEmployeeIds.includes(employee)
    );
    const employeesToRemove = oldEmployeeIds.filter(
      (employee) => !newEmployeeIds.includes(employee)
    );
    await Employee.updateMany(
      { _id: { $in: employeesToAdd } },
      { company: companyID }
    );
    await Employee.updateMany(
      { _id: { $in: employeesToRemove } },
      { company: null }
    );
  } catch (err) {
    console.error(err.message);
  }
};

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    if (company._employees?.length) {
      await updateEmployees([], company._employees, company._id);
    }
    res.status(201).send(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).send(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    if (!company) {
      return res.status(404).send("Company not found");
    }
    if (req.body._employees) {
      await updateEmployees(
        company._employees,
        req.body._employees,
        company._id
      );
    }
    const updatedCompany = await Company.findByIdAndUpdate(req.params?.id, req.body, { new: true });
    res.status(200).send(updatedCompany);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    if (!company) {
      return res.status(404).send("Company not found");
    }
    if (company._employees?.length) {
      await updateEmployees(company._employees, [], company._id);
    }
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).send("Company successfully deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).send(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllEmployeesOfCompany = async (req, res) => {
  if (!req.user || req.user === "anonymous") {
    return res.status(401).send("Unauthorized");
  }
  try {
    if (req.user.company !== req.params?.id) {
      return res.status(401).send("Unauthorized");
    }
    const company = await Company.findById(req.params?.id).populate(
      "_employees"
    );
    res.status(200).send(company._employees? company._employees : []);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getAllCompanies,
  getAllEmployeesOfCompany,
};
