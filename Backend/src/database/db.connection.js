const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.PGDATABASE_URL);

module.exports = sequelize;