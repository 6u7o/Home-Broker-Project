const accountsModel = require('../models/accountsModel');

const getUserInfo = async (user_id) => {
  const [result] = await accountsModel.getUserInfo(user_id);
  return result;
}


const getAssetsByClientId = async (idCliente) => {
  const assets = await accountsModel.getAssetsByClientId(idCliente);
  return assets;
};

module.exports = {
  getUserInfo,
  getAssetsByClientId
};