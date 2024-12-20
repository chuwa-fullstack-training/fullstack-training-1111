const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const token = 
        req.header('x-auth-token') ||
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];

    // if(!token) return res.status(401).json({message: 'No token, authorization denied'});
    
    if(token) {
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        res.status(401).json({message: 'Token is not valid'});
    }
    }
    next();
};
