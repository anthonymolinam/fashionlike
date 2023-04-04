// import dependencies
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// import routes
const userAuth = require("./routes/user/auth")
const userPool = require("./routes/user/pool")

// initialization
const app = express()

// Middlewares
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API routes
app.use("/api/user", userAuth)
app.use("/api/users", userPool)

module.exports = app