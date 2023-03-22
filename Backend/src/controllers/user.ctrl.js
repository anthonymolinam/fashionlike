const { createUser, validateUser } = require('../database/db.queries')

const login = async (req, res) => {
    const { username, password } = req.query
    const response = await validateUser(username, password)
    res.json(response)
}

const signup = async (req, res) => {
    const { username, email, password } = req.query
    const response = await createUser(username, email, password)
    res.json(response)
}

module.exports = {
    login,
    signup
}