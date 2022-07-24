const { Router } = require('express');
const { login, cadastro } = require('../controllers/loginController');
const { signupValidation } = require('../middlewares/signupValidation');
const loginRouter = Router();


/**
 * @swagger
 *  tags:
 *      name: Login
 *      description: Endpoints para login e cadastro
 */

loginRouter.post('/login', login);

/**
 * @swagger
 *  /login:
 *    post:  
 *      tags: [Login]
 *      description: Faz o login do cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/login"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/token"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

loginRouter.post('/cadastro', signupValidation, cadastro);

/**
 * @swagger
 *  /cadastro:
 *    post:  
 *      tags: [Login]
 *      description: Faz o cadastro do cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/cadastro"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/token"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

module.exports = loginRouter;