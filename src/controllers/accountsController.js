const accountsService = require('../services/accountsService');


const deposito = async (req, res)=> {
  const {user_id, value} = req.body;
  const response = await accountsService.deposit(user_id, value)
  return res.status(201).json(response);
};

const saque = async (req, res)=> {
  const {user_id, value} = req.body;
  const response = await accountsService.withdraw(user_id, value)
  if (!response) {
    return res.status(401).json({message: 'Saldo insuficiente para realizar o saque'});
  }
  return res.status(201).json(response);
};

const saldo = async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getUserInfo(idCliente);
  return res.status(200).json(response);
};

const ativosCliente = async (req, res)=> {
  const { idCliente } = req.params;
  const response = await accountsService.getAssetsByClientId(idCliente);
  return res.status(200).json(response);
};

module.exports = {
  deposito,
  saque,
  saldo,
  ativosCliente
};