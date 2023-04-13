const sequelize = require('./config/database');
const swaggerDocs = require('./config/swagger');
require('dotenv').config()

const app = require('./app');
const port = process.env.PORT;

app.listen(port, async () => {
    console.log(`\nServer is on`);
    try {
        await sequelize.sync();
        swaggerDocs(app, port)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
