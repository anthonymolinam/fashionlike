import { userModel, publicationModel } from "./models"
import client from "./db.connect"

export const generateTables = async () => {
    try {
        await client.query(userModel)
        await client.query(publicationModel)
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database:', error)
    }
}

export const dropTables = async () => {
    try {
        await client.query('DROP TABLE publication, users')
        console.log('Tables has been deleted');
    } catch (error) {
        console.error(error)
    }
}