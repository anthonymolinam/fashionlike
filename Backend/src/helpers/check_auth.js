const { verifyToken } = require('./generate_token')

const checkToken = async (authorization) => {
    try {
        const token = authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if (tokenData) {
            return tokenData
        } else {
            return null
        }
    } catch (error) {
        return error
    }
}

const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if ([].concat(roles).includes(tokenData.role)) {
            next()
        } else {
            res.status(403).json(null)
        }
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" })
    }
}

module.exports = {
    checkToken,
    checkRole
}