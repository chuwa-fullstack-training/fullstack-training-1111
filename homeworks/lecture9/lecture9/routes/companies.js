const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const Employee = require('../models/employee');

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

    // Optionally, you might also want to handle employees' cleanup here.
    // For now, we are just deleting the company.
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
router.get('/:id/employees', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company.employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
