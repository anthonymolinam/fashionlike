import { userTable, pubTable } from "./db.models"
import client from "./db.connect"

export const createTables = async () => {
    try {
        await client.query(userTable)
        await client.query(pubTable)
        console.log('Successful connection to database')
    } catch (error) {
        console.error(error)
        console.log('Cannot connect to database')
    }
}

/* export const deleteTables = async () => {
    try {
        await client.query('DROP TABLE publication, users')
        console.log('Tables has been deleted');
    } catch (error) {
        console.error(error)
    }
} */