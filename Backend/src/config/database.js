const { Sequelize } = require('sequelize')
require('dotenv').config()

// const sequelize = new Sequelize(process.env.DATABASE_URL)
const sequelize = new Sequelize('fashionlike', 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize