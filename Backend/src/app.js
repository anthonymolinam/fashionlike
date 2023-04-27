// import dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// initialization
const app = express()

// Middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API routes
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/post', require('./routes/post.routes'))

module.exports = app