const { Router } = require('express');
const { login, cadastro } = require('../controllers/loginController');
const { signupValidation } = require('../middlewares/signupValidation');
const loginRouter = Router();

loginRouter.post('/login', login);

loginRouter.post('/cadastro', signupValidation, cadastro);

module.exports = loginRouter;