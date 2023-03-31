const { getAllUsers, findUser, updatePwd } = require('../database/db.queries')

// TODO: Queries
const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers()
        if (users.rows) {
            res.status(200).json(users.rows)
        } else {
            res.status(404).json({ error: "Users Not Found" })
        }
    } catch (error) {
        res.json(error)
    }
}

const findOneUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await findUser(username)
        user.rowCount ?
            res.status(200).json(user.rows[0]) :
            res.status(404).json({ error: "User Not Found" })
    } catch (error) {
        res.json(error)
    }
}

// TODO: Requests
const updatePassword = async (req, res) => {
    try {
        const { password1, password2 } = req.body
        const { username } = req.params
        const finduser = await findUser(username)

        if (finduser.rowCount) {
            if (password1 === password2) {
                const response = await updatePwd(username, password1)
                res.status(200).json(response.rows[0])
            } else {
                res.json({ "message": "Las contraseñas no coinciden" })
            }
        } else {
            res.status(404).json({ error: "User Not Found" })
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getUsers,
    findOneUser,
    updatePassword
}