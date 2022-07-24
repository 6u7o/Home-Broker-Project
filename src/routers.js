const { Router } = require('express');
const { tokenValidation } = require('./middlewares/tokenValidation');
const investmentsRouter = require('./routes/investmentsRouter');
const accountsRouter = require('./routes/accountsRouter');
const assetsRouter = require('./routes/assetsRouter');
const loginRouter = require('./routes/loginRouter');

const routers = Router();


routers.use('/investimentos', tokenValidation, investmentsRouter);

routers.use('/conta', tokenValidation, accountsRouter);

routers.use('/ativos', tokenValidation, assetsRouter);

routers.use('/', loginRouter);


module.exports = routers;