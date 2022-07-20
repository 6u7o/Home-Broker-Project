const assetsModel = require('../models/assetsModel');

const addNewAsset = async (stock) => {
  const result = await assetsModel.addNewAsset(stock);
  return result;
};

const getAllAssets = async () => {
  const assets = await assetsModel.getAllAssets();
  return assets;
};

const getAssetsByClientId = async (idCliente) => {
  const assets = await assetsModel.getAssetsByClientId(idCliente);
  return assets;
};

module.exports = {
  addNewAsset,
  getAllAssets,
  getAssetsByClientId
};