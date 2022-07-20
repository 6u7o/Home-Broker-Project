const { Router } = require('express');
const investmentsService = require('../services/investmentsService');

const investmentsController = Router();

investmentsController.post('/comprar', async (req, res)=> {
  //  1.  validação para saber se o cliente já tem ações com este ID, se tiver, somar a quantidade comprada ao UsersAssets no DB
  //  2.  verificar se a quantidade a ser comprada está disponível
  const response = await investmentsService.buy(req.body);
  return res.status(200).json(response);
});

// envia uma ordem de compra


investmentsController.post('/vender', async (req, res)=> {
  //  3.  verificar se o usuário possui essa ação e se a quantidade não ultrapassa o que ele tem

  const response = await investmentsService.buy(req.body);
  return res.status(200).json(response);
});
// envia uma ordem de venda


// exemplo {
//   user_id: 1,
//   asset_id: 2,
//   asset_quantity: 20
// }



module.exports = investmentsController;