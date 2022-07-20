const { Router } = require('express');
const accountsService = require('../services/accountsService');

const accountsController = Router();

accountsController.post('/deposito', async (req, res)=> {
  await accountsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});
// deposita algum valor na conta logada


accountsController.post('/saque', async (req, res)=> {
  await accountsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// saca algum valor da conta logada

accountsController.get('/:idCliente', async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getUserInfo(idCliente);
  return res.status(200).json(response);
});

// retorna informaçoes do cliente tal


accountsController.get('/ativos/:idCliente', async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getAssetsByClientId(idCliente);
  return res.status(200).json(response);
});

module.exports = accountsController;