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
  // validação para não permitir a compra se o usuário não tiver saldo para isso
  if (total > userInfo.balance) {
    return false
  }
  let result;
  // validação para não permitir compra maior do que disponível para venda
  if (newAssetAmount <= 0) {
    const newOrder = {
      user_id,
      asset_id,
      available_quantity
    }
    // PRA FAZER: verificação para saber se o usuário já não possui uma ação desse tipo, se sim, somar a quantidade comprada ao UsersAssets

    result = await investmentsModel.buy(newOrder);
    await investmentsModel.sumAssetQuant(0, 0, asset_id)

    const newTotal = available_quantity * asset_price;
    await investmentsModel.sumUserBalance(user_id, newTotal)
  } else {
    result = await investmentsModel.buy(buyOrder);
    await investmentsModel.subtractAssetQuant(available_quantity, asset_quantity, asset_id)
    await investmentsModel.subtractUserBalance(user_id, total)
  }
  return result;
};

const sell = async (sellOrder) => {
  const { user_id, asset_id, asset_quantity } = sellOrder;
  const [response] = await investmentsModel.checkUserAssetStatus(user_id, asset_id);
  const { id, asset_quantity: currentAmount } = response;
  const newAmount = currentAmount - asset_quantity;
  let result;
  console.log('newAmount: ', newAmount);
  const [assetInfo] = await assetsModel.getAssetInfo(asset_id)
  const { asset_price, available_quantity } = assetInfo;
  if (newAmount <= 0) {
    result =  await investmentsModel.deleteUsersAsset(id);
    await investmentsModel.sumAssetQuant(available_quantity, currentAmount, asset_id)
    const total = asset_price * currentAmount;
    await investmentsModel.sumUserBalance(user_id, total)
  } else {
    result = await investmentsModel.sell(id, newAmount);
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