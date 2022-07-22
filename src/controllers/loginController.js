const { Router } = require('express');
const loginService = require('../services/loginService');
const { signupValidation } = require('../middlewares/signupValidation');
const { tokenAuth } = require('../utils/jwt');
const loginController = Router();

loginController.post('/login', async (req, res)=> {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const response = await loginService.checkLogin(email, password);
  if (!response) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ token: response });
});

loginController.post('/cadastro', signupValidation, async (req, res)=> {
  const response = await loginService.createNewUser(req.body);
  if (!response) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json({ token: response });
});


loginController.get('/test', async (req, res)=> {
  const tokenInfo = await tokenAuth(req.headers.authorization);

  return res.status(200).json({ tokenInfo: tokenInfo });
});

module.exports = loginController;