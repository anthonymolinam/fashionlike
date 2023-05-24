"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/database');
var PostSchema = require('./post');
var UserSchema = sequelize.define('users', {
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
});
UserSchema.hasMany(PostSchema, {
  foreignKey: 'userId',
  sourceKey: 'id'
});
PostSchema.belongsTo(UserSchema, {
  foreignKey: 'userId',
  targetId: 'id'
});
module.exports = UserSchema;