const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
  });

  const decodeToken = (token) =>
  jwt.decode(token, JWT_SECRET);

module.exports = {
  generateToken,
  decodeToken,
};