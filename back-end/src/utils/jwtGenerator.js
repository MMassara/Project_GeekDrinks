const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
  });

const tokenValidation = (token) => {
  const validate = jwt.verify(token, JWT_SECRET);
  
  return validate;
};

module.exports = {
  generateToken,
  tokenValidation,
};