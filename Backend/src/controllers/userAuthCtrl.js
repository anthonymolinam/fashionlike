const User = require('../models/user');
const { signToken } = require('../utils/generateToken');
const { encrypt, comparePwd } = require('../utils/encryptPassword')

// TODO: Authentication
const signup = async (req, res) => {
    try {
        const { username, email, password1, password2 } = req.body
        if (password1 === password2) {
            await User.create({
                username,
                email,
                password: await encrypt(password1)
            });
            res.status(201).json({ message: "User has been created" });
        } else {
            res.status(400).json({ message: "Passwords do not match" });
        }
    } catch (error) {
        res.status(409).json({
            name: error.name,
            message: error.errors[0].message,
            type: error.errors[0].type,
            detail: error.parent.detail
        });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (user) {
            if (await comparePwd(password, user.password)) {
                const tokenSession = await signToken(user);
                res.status(200).json({ user, tokenSession });
            } else {
                res.status(400).json({ error: "Password is incorrect" });
            }
        } else {
            res.status(404).json({ error: "This username does not exist" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    login,
    signup
}