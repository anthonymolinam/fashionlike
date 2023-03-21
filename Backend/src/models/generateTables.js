import { userTable } from "./user"
import { pubTable } from "./publication"
import client from "../database/db.connect"

export const generateTables = async () => {
    try {
        await client.query(userTable)
        await client.query(pubTable)
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database:', error)
    }
}

/* export const dropTables = async () => {
    try {
        await client.query('DROP TABLE publication, users')
        console.log('Tables has been deleted');
    } catch (error) {
        console.error(error)
    }
} */