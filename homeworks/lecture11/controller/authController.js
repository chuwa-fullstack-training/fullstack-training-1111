import Employee from '../models/employeeDB.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res, next) => {
    try {
        const {firstName, lastName} = req.body;
        
        let employee = await Employee.findOne({firstName, lastName});

        if (!employee) return res.status(400).json({ message: 'Invalid Credentials' });

        const payload = {
            employee: {
              id: employee._id,
              firstName: employee.firstName,
              lastName: employee.lastName,
              company: employee.company,
             
            }
          };
        const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
        });
        res.json({ token });
    } catch (err) {
        next(err);
    }
}