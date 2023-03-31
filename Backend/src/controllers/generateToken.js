const jwt = require('jsonwebtoken')

const signToken = async (user) => {
    return jwt.sign({
        id: user.id,
        role: user.role
    }, process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        })
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return null
    }
}

const decodeToken = async () => {

}

module.exports = {
    signToken,
    verifyToken,
    decodeToken
}