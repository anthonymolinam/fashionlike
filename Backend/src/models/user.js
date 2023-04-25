const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Post = require('./post')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }
}, {
    freezeTableName: true
})

User.hasMany(Post, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

Post.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'id'
})

module.exports = User