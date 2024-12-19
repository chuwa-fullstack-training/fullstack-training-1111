const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/employee'); // 假设 Employee 模型存储用户信息
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, company: user.company }, 
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;