const { Router } = require('express');
const accountsService = require('../services/accountsService');

const accountsController = Router();

accountsController.post('/deposito', async (req, res)=> {
  const {user_id, value} = req.body;
  const response = await accountsService.deposit(user_id, value)
  return res.status(200).json(response);
});

accountsController.post('/saque', async (req, res)=> {
  const {user_id, value} = req.body;
  const response = await accountsService.withdraw(user_id, value)
  if (!response) {
    return res.status(404).json({message: 'not enough funds to complete withdraw'});
  }
  return res.status(200).json(response);
});

accountsController.get('/:idCliente', async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getUserInfo(idCliente);
  return res.status(200).json(response);
});

accountsController.get('/ativos/:idCliente', async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getAssetsByClientId(idCliente);
  return res.status(200).json(response);
});

module.exports = accountsController;