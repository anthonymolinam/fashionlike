import { config } from 'dotenv'
config()

import express from 'express'
import cors from 'cors'

import routes from './routes/user_auth.route.js'

const app = express()
const port = process.env.POST || 4000

// settings
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Express app is listening on http://localhost:${port}/api`);
})