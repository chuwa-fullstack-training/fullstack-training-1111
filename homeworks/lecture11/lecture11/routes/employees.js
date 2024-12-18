const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');
const auth = require('../middleware/auth');

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
 
router.get('/:id', auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate('company')
      .populate('manager');

    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    if (!req.user) {
      // Not logged in
      return res.json({
        firstName: employee.firstName,
        lastName: employee.lastName
      });
    }

    // Logged in user
 
    if (req.user.companyId.toString() === employee.company._id.toString()) {
      // Same company, return full details
      return res.json(employee);
    } else {
      // Different company
      return res.json({
        firstName: employee.firstName,
        lastName: employee.lastName
      });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee by id
 router.put('/:id', auth, async (req, res) => {
  try {
    const { company: companyId } = req.body;
    let employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // If changing company, handle old/new company arrays
    if (companyId && companyId.toString() !== employee.company.toString()) {
      const oldCompany = await Company.findById(employee.company);
      if (oldCompany) {
        oldCompany.employees = oldCompany.employees.filter(
          eId => eId.toString() !== employee._id.toString()
        );
        await oldCompany.save();
      }

      const newCompany = await Company.findById(companyId);
      if (!newCompany) return res.status(404).json({ error: 'New company not found' });
      newCompany.employees.push(employee._id);
      await newCompany.save();
    }

    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('company')
      .populate('manager');
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee by id
router.delete('/:id', auth, async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // Remove from company's employee list
    const company = await Company.findById(employee.company);
    if (company) {
      company.employees = company.employees.filter(
        eId => eId.toString() !== employee._id.toString()
      );
      await company.save();
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
 
router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employee.find().populate('company').populate('manager');
    if (!req.user) {
      // Not logged in: only firstName and lastName
      const partial = employees.map(e => ({ firstName: e.firstName, lastName: e.lastName }));
      return res.json(partial);
    }

    // Logged in: full details
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
