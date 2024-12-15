const Company = require("../models/Company");

exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company created' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.status(200).json(company);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.status(201).json(company);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.status(204).json({ message: "Company deleted" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' });
  }
};
