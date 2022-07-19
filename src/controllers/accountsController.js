const { Router } = require('express');
const assetsService = require('../services/assetsService');

const accountsController = Router();

accountsController.post('/deposito', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});
// deposita algum valor na conta logada


accountsController.post('/saque', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// saca algum valor da conta logada

accountsController.get('/:idCliente', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// retorna informaçoes do cliente tal

module.exports = accountsController;