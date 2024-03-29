const investimentsModel = require('../models/investimentsModel')

const salesValidation = async (req, res, next) => {
  const { user_id, asset_id } = req.body;

  const [response] = await investimentsModel.checkUserAssetStatus(user_id, asset_id);
  if (typeof response === 'undefined') { 
    return res.status(404).json({message: 'O usuário não possue este ativo'})
  }
  next();
};

module.exports = {
  salesValidation,
};