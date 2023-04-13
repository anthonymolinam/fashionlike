const { encrypt, comparePwd } = require('../helpers/encryptPassword');
const User = require('../models/user');
const { verifyToken } = require('../helpers/generateToken');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username } });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User Not Found' });
        }
    } catch (error) {
        res.json(error);
    }
}

const changePwd = async (req, res) => {
    try {
        const { password1, password2, currentPassword } = req.body;

        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        const user = await User.findOne({ where: { id: tokenData.id } })

        console.log(currentPassword);
        if (!currentPassword) {
            if ((password1 === password2)) {
                await User.update({ password: await encrypt(password1) }, { where: { id: tokenData.id } });
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match' });
            }
        } else {
            if ((password1 === password2) && await comparePwd(currentPassword, user.password)) {
                await User.update({ password: await encrypt(password1) }, { where: { id: tokenData.id } });
                res.status(200).json({ message: 'Password has been changed' })
            } else {
                res.status(400).json({ error: 'Passwords do not match or current password has incorrect' });
            }
        }
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

module.exports = {
    getAllUsers,
    getUser,
    changePwd
}