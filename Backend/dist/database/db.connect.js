"use strict";

var _require = require("dotenv"),
  config = _require.config;
config();
var _require2 = require("pg"),
  Client = _require2.Client;
var client = new Client({
  databse_url: process.env.PGDATABASE_URL,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  user: process.env.PGUSER
});
client.connect();
module.exports = client;