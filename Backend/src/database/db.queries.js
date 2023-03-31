const client = require("./db.connect")

const createUser = async (username, email, password) => {
    try {
        const text = "INSERT INTO users(username, email, password) VALUES($1, $2, crypt($3, gen_salt('bf')))"
        const value = [username, email, password]
        return await client.query(text, value)
    } catch (error) {
        return error
    }
}

const validateUser = async (username, password) => {
    try {
        const text = "SELECT * FROM users WHERE username=$1 AND password=crypt($2, password)"
        const value = [username, password]
        return await client.query(text, value)
    } catch (error) {
        return error
    }
}

const findById = async (id) => {
    try {
        const text = "SELECT * FROM users WHERE id=$1"
        const value = [id]
        return await client.query(text, value)
    } catch (error) {
        return error
    }
}

const findUser = async (username) => {
    try {
        const text = "SELECT * FROM users WHERE username=$1"
        const value = [username]
        return await client.query(text, value)
    } catch (error) {
        return error
    }
}
const updatePwd = async (username, password) => {
    try {
        const text = "UPDATE users SET password = crypt($2, gen_salt('bf')) WHERE username = $1"
        const value = [username, password]
        return await client.query(text, value)
    } catch (error) {
        return error
    }
}

const getAllUsers = async () => {
    try {
        const text = "SELECT * FROM users"
        return await client.query(text)
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    validateUser,
    getAllUsers,
    findUser,
    findById,
    updatePwd,
}