const { tokenAuth } = require('../utils/jwt');

const reqBodyIdValidation = async (req, res, next) => {
  const auth = req.headers.authorization;
  const { user_id } = req.body;
  // logica para funcionar tanto pelo swagger quanto por requisição normal
  if ( auth[0] === 'B') {
    const [, token] = auth.split(' ');
    const { id } = await tokenAuth(token);
    if (id !== user_id) {
      return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
    }
  } else {
    const { id } = await tokenAuth(auth);
    if (id !== user_id) {
      return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
    }
  }
  next();
};

const reqParamsIdValidation = async (req, res, next) => {
  const auth = req.headers.authorization;
  const { idCliente } = req.params;
  if ( auth[0] === 'B') {
    const [, token] = auth.split(' ');
    const { id } = await tokenAuth(token);
    if (id !== Number(idCliente)) {
      return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
    }
  } else {
    const { id } = await tokenAuth(req.headers.authorization);
    if (id !== Number(idCliente)) {
      return res.status(401).json({ message: 'Você só pode fazer operações para sua conta' });
    }
  }
  next();
};

module.exports = {
  reqBodyIdValidation,
  reqParamsIdValidation
};