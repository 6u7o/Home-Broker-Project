const accountsModel = require('../models/accountsModel');

const getUserInfo = async (user_id) => {
  const [result] = await accountsModel.getUserInfo(user_id);
  return result;
}

module.exports = {
  getUserInfo,
};