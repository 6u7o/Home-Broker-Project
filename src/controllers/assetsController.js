const { Router } = require('express');
const assetsService = require('../services/assetsService');
const assetsModel = require('../models/assetsModel');
const assetsController = Router();

assetsController.get('/', async (req, res)=> {
  const data = await assetsModel.getAllAssets();
  return res.status(200).json(data);
});

// retorna todos ativos

assetsController.post('/', async (req, res)=> {
  const { stock } = req.body;
  const response = await assetsService.addNewAsset(stock);
  return res.status(201).json(response);
});

// adiciona novas ativos no banco de dados

module.exports = assetsController;