const { Router } = require('express');
const assetsService = require('../services/assetsService');

const assetsController = Router();

assetsController.get('/', async (req, res)=> {
  const result = await assetsService.getAvailableAssets();
  console.log('result: ', result);
  return res.status(200).json(result);
});

assetsController.post('/', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

module.exports = assetsController;