const supabase = require('../db/connection');
const accountsModel = require('../models/accountsModel')

const buy = async (buyOrder, asset_price) => {
  const { data } = await supabase.from('UsersAssets')
    .insert([buyOrder]);

  const orderObj = {
    user_id: buyOrder.user_id,
    asset_id: buyOrder.asset_id,
    quantity: buyOrder.asset_quantity,
    date_price: asset_price,
    type: 'buy'
  }
  /* const { data } =  */await supabase.from('Orders')
    .insert([orderObj]);
  return data;
}

const updateBuy = async (ID, newAmount, sellOrder, asset_price) => {
  /* const { data } =  */await supabase.from('UsersAssets')
  .update({ asset_quantity: newAmount })
  .match({ id: ID})


  const orderObj = {
    user_id: sellOrder.user_id,
    asset_id: sellOrder.asset_id,
    quantity: sellOrder.asset_quantity,
    date_price: asset_price,
    type: 'buy'
  }
  const { data } = await supabase.from('Orders')
    .insert([orderObj]);
  console.log('updateBuy data: ', data);
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
  console.log('data Users Assests: ', data);
  return data;
}

const sell = async (ID, newAmount, sellOrder, asset_price) => {
  const { data } = await supabase.from('UsersAssets')
    .update({ asset_quantity: newAmount })
    .match({ id: ID})

  const orderObj = {
    user_id: sellOrder.user_id,
    asset_id: sellOrder.asset_id,
    quantity: sellOrder.asset_quantity,
    date_price: asset_price,
    type: 'sell'
  }
  /* const { data } =  */await supabase.from('Orders')
    .insert([orderObj]);
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
  sumUserBalance,
  updateBuy
};