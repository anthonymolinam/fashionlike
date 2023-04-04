require("dotenv").config()

const swaggerDocs = require("./doc/swagger");
const app = require("./app");
const port = process.env.PORT || 4000;

const sequelize = require('./database/db.connection')

async function main() {
    try {
        await sequelize.sync({ alter: true });
        app.listen(port, () => {
            console.log(`\nServer is on`);
            swaggerDocs(app, port)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()