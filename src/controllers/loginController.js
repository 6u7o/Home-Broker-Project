const loginService = require('../services/loginService');

const login = async (req, res)=> {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Alguns campos estão faltando' });
  }
  const response = await loginService.checkLogin(email, password);
  if (!response) return res.status(400).json({ message: 'Campos inválidos' });
  return res.status(201).json({ token: response });
};

const cadastro = async (req, res)=> {
  const response = await loginService.createNewUser(req.body);
  if (!response) {
    return res.status(409).json({ message: 'Usuário já resgistrado' });
  }
  return res.status(201).json({ token: response });
};

module.exports = {
  login,
  cadastro
};