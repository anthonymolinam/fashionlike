"use strict";

var _require = require("sequelize"),
  Sequelize = _require.Sequelize;
require("dotenv").config();
var sequelize = new Sequelize(process.env.PGDATABASE_URL);
module.exports = sequelize;