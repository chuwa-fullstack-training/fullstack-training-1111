const jwt = require('jsonwebtoken');
const { Employee } = require('../schema');

exports.login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const employee = await Employee.findOne({username});
        if(!employee) return res.status(404).send('User not found');
        
        const token = jwt.sign(
            {
                id: employee._id,
                company: employee.company
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        );
        
        res.json({ token });
    } catch (err) {
        res.status(500).send(err);
    }
};
