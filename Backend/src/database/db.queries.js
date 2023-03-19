import client from "./db.connect";

export const createUser = async (username, email, password) => {
    try {
        const insertInto = "INSERT INTO users(username, email, password) VALUES($1, $2, crypt($3, gen_salt('bf')))"
        const insertValues = [username, email, password]
        const response = await client.query(insertInto, insertValues)
        return response
    } catch (e) {
        return e.detail.includes('username') ? {
            'error': e.detail,
            'message': 'Este nombre de usuario ya está registrado'
        } : {
            'error': e.detail,
            'message': 'Este email ya está registrado'
        }
    }
}

const validateUser = async (username, password) => {
    try {
        const selectUserPwd = 'SELECT username FROM users WHERE username=$1 AND password=crypt($2, password)'
        const selectUserPwdValues = [username, password]
        const response = await client.query(selectUserPwd, selectUserPwdValues)
        return !response.rows.length ? {
            'message': 'Nombre de usuario o contraseña incorrecto'
        } : {
            'message': 'Sesión iniciada'
        }
    } catch (e) {
        return { 'error': e.detail }
    }
}

export const findUser = async (username, password) => {
    try {
        const selectUser = 'SELECT username FROM users WHERE username=$1'
        const selectUserValue = [username]
        const response = await client.query(selectUser, selectUserValue)
        return !response.rows.length ? { 'message': 'Este nombre de usuario no existe' } : validateUser(username, password)
    } catch (e) {
        return { 'error': e.detail }
    }
}