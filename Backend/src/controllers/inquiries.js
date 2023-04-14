const { hashPassword, comparePassword } = require('../helpers/encryptPassword');
const User = require('../models/user');
const { verifyToken } = require('../helpers/generateToken');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users)
            return res.status(404).json({ error: 'Users Not Found' });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
}

const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username } });
        if (!user)
            return res.status(404).json({ error: 'User Not Found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
}

const changePwd = async (req, res) => {
    try {
        const { password1, password2, currentPassword } = req.body;

        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        const user = await User.findOne({ where: { id: tokenData.id } })

        if (!currentPassword) {
            if ((password1 === password2)) {
                await User.update({ password: await hashPassword(password1) }, { where: { id: tokenData.id } });
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match' });
            }
        } else {
            if ((password1 === password2) && await comparePassword(currentPassword, user.password)) {
                await User.update({ password: await hashPassword(password1) }, { where: { id: tokenData.id } });
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match or current password has incorrect' });
            }
        }
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    changePwd
}