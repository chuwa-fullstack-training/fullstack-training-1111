const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // Check if token exists
  if (!token) {
    req.login = false;
    next();
  } else {
    try {
      req.login = true;
      // Verify token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      // Add user from payload
      req.employee = decoded.employee.id;
      req.company = decoded.employee.company;

      next();
    } catch (err) {
      res.status(401).json({msg: 'Token is not valid'});
    }
  }
};
