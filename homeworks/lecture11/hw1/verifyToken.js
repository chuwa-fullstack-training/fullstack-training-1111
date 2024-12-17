const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token') || req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (!token) {
    req.isAuthorized = false;
  } else {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.isAuthorized = true
      req.user = decoded.user;
    } catch (err) {
      req.isAuthorized = false;
    }
  }

  next();
  
};
