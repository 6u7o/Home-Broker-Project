const { Router } = require('express');
const { deposito, saque, saldo, ativosCliente } = require('../controllers/accountsController');
const { reqBodyIdValidation, reqParamsIdValidation } = require('../middlewares/userOrderValidation');

const accountsRouter = Router();

accountsRouter.post('/deposito', reqBodyIdValidation, deposito);

accountsRouter.post('/saque', reqBodyIdValidation, saque);

accountsRouter.get('/:idCliente', reqParamsIdValidation, saldo);

accountsRouter.get('/ativos/:idCliente', reqParamsIdValidation, ativosCliente);

module.exports = accountsRouter;