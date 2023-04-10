// import dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// import routes
const userAuth = require("./routes/userAuth.routes");
const userRoute = require("./routes/user.routes");

// initialization
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use("/v1/auth", userAuth);
app.use("/v1/user", userRoute);

module.exports = app