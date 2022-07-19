const { Router } = require('express');
const assetsService = require('../services/assetsService');

const investmentsController = Router();

investmentsController.post('/vender', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});
// envia uma ordem de venda


investmentsController.post('/comprar', async (req, res)=> {
  await assetsService.addNewAsset(req.body);
  return res.status(200).json({msg: 'ok'});
});

// envia uma ordem de compra

module.exports = investmentsController;