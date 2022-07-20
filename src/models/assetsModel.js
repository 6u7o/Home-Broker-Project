const getStockInfo = require('../API/fetchStock');
const supabase = require('../db/connection');

const getAllAssets = async () => {
  const { data } = await supabase.from('Assets')
    .select()
  return data;
  
}

const addNewAsset = async (stock) => {
  const { name, volume, price } = await getStockInfo(stock);
  const { data } = await supabase.from('Assets')
    .insert([{
      asset_name: name,
      available_quantity: volume,
      asset_price: price
    }])
  return data;  
}

const getAssetInfo = async (asset_id) => {
  const { data } = await supabase.from('Assets')
    .select()
    .eq('id', asset_id)
  return data;
}


module.exports = {
  addNewAsset,
  getAllAssets,
  getAssetInfo
};