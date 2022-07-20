const supabase = require('../db/connection');

const getUserInfo = async (user_id) => {
  const { data } = await supabase.from('Users')
    .select()
    .eq('id', user_id)
  return data;
}

module.exports = {
  getUserInfo,
};