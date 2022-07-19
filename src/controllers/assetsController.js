const { Router } = require('express');
const assetsService = require('../services/assetsService');

const assetsController = Router();

// assetsController.get('/', async (req, res)=> {
//   const result = await assetsService.getAvailableAssets();
//   console.log('result: ', result);
//   return res.status(200).json(result);
// });

// assetsController.post('/', async (req, res)=> {
//   await assetsService.addNewAsset(req.body);
//   return res.status(200).json({msg: 'ok'});
// });

assetsController.get('/:idCliente', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});
// retorna todos ativos de cliente tal


assetsController.get('/:idAtivo', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// retorna informações do ativo tal (id/nome, valor, volume...)

assetsController.get('/b3', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// retorna todos ativos da b3

module.exports = assetsController;