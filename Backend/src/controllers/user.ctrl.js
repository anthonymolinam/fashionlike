import { createUser, validateUser } from '../database/db.queries'

export const login = async (req, res) => {
    const { username, password } = req.query
    const response = await validateUser(username, password)
    res.json(response)
}

export const signup = async (req, res) => {
    const { username, email, password } = req.query
    const response = await createUser(username, email, password)
    res.json(response)
}