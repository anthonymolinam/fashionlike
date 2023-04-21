const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.JWT_SECRET

const signToken = async (user) => {
    return jwt.sign({
        id: user.id,
        role: user.role
    }, secretKey, { expiresIn: '24h' })
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null
    }
}

module.exports = {
    signToken,
    verifyToken
}