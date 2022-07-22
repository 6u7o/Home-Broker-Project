const { Router } = require('express');
const investmentsService = require('../services/investmentsService');
// const investmentsModel = require('../models/investimentsModel');
const orders = require('../middlewares/orders');

const investmentsController = Router();

investmentsController.post('/comprar', async (req, res)=> {
  //  1.  validação para saber se o cliente já tem ações com este ID, se tiver, somar a quantidade comprada ao UsersAssets no DB
  //  2.  verificar se a quantidade a ser comprada está disponível
  const response = await investmentsService.buy(req.body);
  if (!response) {
    return res.status(401).json({message: 'not enough funds to complete order'});
  }
  return res.status(201).json(response);
});

// envia uma ordem de compra


investmentsController.post('/vender', orders.salesValidation, async (req, res)=> {
  //  4.  verificar se o ID do asset existe no DB


  // const { user_id, asset_id,/*  asset_quantity */ } = req.body;

  const response = await investmentsService.sell(req.body);
  return res.status(201).json(response);
});
// envia uma ordem de venda

//  PAREI AQUI, NÃO ATUALIZOU O USERSASSETS DE 5 PRA 3


// exemplo {
//   user_id: 1,
//   asset_id: 2,
//   asset_quantity: 20
// }

investmentsController.get('/ativos/:idAtivo', async (req, res)=> {
  const { idAtivo } = req.params;
  const response = await investmentsService.getAssetInfoById(idAtivo);
  return res.status(200).json(response);
});



module.exports = investmentsController;