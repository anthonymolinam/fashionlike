// import dependencies
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'

// import files
import { generateTables, dropTables } from './database/generateTables'
import routes from './routes/routes'
import apidocs from './routes/api_docs'
import { swaggerDocs } from './routes/api_docs'

// initialization
const app = express()

// middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// api documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// api routes
app.get('/api', (req, res) => {
    res.json({ 'Message': 'base path' })
})
app.use('/api', routes)

generateTables()

export default app