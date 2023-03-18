import e from "express";
import client from "./db.connect";

export const insertUser = async (username, email, password) => {
    try {
        const text = "INSERT INTO users(username, email, password) VALUES($1, $2, crypt($3, gen_salt('bf')))"
        const values = [username, email, password]
        const response = await client.query(text, values)
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

const selectUser = async (username, password) => {
    try {
        const text = 'SELECT username FROM users WHERE username=$1 AND password=crypt($2, password)'
        const values = [username, password]
        const response = await client.query(text, values)
        if (!response.rows.length) {
            return 'Nombre de usuario o contraseña incorrecto'
        }
        return 'Sesión iniciada'
    } catch (e) {
        return { 'error': e.detail }
    }
}

export const findUser = async (username, password) => {
    try {
        const text = 'SELECT username FROM users WHERE username=$1'
        const value = [username]
        const response = await client.query(text, value)
        if (!response.rows.length) {
            return 'Este nombre de usuario no existe'
        }
        return selectUser(username, password)
    } catch (e) {
        return { 'error': e.detail }
    }
}