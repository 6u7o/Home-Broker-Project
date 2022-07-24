const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./docs/swagger.config');
const swaggerUi = require('swagger-ui-express')
const routers = require('./routers');
const app = express();


app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(routers);
module.exports = app;