const checkEmail = (email) => {
  if (email && email.includes('@') && email.includes('.com')) {
    return true;
  }
  return false;
};

const signupValidation = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400)
      .json({ message: 'Deve ter um nome' });
  }
  if (!checkEmail(email)) {
    return res.status(400).json({ message: 'O email deve ser válido' });
  }
  if (password.length < 6) {
    return res.status(400)
      .json({ message: 'A senha deve ter pelo menos 8 caracteres' });
  }
  next();
};

module.exports = {
  signupValidation,
};