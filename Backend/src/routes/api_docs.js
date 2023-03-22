import swaggerJsDoc from 'swagger-jsdoc'

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

export const swaggerDocs = swaggerJsDoc(options)