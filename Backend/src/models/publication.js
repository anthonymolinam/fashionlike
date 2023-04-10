const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

const Publication = sequelize.define('publication', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    desctiption: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true
});

module.exports = Publication;