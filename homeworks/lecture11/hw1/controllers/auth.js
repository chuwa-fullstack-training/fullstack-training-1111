const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).populate("company");

    if (!user) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user._id,
        company: user.company
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };