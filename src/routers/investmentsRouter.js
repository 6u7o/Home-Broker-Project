const { Router } = require('express');
const orders = require('../middlewares/orders');
const { reqBodyIdValidation } = require('../middlewares/userOrderValidation');
const { comprar, vender, ativosPeloId } = require('../controllers/investmentsController')

const investmentsRouter = Router();

investmentsRouter.post('/comprar', reqBodyIdValidation, comprar );

investmentsRouter.post('/vender', reqBodyIdValidation, orders.salesValidation, vender );

investmentsRouter.get('/ativos/:idAtivo', ativosPeloId );


module.exports = investmentsRouter;