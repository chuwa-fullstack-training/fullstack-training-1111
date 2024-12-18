const express = require('express');
const jwt = require('jsonwebtoken');
const { Employee } = require('./schema');
const CustomAPIErrors = require('./errors')
const router = express.Router();
require('dotenv').config();

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;

        let employee = await Employee.findOne({ firstName: username });

        if (!employee) {
            throw new CustomAPIErrors('Employee does not exist!', 400);
        }

        if (employee.lastName !== password) {
            return res.status(400).json({ message: 'Wrong password' });
        }

        const payload = {
            id: employee._id
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.json({ token });
    } catch (error) {
        next(error);
    }
});

module.exports = router;