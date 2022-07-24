const assetsModel = require('../models/assetsModel');

const addNewAsset = async (stock) => {
  const result = await assetsModel.addNewAsset(stock);
  return result;
};

const getAllAssets = async () => {
  const assets = await assetsModel.getAllAssets();
  return assets;
};



module.exports = {
  addNewAsset,
  getAllAssets,
};