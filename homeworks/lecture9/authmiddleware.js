const jwt = require('jsonwebtoken');
const { Employee } = require('./schema');

const auth = async (req, res, next) => {
    const token = 
        req.header('x-auth-token') ||
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];

    // if no authentication proceed to unauthenticated login
    if (!token) {
        return next();
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const employee = await Employee.findById(decoded.id);

        if (employee) {
            req.employee = employee;
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
}

module.exports = auth;