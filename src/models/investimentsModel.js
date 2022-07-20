const supabase = require('../db/connection');
const accountsModel = require('../models/accountsModel')
// const assetsModel = require('../models/assetsModel')

const buy = async (buyOrder) => {
  const { data } = await supabase.from('UsersAssets')
    .insert([buyOrder])
  return data;
}

const subtractAssetQuant = async (current_quantity, bought_quantity, asset_id) => {
  const newQuant = current_quantity - bought_quantity;
  const { data } = await supabase.from('Assets')
    .update({ available_quantity: newQuant })
    .match({ id: asset_id})
  return data;
}

const sumAssetQuant = async (current_quantity, sold_quantity, asset_id) => {
  const newQuant = current_quantity + sold_quantity;
  const { data } = await supabase.from('Assets')
    .update({ available_quantity: newQuant })
    .match({ id: asset_id})
  return data;
}

const subtractUserBalance = async (user_id, value) => {
  const [userInfo] = await accountsModel.getUserInfo(user_id);
  const newBalance = userInfo.balance - value;
  const { data } = await supabase.from('Users')
    .update({ balance: newBalance })
    .match({ id: user_id})
  return data;
}

const sumUserBalance = async (user_id, value) => {
  const [userInfo] = await accountsModel.getUserInfo(user_id);
  const newBalance = userInfo.balance + value;
  const { data } = await supabase.from('Users')
    .update({ balance: newBalance })
    .match({ id: user_id})
  return data;
}

const checkUserAssetStatus = async (userId, assetId) => {
  const { data } = await supabase.from('UsersAssets')
    .select()
    .eq('user_id', userId)
    .eq('asset_id', assetId)
  return data;
}

const sell = async (ID, newAmount) => {
  const { data } = await supabase.from('UsersAssets')
    .update({ asset_quantity: newAmount })
    .match({ id: ID})
  return data;
}

const deleteUsersAsset = async (ID) => {
  const { data } = await supabase.from('UsersAssets')
    .delete()
    .match({ id: ID })
  return data;
}


module.exports = {
  buy,
  sell,
  subtractAssetQuant,
  subtractUserBalance,
  checkUserAssetStatus,
  deleteUsersAsset,
  sumAssetQuant,
  sumUserBalance
};