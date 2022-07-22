const supabase = require('../db/connection');

const checkLogin = async (email, password) => {
  const { data } = await supabase.from('Users')
    .select()
    .match({'email': email, 'password': password})
  return data;
}

const checkEmail =  async (email) => {
  const { data } = await supabase.from('Users')
    .select()
    .eq('email', email)
  return data[0];
}

const createNewUser =  async (info) => {
  const { name, email, password } = info;
  const { data } = await supabase.from('Users')
    .insert([{
      user_name: name,
      email: email,
      password: password,
      balance: 0
    }])
  return data;
}

module.exports = {
  checkLogin,
  checkEmail,
  createNewUser
};