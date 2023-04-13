const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')
const { version } = require('../../package.json')

const swaggerSpec = {
    definition: {
        openapi: '3.0.2',
        info: {
            title: 'FashionLike API Documentation',
            version
        },
        servers: [{
            url: `http://localhost:${process.env.PORT}/api`,
            description: 'Development Server',
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }

    },
    apis: [
        `${path.join(__dirname, '../docs/*.yaml')}`
    ],

}

function swaggerDocs(app, port) {
    try {
        app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)));
        app.get('/api/docs.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        })
        console.log(`Docs available at http://localhost:${port}/api/docs\n`);
    } catch (e) {
        console.log(e);
    }
}

module.exports = swaggerDocs;