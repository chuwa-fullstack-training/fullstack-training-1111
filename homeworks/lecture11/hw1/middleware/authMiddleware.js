const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
