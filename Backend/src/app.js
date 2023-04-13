// import dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// initialization
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api', require('./routes/user_auth'));
app.use('/api', require('./routes/inquiries'));

module.exports = app;