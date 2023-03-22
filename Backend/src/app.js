// import dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// import files
const { generateTables, dropTables } = require('./database/generateTables')
const routes = require('./routes/routes')
const { swaggerServe, swaggerSetUp } = require('./routes/api_docs')

// initialization
const app = express()

// middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// api documentation
app.use('/api-docs', swaggerServe, swaggerSetUp)

// api routes
app.get('/api', (req, res) => {
    res.json({ 'Message': 'base path' })
})
app.use('/api', routes)

generateTables()

module.exports = app