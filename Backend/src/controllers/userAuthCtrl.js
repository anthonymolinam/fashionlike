// const { createUser, validateUser, findById, updateTkn } = require('../database/db.queries')
const { signToken, verifyToken } = require('./generateToken')
const User = require('../models/user')

// TODO: Authentication
const signup = async (req, res) => {
    try {
        const { username, email, password1, password2 } = req.body
        if (password1 === password2) {
            await User.create({
                username,
                email,
                password: password1
            })
            res.status(201).json({ message: "User has been created" })
        } else {
            res.status(400).json({ message: "Passwords do not match" })
        }
    } catch (error) {
        res.status(409).json({
            name: error.name,
            errors: {
                message: error.errors[0]["message"],
                type: error.errors[0]["type"],
                path: error.errors[0]["path"],
                value: error.errors[0]["value"]
            },
            detail: error.parent.detail
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username, password } })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(401).json({ error: "Username or password is incorrect" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

// TODO: Authorization
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if (tokenData.id) {
            next()
        } else {
            res.status(403).json({ error: "you don't have permissions" })
        }
    } catch (error) {
        res.json(error)
    }
}

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {

        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if ([].concat(roles).includes()) {
            next()
        } else {
            res.status(403).json({ error: "you don't have permissions" })
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    login,
    signup,
    checkAuth,
    checkRoleAuth
}