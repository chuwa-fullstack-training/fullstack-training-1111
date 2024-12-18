const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');
 

 router.post('/login', async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'firstName and lastName required' });
  }

  const employee = await Employee.findOne({ firstName, lastName }).populate('company');
  if (!employee) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

 
  const token = jwt.sign({
    employeeId: employee._id,
    companyId: employee.company._id
  }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
