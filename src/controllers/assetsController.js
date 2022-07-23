const assetsService = require('../services/assetsService');
const assetsModel = require('../models/assetsModel');

const getAllAssets =  async (req, res)=> {
  const data = await assetsModel.getAllAssets();
  return res.status(200).json(data);
};

// retorna todos ativos

const createAsset = async (req, res)=> {
  const { stock } = req.body;
  const response = await assetsService.addNewAsset(stock);
  return res.status(201).json(response);
};

// adiciona novas ativos no banco de dados

module.exports = {
  getAllAssets,
  createAsset
};