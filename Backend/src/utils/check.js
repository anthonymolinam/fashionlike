const { verifyToken } = require('./generateToken');

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        if ([].concat(roles).includes(tokenData.role)) {
            next();
        } else {
            res.status(403).json({ error: "you don't have permissions" });
        }
    } catch (error) {
        res.status(403).json({ error: "you don't have permissions" });
    }
}

module.exports = {
    checkRoleAuth
}