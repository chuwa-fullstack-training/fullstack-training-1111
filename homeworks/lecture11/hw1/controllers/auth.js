const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");

exports.login = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, companyId: user.company },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ token });
  } catch (error) {
    next(err);
  }
};
