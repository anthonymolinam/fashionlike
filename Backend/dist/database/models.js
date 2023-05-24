"use strict";

var userModel = "CREATE TABLE IF NOT EXISTS users(" + "id SERIAL PRIMARY KEY," + "token VARCHAR NOT NULL DEFAULT 'Unknow'," + "username VARCHAR(64) UNIQUE," + "email VARCHAR(255) UNIQUE," + "password VARCHAR NOT NULL," + "verified BOOLEAN DEFAULT FALSE," + "daterelease DATE NOT NULL DEFAULT CURRENT_DATE," + "dateupdate DATE NOT NULL DEFAULT CURRENT_DATE)";
var publicationModel = "CREATE TABLE IF NOT EXISTS publication(" + "userId INTEGER REFERENCES users(id)," + "description VARCHAR(300)," + "daterelease DATE NOT NULL DEFAULT CURRENT_DATE)";
module.exports = {
  userModel: userModel,
  publicationModel: publicationModel
};