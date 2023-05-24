"use strict";

var _require = require('sequelize'),
  Sequelize = _require.Sequelize;
require('dotenv').config();
var sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'mssql'
});
module.exports = sequelize;