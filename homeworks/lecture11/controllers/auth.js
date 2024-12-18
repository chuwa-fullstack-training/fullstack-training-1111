const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { firstName, lastName} = req.body;
    console.log(req.body);
    const employee = await Employee.findOne({ firstName: firstName });
    if (!employee) {
      return res.status(400).json({ message: "User not found" });
    }
    // check if the password is correct
    if (employee.lastName !== lastName) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      employee: {
        id: employee._id,
        firstName: employee.firstName,
        company: employee.company,
      },
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = { login };
