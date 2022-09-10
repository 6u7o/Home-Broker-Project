const investmentsModel = require('../models/investimentsModel');
const assetsModel = require('../models/assetsModel')
const accountsModel = require('../models/accountsModel')

const buy = async (buyOrder) => {
  const { user_id, asset_id, asset_quantity } = buyOrder;
  const [assetInfo] = await assetsModel.getAssetInfo(asset_id)
  const { asset_price, available_quantity } = assetInfo;
  const total = asset_price * asset_quantity;
  const newAssetAmount = available_quantity - asset_quantity;
  const [userInfo] = await accountsModel.getUserInfo(user_id);

  if (total > userInfo.balance) {
    return false
  }

  const [response] = await investmentsModel.checkUserAssetStatus(user_id, asset_id);
  console.log(response);

  let result;
  if (!response) {
    if (newAssetAmount <= 0) {
      const newOrder = {
        user_id,
        asset_id,
        asset_quantity: available_quantity
      }
  
      result = await investmentsModel.buy(newOrder, asset_price);
      await investmentsModel.sumAssetQuant(0, 0, asset_id)
  
      const newTotal = available_quantity * asset_price;
      await investmentsModel.sumUserBalance(user_id, newTotal)
    } else {
      result = await investmentsModel.buy(buyOrder, asset_price);
      await investmentsModel.subtractAssetQuant(available_quantity, asset_quantity, asset_id)
      await investmentsModel.subtractUserBalance(user_id, total)
    }
  } else {
    const { id, asset_quantity: currentAmount } = response;
    const newAmount = currentAmount + asset_quantity;
    if (newAssetAmount <= 0) {
      const newOrder = {
        user_id,
        asset_id,
        asset_quantity: available_quantity
      }
      result = await investmentsModel.updateBuy(id, newAmount, newOrder, asset_price);
      // result = await investmentsModel.buy(newOrder, asset_price);
      await investmentsModel.sumAssetQuant(0, 0, asset_id)
  
      const newTotal = available_quantity * asset_price;
      await investmentsModel.sumUserBalance(user_id, newTotal)
    } else {
      result = await investmentsModel.updateBuy(id, newAmount, buyOrder, asset_price);
      // result = await investmentsModel.buy(buyOrder, asset_price);
      await investmentsModel.subtractAssetQuant(available_quantity, asset_quantity, asset_id)
      await investmentsModel.subtractUserBalance(user_id, total)
    }
  }
  return result;
};

const sell = async (sellOrder) => {
  const { user_id, asset_id, asset_quantity } = sellOrder;
  const [response] = await investmentsModel.checkUserAssetStatus(user_id, asset_id);
  const { id, asset_quantity: currentAmount } = response;
  const newAmount = currentAmount - asset_quantity;
  let result;
  const [assetInfo] = await assetsModel.getAssetInfo(asset_id)
  const { asset_price, available_quantity } = assetInfo;
  if (newAmount <= 0) {
    result =  await investmentsModel.deleteUsersAsset(id);
    await investmentsModel.sumAssetQuant(available_quantity, currentAmount, asset_id)
    const total = asset_price * currentAmount;
    await investmentsModel.sumUserBalance(user_id, total)
  } else {
    result = await investmentsModel.sell(id, newAmount, sellOrder, asset_price);
    await investmentsModel.sumAssetQuant(available_quantity, asset_quantity, asset_id)
    const total = asset_price * asset_quantity;
    await investmentsModel.sumUserBalance(user_id, total)
  } 
  return result;
};

const getAssetInfoById = async (idAtivo) => {
  const assetInfo = await assetsModel.getAssetInfo(idAtivo);
  return assetInfo;
};

module.exports = {
  buy,
  sell,
  getAssetInfoById
};