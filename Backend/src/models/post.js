const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const PostSchema = sequelize.define('posts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true
})

module.exports = PostSchema