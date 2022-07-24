const { Router } = require('express');
const { deposito, saque, saldo, ativosCliente } = require('../controllers/accountsController');
const { reqBodyIdValidation, reqParamsIdValidation } = require('../middlewares/userOrderValidation');

const accountsRouter = Router();

/**
 * @swagger
 *  tags:
 *      name: Conta
 *      description: Endpoints para conta
 */



/**
 * @swagger
 * components:
 *  schemas:
 *    Saldo:
 *      type: object
 *      required:
 *          - id
 *          - user_name
 *          - email
 *          - password
 *          - balance
 *      properties:
 *          id:
 *            type: number
 *          user_name:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *          balance:
 *            type: number
 *    errorToken:
 *      type: object
 *      required:
 *          - message
 *      properties:
 *          message:
 *            type: string
 *    objOperacao:
 *      type: object
 *      required:
 *          - user_id
 *          - value
 *      properties:
 *          user_id:
 *            type: number
 *          value:
 *            type: number
 *    ativoUsuario:
 *      type: object
 *      required:
 *          - id
 *          - user_id
 *          - asset_id
 *          - asset_quantity
 *      properties:
 *          id:
 *            type: number
 *          user_id:
 *            type: number
 *          asset_id:
 *            type: number
 *          asset_quantity:
 *            type: number
 *    ativo:
 *      type: object
 *      required:
 *          - id
 *          - asset_name
 *          - available_quantity
 *          - asset_price
 *      properties:
 *          id:
 *            type: number
 *          asset_name:
 *            type: string
 *          available_quantity:
 *            type: number
 *          asset_price:
 *            type: number
 *    login:
 *      type: object
 *      required:
 *          - email
 *          - password
 *      properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 *    token:
 *      type: object
 *      required:
 *          - token
 *      properties:
 *          token:
 *            type: string
 *      example:
 *          token: XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *    cadastro:
 *      type: object
 *      required:
 *          - name
 *          - email
 *          - password
 *      properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *    ativoOperacao:
 *      type: object
 *      required:
 *          - user_id
 *          - asset_id
 *          - asset_quantity
 *      properties:
 *          user_id:
 *            type: number
 *          asset_id:
 *            type: number
 *          asset_quantity:
 *            type: number
 *    ativoRecibo:
 *      type: object
 *      required:
 *          - id
 *          - user_id
 *          - asset_id
 *          - asset_quantity
 *      properties:
 *          id:
 *            type: number
 *          user_id:
 *            type: number
 *          asset_id:
 *            type: number
 *          asset_quantity:
 *            type: number
 */

accountsRouter.get('/:idCliente', reqParamsIdValidation, saldo);

/**
 * @swagger
 *  /conta/{idCliente}:
 *    get:  
 *      tags: [Conta]
 *      description: Retorna as informações da conta do usuário
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: idCliente
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Saldo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

accountsRouter.post('/deposito', reqBodyIdValidation, deposito);

/**
 * @swagger
 *  /conta/deposito:
 *    post:  
 *      tags: [Conta]
 *      description: Deposita na conta do cliente
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/objOperacao"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Saldo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */


accountsRouter.post('/saque', reqBodyIdValidation, saque);

/**
 * @swagger
 *  /conta/saque:
 *    post:  
 *      tags: [Conta]
 *      description: Saca da conta do cliente
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/objOperacao"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Saldo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

accountsRouter.get('/ativos/:idCliente', reqParamsIdValidation, ativosCliente);

/**
 * @swagger
 *  /conta/ativos/{idCliente}:
 *    get:  
 *      tags: [Conta]
 *      description: Retorna os ativos do usuário
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: idCliente
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/ativoUsuario"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

module.exports = accountsRouter;