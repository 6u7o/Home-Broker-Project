const { Router } = require('express');
const accountsController = require('./controllers/accountsController');
const assetsController = require('./controllers/assetsController');
const investmentsController = require('./controllers/investmentsController');

const routers = Router();

routers.use('/investimentos', investmentsController);
routers.use('/investimentos', investmentsController);

routers.use('/conta', accountsController);
routers.use('/conta', accountsController);
routers.use('/conta/', accountsController);


routers.use('/ativos', assetsController);
routers.use('/ativos', assetsController);
routers.use('/ativos', assetsController);


module.exports = routers;