const { DataTypes } = require('sequelize')
const sequelize = require('../database/db.connection')
const Pub = require('./publication')

const User = sequelize.define("user", {
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
        defaultValue: "user"
    }
}, {
    freezeTableName: true
});

Pub.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'id'
});

module.exports = User