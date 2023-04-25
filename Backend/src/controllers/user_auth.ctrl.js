const UserSchema = require('../models/user')
const { signToken } = require('../helpers/generate_token')
const { hashPassword, comparePassword } = require('../helpers/hash_password')
const zxcvbn = require('zxcvbn')

// TODO: Authentication
const signup = async (req, res) => {
    try {
        const { username, email, password1, password2 } = req.body
        if (zxcvbn(password1).score < 3) {
            return res.status(400).json({ error: 'Password is too weak' })
        }
        if (password1 === password2) {
            await UserSchema.create({
                username,
                email,
                password: await hashPassword(password1)
            })
            res.status(201).json({ message: 'User has been created' })
        } else {
            res.status(400).json({ error: 'Passwords do not match' })
        }
    } catch (e) {
        return res.status(409).json({
            name: error.name,
            message: error.errors[0].message,
            type: error.errors[0].type,
            detail: error.parent.detail
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await UserSchema.findOne({ where: { username } })
        if (user && await comparePassword(password, user.password)) {
            const tokenSession = await signToken(user)
            res.status(200).json({
                id: user.id,
                username: user.username,
                email: user.email,
                tokenSession
            })
        } else {
            res.status(400).json({ error: 'Username or password has incorrect' })
        }
    } catch (e) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    login,
    signup
}