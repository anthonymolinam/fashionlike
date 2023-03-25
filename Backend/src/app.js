// import dependencies
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// import routes
const userRoutes = require("./routes/user_auth")
const testRouter = require("./routes/test")

// initialization
const app = express()

// Middlewares dependencies
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API routes middlewares
app.use("/api/user", userRoutes)
app.use("/api/test", testRouter)

module.exports = app