const assetsModel = require('../models/assetsModel');

const addNewAsset = async (assetObj) => {
  await assetsModel.addNewAsset(assetObj);
};

const getAvailableAssets = async () => {
  const assets = await assetsModel.getAvailableAssets();
  return assets;
};

module.exports = {
  addNewAsset,
  getAvailableAssets
};