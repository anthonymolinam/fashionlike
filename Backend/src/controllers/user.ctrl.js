const { createUser, validateUser, findUser } = require('../database/db.queries')

const login = async (req, res) => {
    const { username, password } = req.body
    const response = await validateUser(username, password)
    if (!response.rowCount)
        res.json({
            "message": "Nombre de usuario o contraseña incorrecto",
            "response": response,
        })
    else {
        res.json(response)
    }
}

const signup = async (req, res) => {
    const { username, email, password1, password2 } = req.body
    if (password1 === password2) {
        const response = await createUser(username, email, password1)
        res.json(response)
    } else {
        res.json({ "message": "Las contraseñas no coinciden" })
    }
}

const search = async (req, res) => {
    const { username } = req.params
    const response = await findUser(username)
    res.json({
        "command": response.command,
        "rows": {
            "id": response.rows[0]["id"],
            "username": response.rows[0]["username"],
            "email": response.rows[0]["email"],
            "verified": response.rows[0]["verified"],
        }
    })
}

module.exports = {
    login,
    signup,
    search
}