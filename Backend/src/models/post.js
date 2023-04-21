const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

module.exports = Post