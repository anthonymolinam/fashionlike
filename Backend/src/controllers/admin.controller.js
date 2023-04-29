const PostSchema = require('../models/post')
const UserSchema = require('../models/user')
const { hashPassword } = require('../helpers/hash_password')

const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.findAll({ attributes: ['id', 'username', 'email', 'role'] })
        if (!users)
            return res.status(404).json({ error: 'Users Not Found' })
        res.status(200).json(users)
    } catch (e) {
        return res.status(400).json({ error: 'Bad Request' })
    }
}

const editPost = async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        await PostSchema.update({ description }, { where: { id } })
        res.status(200).json({ message: 'Publication has been edited' })
    } catch (e) {
        res.status(404).json({ error: 'This publication id does not exist' })
    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, verified, role } = req.body
        await UserSchema.update({ username, email, password: await hashPassword(password), verified, role }, { where: { id } })
        res.status(200).json({ message: 'User has been edited' })
    } catch (e) {
        res.status(404).json({ error: 'This user id does not exist' })
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        await PostSchema.destroy({ where: { id } })
        res.status(200).json({ message: 'Publication has been deleted' })
    } catch (e) {
        res.status(404).json({ error: 'This publication id does not exist' })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await UserSchema.destroy({ where: { id } })
        res.status(200).json({ message: 'User has been deleted' })
    } catch (e) {
        res.status(404).json({ error: 'This user id does not exist' })
    }
}

module.exports = {
    getAllUsers,
    editPost,
    editUser,
    deletePost,
    deleteUser
}