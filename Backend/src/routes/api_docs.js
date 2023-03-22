const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const options = {
    definition: {
        info: {
            version: "1.0.0",
            title: "API Docs",
            description: "API Documentation for use",
            contact: {
                name: "Alberto González",
                url: "https://www.linkedin.com/in/albertoagonzalezm/",
            },
            servers: ["http://localhost:4000"]
        }
    },
    basePath: "/",
    apis: ["./routes/api_docs.js"]
}

const swaggerServe = swaggerUi.serve
const swaggerSetUp = swaggerUi.setup(swaggerJsDoc(options))

module.exports = {
    swaggerServe,
    swaggerSetUp
}