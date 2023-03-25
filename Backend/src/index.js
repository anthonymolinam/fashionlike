const { config } = require("dotenv")
config()

const { generateTables, dropTables } = require("./database/generateTables")
const swaggerDocs = require("./swagger-docs/swagger")
const app = require("./app")
const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`\nExpress is now running on port ${port}`);
    generateTables()
    swaggerDocs(app, port)
})

