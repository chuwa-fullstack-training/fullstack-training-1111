const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    await Company.findByIdAndUpdate(employee.company, {
      $push: { employees: employee._id }
    });

    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const employees = await Employee.find().populate('company _manager');
  res.json(employees);
});

router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company _manager');
    res.json(employee);
  } catch {
    res.status(404).json({ error: 'Employee not found' });
  }
});

router.get('/:id/subordinates', async (req, res) => {
  const subordinates = await Employee.find({ _manager: req.params.id });
  res.json(subordinates);
});

router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;