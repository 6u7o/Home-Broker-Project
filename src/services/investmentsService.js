const investmentsModel = require('../models/investimentsModel');
const assetsModel = require('../models/assetsModel')

const buy = async (buyOrder) => {
  const { user_id, asset_id, asset_quantity } = buyOrder;
  const result = await investmentsModel.buy(buyOrder);
  const [assetInfo] = await assetsModel.getAssetInfo(asset_id)
  const { asset_price, available_quantity } = assetInfo;
  await investmentsModel.subtractAssetQuant(available_quantity, asset_quantity, asset_id)
  const total = asset_price * asset_quantity;
  await investmentsModel.subtractUserBalance(user_id, total)
  return result;
};

const sell = async () => {
  const assets = await investmentsModel.sell();
  return assets;
};

module.exports = {
  buy,
  sell
};