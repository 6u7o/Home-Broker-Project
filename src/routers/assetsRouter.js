const { Router } = require('express');
const { getAllAssets, createAsset } = require('../controllers/assetsController');
const assetsRouter = Router();

assetsRouter.get('/', getAllAssets);

assetsRouter.post('/', createAsset);

module.exports = assetsRouter;