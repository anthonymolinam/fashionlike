require("dotenv").config()

const { generateTables, dropTables } = require("./database/generateTables")
const swaggerDocs = require("./doc/swagger")
const app = require("./app")
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`\nExpress is now running on port ${port}`);
    // dropTables()
    generateTables()
    swaggerDocs(app, port)
})