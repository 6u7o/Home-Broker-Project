const { tokenAuth } = require('../utils/jwt');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'O token não foi encontrado' });
  }
  const isValid = await tokenAuth(token);
  if (token && !isValid) {
    return res.status(401).json({ message: 'O token é invalido ou está expirado' });
  }
  next();
};

module.exports = {
  tokenValidation,
};