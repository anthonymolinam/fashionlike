const { config } = require('dotenv')
config()

const { Client } = require('pg')

const client = new Client({
    databse_url: process.env.PGDATABASE_URL,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER
})
client.connect()

module.exports = client