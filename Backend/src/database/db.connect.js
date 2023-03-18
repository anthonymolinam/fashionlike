import { config } from 'dotenv'
config()
import { Client } from 'pg'

const client = new Client({
    databse_url: process.env.PGDATABASE_URL,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER
})
client.connect()

export default client