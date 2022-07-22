const { tokenAuth } = require('../utils/jwt');

const reqBodyIdValidation = async (req, res, next) => {
  const { id } = await tokenAuth(req.headers.authorization);

  const { user_id } = req.body;

  if (id !== user_id) {
    return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
  }
  next();
};

const reqParamsIdValidation = async (req, res, next) => {
  const { id } = await tokenAuth(req.headers.authorization);

  const { idCliente } = req.params;

  console.log('id: ', id, 'idCliente: ', idCliente);

  if (id !== Number(idCliente)) {
    return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
  }
  next();
};

module.exports = {
  reqBodyIdValidation,
  reqParamsIdValidation
};