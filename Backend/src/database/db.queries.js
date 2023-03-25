const { response } = require("express")
const client = require("./db.connect")

const createUser = async (username, email, password) => {
    try {
        const text = "INSERT INTO users(username, email, password) VALUES($1, $2, crypt($3, gen_salt('bf')))"
        const values = [username, email, password]
        const response = await client.query(text, values)
        return { "response": "Usuario creado" }
    } catch (e) {
        return e.detail.includes("username" || username) ? {
            "error": e.detail,
            "response": "Este nombre de usuario ya está registrado"
        } : {
            "error": e.detail,
            "response": "Este email ya está registrado"
        }
    }
}

const validateUser = async (username, password) => {
    const finduser = await findUser(username)
    if (finduser == "found") {
        try {
            const text = "SELECT username FROM users WHERE username=$1 AND password=crypt($2, password)"
            const value = [username, password]
            const response = await client.query(text, value)
            return !response.rows.length ? {
                "response": "contraseña incorrecta"
            } : {
                "response": "Sesión iniciada"
            }
        } catch (e) {
            return { "error": e.detail }
        }
    }
    return finduser
}

const findUser = async (username) => {
    try {
        const text = "SELECT username FROM users WHERE username=$1"
        const value = [username]
        const response = await client.query(text, value)
        if (!response.rows.length) {
            return { "response": "Este nombre de usuario no esta registrado" }
        }
        return "found"
    } catch (e) {
        return { "error": e.detail }
    }
}

module.exports = {
    createUser,
    validateUser,
    findUser
}