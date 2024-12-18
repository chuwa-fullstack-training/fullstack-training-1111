const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const auth = require('../middleware/auth');

// Create a new company
router.post('/', async (req, res) => {
  try {
    const company = new Company(req.body);
    const savedCompany = await company.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a company by id
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a company by id
router.put('/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a company by id
router.delete('/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees of a company
// Logged-in user only sees employees of his/her own company
router.get('/:id/employees', auth, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });

    if (!req.user) {
      // Not logged in - return only firstName and lastName of employees
      const partialEmployees = company.employees.map(e => ({
        firstName: e.firstName,
        lastName: e.lastName
      }));
      return res.json(partialEmployees);
    }

    // Logged in - check if user's company matches this company
    if (req.user.companyId.toString() !== company._id.toString()) {
      // User trying to access employees of a different company
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Same company - return full employees data
    res.json(company.employees);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
