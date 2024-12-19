const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.post('/', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const companies = await Company.find().populate('employees');
  res.json(companies);
});

router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    res.json(company);
  } catch {
    res.status(404).json({ error: 'Company not found' });
  }
});

router.put('/:id', async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: 'Company deleted' });
});

module.exports = router;