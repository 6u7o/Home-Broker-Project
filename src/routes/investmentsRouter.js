const { Router } = require('express');
const orders = require('../middlewares/orders');
const { reqBodyIdValidation } = require('../middlewares/userOrderValidation');
const { comprar, vender, ativosPeloId } = require('../controllers/investmentsController')

const investmentsRouter = Router();

/**
 * @swagger
 *  tags:
 *      name: Investimentos
 *      description: Endpoints para investimentos
 */


investmentsRouter.post('/comprar', reqBodyIdValidation, comprar );


/**
 * @swagger
 *  /investimentos/comprar:
 *    post:  
 *      tags: [Investimentos]
 *      description: Compra ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/ativoOperacao"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/ativoRecibo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

investmentsRouter.post('/vender', reqBodyIdValidation, orders.salesValidation, vender );

/**
 * @swagger
 *  /investimentos/vender:
 *    post:  
 *      tags: [Investimentos]
 *      description: Vende ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/ativoOperacao"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/ativoRecibo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

investmentsRouter.get('/ativos/:idAtivo', ativosPeloId );

/**
 * @swagger
 *  /investimentos/ativos/{idAtivo}:
 *    get:  
 *      tags: [Investimentos]
 *      description: Informações de um ativo
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: idAtivo
 *          type: string
 *          required: true
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/ativo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */


module.exports = investmentsRouter;