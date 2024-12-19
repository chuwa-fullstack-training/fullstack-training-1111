const express = require('express');
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors');
const Employee = require('../models/Employee');
const router = express.Router();

// /api/login
router.post('/', async (req, res, next) => {
  try {
    const {username, password} = req.body;

    let employee = await Employee.findOne(
      {firstName: username},
      {lastName: 1, _id: 1, company: 1}
    );

    if (!employee) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (employee.lastName !== password) {
      return res.status(400).json({message: 'Invalid Credentials'});
    }

    const payload = {
      employee: {
        id: employee._id,
        company: employee.company,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '10m',
    });

    res.json({token});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
