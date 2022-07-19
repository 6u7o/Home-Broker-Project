const supabase = require('../db/connection');

const getAvailableAssets = async () => {
  const { data } = await supabase.from('Assets')
    .select()
  return data;
  
}

const addNewAsset = async (assetObj) => {
  const { name, quantity, price } = assetObj;
  const { data/* , error */} = await supabase.from('Assets')
    .insert([{
      asset_name: name,
      available_quantity: quantity,
      asset_price: price
    }])
  console.log(data);  
}


module.exports = {
  addNewAsset,
  getAvailableAssets
};