const { createUser, validateUser, findById } = require('../database/db.queries')
const { signToken, verifyToken } = require('./generateToken')

// TODO: Authentication
const signup = async (req, res) => {
    try {
        const { username, email, password1, password2 } = req.body
        if (password1 === password2) {
            const response = await createUser(username, email, password1)
            res.status(200).json(response)
        } else {
            res.json({ "message": "Las contraseñas no coinciden" })
        }
    } catch (error) {
        res.json(error)
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const response = await validateUser(username, password)
        if (!response.rowCount)
            res.status(401).json({
                "message": "Nombre de usuario o contraseña incorrecto"
            })
        else {
            const user = response.rows[0]
            const tokenSession = await signToken(user)
            res.status(200).json({ data: user, tokenSession })
        }
    } catch (error) {
        res.json(error)
    }
}

// TODO: Authorization
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        console.log(tokenData);
        if (tokenData.id) {
            next()
        } else {
            res.status(409).json({ error: "No tienes permisos" })
        }
    } catch (error) {
        console.error(error)
        res.status(409).json({ error: "No tienes permisos" })
    }
}

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        const userData = await findById(tokenData.id)
        console.log([].concat(roles).includes(userData.rows[0].role));
        if ([].concat(roles).includes(userData.rows[0].role)) {
            next()
        } else {
            res.status(409).json({ error: "No tienes permisos" })
        }
    } catch (error) {
        console.error(error)
        res.status(409).json({ error: "No tienes permisos" })
    }
}

module.exports = {
    login,
    signup,
    checkAuth,
    checkRoleAuth
}