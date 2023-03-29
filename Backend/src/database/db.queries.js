const client = require("./db.connect")

const createUser = async (username, email, password) => {
    try {
        const text = "INSERT INTO users(username, email, password) VALUES($1, $2, crypt($3, gen_salt('bf')))"
        const values = [username, email, password]
        return await client.query(text, values)
    } catch (e) {
        return e
    }
}

const validateUser = async (username, password) => {
    try {
        const text = "SELECT * FROM users WHERE username=$1 AND password=crypt($2, password)"
        const value = [username, password]
        return await client.query(text, value)
    } catch (e) {
        return e
    }
}

const findUser = async (username) => {
    try {
        const text = "SELECT * FROM users WHERE username=$1"
        const value = [username]
        return await client.query(text, value)
    } catch (e) {
        return e
    }
}

module.exports = {
    createUser,
    validateUser,
    findUser
}