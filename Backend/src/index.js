import { config } from 'dotenv'
config()

import app from './app'

async function main(port) {
    await app.listen(port, () => {
        console.log(`Express is now running on http://localhost:${port}`);
    })
}

const PORT = process.env.PORT || 4000
main(PORT)