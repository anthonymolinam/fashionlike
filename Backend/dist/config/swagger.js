"use strict";

var swaggerJsDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var path = require('path');
var _require = require('../../package.json'),
  version = _require.version;
var swaggerSpec = {
  definition: {
    openapi: '3.0.2',
    info: {
      title: 'FashionLike API Documentation',
      version: version
    },
    servers: [{
      url: "http://localhost:".concat(process.env.PORT, "/api"),
      description: 'Development Server'
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
  apis: ["".concat(path.join(__dirname, '../docs/*.yaml'))]
};
function swaggerDocs(app, port) {
  try {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)));
    app.get('/api/docs.json', function (req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });
    console.log("Docs available at http://localhost:".concat(port, "/api/docs\n"));
  } catch (e) {
    console.log(e);
  }
}
module.exports = swaggerDocs;