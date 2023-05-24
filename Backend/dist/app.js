"use strict";

// import dependencies
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');

// initialization
var app = express();

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// API routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/post', require('./routes/post.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
module.exports = app;