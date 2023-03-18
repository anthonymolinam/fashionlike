'use strict'
import { insertUser, findUser } from '../database/db.queries'

export const login = async (req, res) => {
    const { username, password } = req.query
    const response = await findUser(username, password)
    res.json({ 'response': response })
}

export const signup = async (req, res) => {
    const { username, email, password } = req.query
    const response = await insertUser(username, email, password)
    res.json({ 'response': response })
}