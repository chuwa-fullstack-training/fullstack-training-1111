const Company = require("../models/Company");

module.exports = {
  createCompany: async (req, res) => {
    try {
      const company = new Company(req.body);
      const result = await company.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getCompanyById: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id).populate(
        "employees"
      );
      if (!company)
        return res.status(404).json({ message: "Company not found" });
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCompany: async (req, res) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCompany: async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params.id);
      res.json({ message: "Company deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCompanies: async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
