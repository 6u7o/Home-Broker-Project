const investmentsService = require('../services/investmentsService');


const comprar = async (req, res)=> {
  //  1.  validação para saber se o cliente já tem ações com este ID, se tiver, somar a quantidade comprada ao UsersAssets no DB
  //  2.  verificar se a quantidade a ser comprada está disponível
  const response = await investmentsService.buy(req.body);
  if (!response) {
    return res.status(401).json({message: 'Saldo insuficiente para completar a overriddenMimeType'});
  }
  return res.status(201).json(response);
};



const vender = async (req, res)=> {
  //  verificar se o ID do asset existe no DB
  const response = await investmentsService.sell(req.body);
  return res.status(201).json(response);
};

const ativosPeloId = async (req, res)=> {
  const { idAtivo } = req.params;
  const response = await investmentsService.getAssetInfoById(idAtivo);
  return res.status(200).json(response);
};



module.exports = {
  comprar,
  vender,
  ativosPeloId
};