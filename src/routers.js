const { Router } = require('express');
const { tokenValidation } = require('./middlewares/tokenValidation');
const investmentsRouter = require('./routers/investmentsRouter');
const accountsRouter = require('./routers/accountsRouter');
const assetsRouter = require('./routers/assetsRouter');
const loginRouter = require('./routers/loginRouter');

const routers = Router();


routers.use('/investimentos', tokenValidation, investmentsRouter);

routers.use('/conta', tokenValidation, accountsRouter);

routers.use('/ativos', tokenValidation, assetsRouter);

routers.use('/', loginRouter);


module.exports = routers;