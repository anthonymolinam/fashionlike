export const pubTable = "CREATE TABLE IF NOT EXISTS publication(" +
    "userId INTEGER REFERENCES users(id)," +
    "description VARCHAR(300)," +
    "daterelease DATE NOT NULL DEFAULT CURRENT_DATE)"