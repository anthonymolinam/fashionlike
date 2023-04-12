require("dotenv").config();
const sequelize = require('./config/database');
const swaggerDocs = require("./config/swagger");

const app = require("./app");
const port = process.env.PORT || 4000;


async function main() {
    try {
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`\nServer is on`);
            swaggerDocs(app, port)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();