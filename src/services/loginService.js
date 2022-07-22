const loginModel = require('../models/loginModel');
const { generateJWTToken } = require('../utils/jwt');

const checkLogin = async (email, password) => {
  const user = await loginModel.checkLogin(email, password)

  console.log('user: ', user[0]);
  if (!user) return false;

  const token = generateJWTToken(user[0]);
  return token;
};

const createNewUser = async (info) => {
  const { email } = info;
  const checkUser = await loginModel.checkEmail(email);

  if (checkUser) return false;

  const user = await loginModel.createNewUser(info);
  const token = generateJWTToken(user[0]);
  
  return token;
};

module.exports = {
  checkLogin,
  createNewUser
};