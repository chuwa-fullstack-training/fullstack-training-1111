const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const { company: companyId } = req.body;
    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();

    // Add employee to company's employee list
    company.employees.push(savedEmployee._id);
    await company.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get an employee by id
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate('company')
      .populate('manager');
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee by id
router.put('/:id', async (req, res) => {
  try {
    const { company: companyId } = req.body;

    // If the company is changing, we may need to update references
    let employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    if (companyId && companyId.toString() !== employee.company.toString()) {
      // Removing employee from old company
      const oldCompany = await Company.findById(employee.company);
      if (oldCompany) {
        oldCompany.employees = oldCompany.employees.filter(eId => eId.toString() !== employee._id.toString());
        await oldCompany.save();
      }

      const newCompany = await Company.findById(companyId);
      if (!newCompany) return res.status(404).json({ error: 'New company not found' });
      newCompany.employees.push(employee._id);
      await newCompany.save();
    }

    // Update employee fields
    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('company').populate('manager');
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee by id
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // Remove from company's employee list
    const company = await Company.findById(employee.company);
    if (company) {
      company.employees = company.employees.filter(eId => eId.toString() !== employee._id.toString());
      await company.save();
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().populate('company').populate('manager');
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
