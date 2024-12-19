const Company = require('../models/Company');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getAllCompanies: ${err.message}`,
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getCompanyById: ${err.message}`,
    });
  }
};

const getAllEmployeesByCompany = async (req, res) => {
  try {
    if (!req.login) {
      return res.status(401).json({message: 'Unauthorized: Please log in'});
    }

    if (req.company != req.params?.id) {
      return res.status(403).json({
        message: 'Forbidden: Can only access employee from own company',
      });
    }

    const company = await Company.findById(req.params?.id);
    res.status(200).json(company?._employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getAllEmployeesByCompany: ${err.message}`,
    });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({message: 'Company created'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at createCompany: ${err.message}`,
    });
  }
};

const updateCompanyById = async (req, res) => {
  try {
    // find the company
    const company = await Company.findById(req.params?.id);

    // update the company
    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
    company.industry = req.body.industry ?? company.industry;

    // save the company
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at updateCompanyByID: ${err.message}`,
    });
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).json({message: 'Company deleted'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at deleteCompanyById: ${err.message}`,
    });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  getAllEmployeesByCompany,
  createCompany,
  updateCompanyById,
  deleteCompanyById,
};
