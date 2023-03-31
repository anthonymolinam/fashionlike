const userModel = "CREATE TABLE IF NOT EXISTS users(" +
    "id SERIAL PRIMARY KEY," +
    "username VARCHAR(64) UNIQUE," +
    "email VARCHAR(255) UNIQUE," +
    "password VARCHAR NOT NULL," +
    "verified BOOLEAN DEFAULT FALSE," +
    "role VARCHAR DEFAULT 'user'," +
    "daterelease DATE NOT NULL DEFAULT CURRENT_DATE," +
    "dateupdate DATE NOT NULL DEFAULT CURRENT_DATE)"

const publicationModel = "CREATE TABLE IF NOT EXISTS publication(" +
    "userId INTEGER REFERENCES users(id)," +
    "description VARCHAR(300)," +
    "daterelease DATE NOT NULL DEFAULT CURRENT_DATE)"

module.exports = {
    userModel,
    publicationModel
}