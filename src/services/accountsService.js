const accountsModel = require('../models/accountsModel');

const getUserInfo = async (user_id) => {
  const [result] = await accountsModel.getUserInfo(user_id);
  return result;
}


const getAssetsByClientId = async (idCliente) => {
  const assets = await accountsModel.getAssetsByClientId(idCliente);
  return assets;
};

const deposit = async (user_id, deposit_value) => {
  const [userInfo] = await accountsModel.getUserInfo(user_id);
  const { balance } = userInfo;
  const amount = balance + deposit_value
  const result = await accountsModel.updateUserBalance(user_id, amount);
  return result;
}

const withdraw = async (user_id, withdraw_value) => {
  const [userInfo] = await accountsModel.getUserInfo(user_id);
  const { balance } = userInfo;
  const amount = balance - withdraw_value
  if (amount < 0) {
    return false;
  } else {
    const result = await accountsModel.updateUserBalance(user_id, amount);
    return result;
  }
}

module.exports = {
  getUserInfo,
  getAssetsByClientId,
  deposit,
  withdraw
};