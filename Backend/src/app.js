import { config } from 'dotenv'
config()

import express from 'express'
import cors from 'cors'

import userAuth_routes from './routes/user_auth.route.js'

// initialization
const app = express()
const port = process.env.POST || 4000

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/api', (req, res) => {
    res.json({'Message':'base path'})
})
// app.use('/api/docs', docs)
app.use('/api/user', userAuth_routes)

export default app