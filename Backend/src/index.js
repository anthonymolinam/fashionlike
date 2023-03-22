const { config } = require('dotenv')
config()

const app = require('./app')

async function main(port) {
    await app.listen(port, () => {
        console.log(`Express is now running on http://localhost:${port}`);
    })
}

const PORT = process.env.PORT || 4000
main(PORT)