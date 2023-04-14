const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET

const signToken = async (payload) => {
    return jwt.sign({
        id: payload.id,
        role: payload.role
    }, secretKey, { expiresIn: '1h' });
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null
    }
}

module.exports = {
    signToken,
    verifyToken
}