const jwt = require('jsonwebtoken');
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const generateJWTToken = ({ email, id }) => 
  jwt.sign({ email, id }, SECRET, jwtConfig);

const tokenAuth = async (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateJWTToken,
  tokenAuth,
};