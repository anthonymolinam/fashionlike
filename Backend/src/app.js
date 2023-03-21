// import dependencies
import express from 'express'
import cors from 'cors'

// import files
import { generateTables } from './models/generateTables'
import userAuth_routes from './routes/user_auth.route'

// initialization
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/api', (req, res) => {
    res.json({ 'Message': 'base path' })
})
// app.use('/api/docs', docs)
app.use('/api/user', userAuth_routes)

generateTables()

export default app