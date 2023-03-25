const { createUser, validateUser } = require('../database/db.queries')

const login = async (req, res) => {
    const { username, password } = req.body
    const response = await validateUser(username, password)
    res.json(response)
}

const signup = async (req, res) => {
    const { username, email, password1, password2 } = req.body
    if (password1 === password2) {
        const response = await createUser(username, email, password1)
        res.json(response)
    } else {
        res.json({ "response": "Las contraseñas no coinciden" })
    }
}

module.exports = {
    login,
    signup
}