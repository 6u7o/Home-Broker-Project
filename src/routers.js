const { Router } = require('express');
const accountsController = require('./controllers/accountsController');
const assetsController = require('./controllers/assetsController');
const investmentsController = require('./controllers/investmentsController');
const loginController = require('./controllers/loginController');
const { tokenValidation } = require('./middlewares/tokenValidation');

const routers = Router();


routers.use('/investimentos', tokenValidation, investmentsController);

routers.use('/conta', tokenValidation, accountsController);

routers.use('/ativos', tokenValidation, assetsController);

routers.use('/', loginController);


module.exports = routers;