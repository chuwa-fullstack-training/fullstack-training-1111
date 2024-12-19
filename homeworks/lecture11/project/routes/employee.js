const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');
const authenticate = require('../middlewares/auth'); 

router.post('/', authenticate, async (req, res) => {
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

router.get('/', authenticate, async (req, res) => {
  try {
    const tokenUser = req.user;

    if (tokenUser) {
      const employees = await Employee.find().populate('company _manager');
      res.json(employees);
    } else {
      const employees = await Employee.find({}, 'firstName lastName');
      res.json(employees);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 获取指定员工
router.get('/:id', authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company _manager');
    res.json(employee);
  } catch {
    res.status(404).json({ error: 'Employee not found' });
  }
});

router.get('/company-employees', authenticate, async (req, res) => {
  try {
    const { company } = req.user;

    const employees = await Employee.find({ company }).populate('company _manager');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id/subordinates', authenticate, async (req, res) => {
  try {
    const subordinates = await Employee.find({ _manager: req.params.id });
    res.json(subordinates);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;