const { Router } = require('express');
const { getAllAssets, createAsset } = require('../controllers/assetsController');
const assetsRouter = Router();

/**
 * @swagger
 *  tags:
 *      name: Ativos
 *      description: Endpoints para ativos
 */

assetsRouter.get('/', getAllAssets);

/**
 * @swagger
 *  /ativos/:
 *    get:  
 *      tags: [Ativos]
 *      description: Retorna todos os ativos
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
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

assetsRouter.post('/', createAsset);

/**
 * @swagger
 *  /ativos/:
 *    post:  
 *      tags: [Ativos]
 *      description: adiciona um novo ativo
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/ativo"
 *        401:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/errorToken"
 */

module.exports = assetsRouter;