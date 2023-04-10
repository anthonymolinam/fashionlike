const User = require('../models/user')

// TODO: Queries
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username } })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ error: "User Not Found" })
        }
    } catch (error) {
        res.json(error)
    }
}

// TODO: Requests
const changePwd = async (req, res) => {

}

module.exports = {
    getAllUsers,
    getUser,
    changePwd
}