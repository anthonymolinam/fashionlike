const { hashPassword, comparePassword } = require('../helpers/hash_password')
const User = require('../models/user')
const { verifyToken } = require('../helpers/generate_token')
const { checkToken } = require('../helpers/check_auth')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        let usersArray = []
        if (!users)
            return res.status(404).json({ error: 'Users Not Found' })
        for (let i = 0; i < users.length; i++) {
            usersArray.push({
                id: users[i].id,
                username: users[i].username,
                email: users[i].email
            })
        }
        res.status(200).json(usersArray)
    } catch (e) {
        return res.status(400).json({ error: 'Bad Request' })
    }
}

const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username } })
        if (!user)
            return res.status(404).json({ error: 'User Not Found' })
        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email
        })
    } catch (e) {
        return res.status(400).json({ error: 'Bad Request' })
    }
}

const changePassword = async (req, res) => {
    try {
        const { password1, password2, currentPassword } = req.body

        const tokenData = await checkToken(req.headers.authorization)
        const user = await User.findOne({ where: { id: tokenData.id } })

        if (!currentPassword) {
            if ((password1 === password2)) {
                await User.update({ password: await hashPassword(password1) }, { where: { id: tokenData.id } })
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match' })
            }
        } else {
            if ((password1 === password2) && (await comparePassword(currentPassword, user.password))) {
                await User.update({ password: await hashPassword(password1) }, { where: { id: tokenData.id } })
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match or current password has incorrect' })
            }
        }
    } catch (e) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    getAllUsers,
    getUser,
    changePassword
}