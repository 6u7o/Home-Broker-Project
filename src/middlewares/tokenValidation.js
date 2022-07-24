const { tokenAuth } = require('../utils/jwt');

const tokenValidation = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: 'O token não foi encontrado' });
  }
  if ( auth[0] === 'B') {
    console.log('pelo swagger');
    const [, token] = auth.split(' ');
    const isValid = await tokenAuth(token);
    if (token && !isValid) {
      return res.status(401).json({ message: 'O token é invalido ou está expirado' });
    }
  } else {
    console.log('normal');
    const isValid = await tokenAuth(auth);
    if (auth && !isValid) {
      return res.status(401).json({ message: 'O token é invalido ou está expirado' });
    }
  }
  next();
};

module.exports = {
  tokenValidation,
};