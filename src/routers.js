const { Router } = require('express');
const assetsController = require('./controllers/assetsController');

const routers = Router();

routers.use('/assets', assetsController);

module.exports = routers;