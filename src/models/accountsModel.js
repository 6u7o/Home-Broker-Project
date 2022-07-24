const supabase = require('../db/connection');

const getUserInfo = async (user_id) => {
  const { data } = await supabase.from('Users')
    .select()
    .eq('id', user_id)
  return data;
}

const getAssetsByClientId = async (idCliente) => {
  const { data } = await supabase.from('UsersAssets')
    .select()
    .eq('user_id', idCliente)
  return data;
}

const updateUserBalance = async (user_id, amount) => {
  const { data } = await supabase.from('Users')
    .update({ balance: amount })
    .match({ id: user_id})
  return data;
}

module.exports = {
  getUserInfo,
  getAssetsByClientId,
  updateUserBalance
};