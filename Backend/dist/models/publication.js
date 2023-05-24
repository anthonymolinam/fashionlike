"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../database/db.connection');
var Publication = sequelize.define('publication', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  desctiption: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
});
module.exports = Publication;