require('dotenv').config();

const { HEROKU_URL } = process.env

const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Home Broker API com Swagger',
      description: 'Api de uma conta de investimentos',
      version: '1.0'
    },
    servers: [{
      url: HEROKU_URL,
      description: 'servidor local'
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
    './src/routers.js',
    './src/routes/accountsRouter.js',
    './src/routes/investmentsRouter.js',
    './src/routes/assetsRouter.js',
    './src/routes/loginRouter.js',
  ]
}

module.exports = swaggerConfig;