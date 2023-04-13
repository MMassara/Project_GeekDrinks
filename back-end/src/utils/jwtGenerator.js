const jwt = require('jsonwebtoken');
const fs = require('fs');
// const userService = require('../service/User.service');
const { User } = require('../database/models');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
  });

const decodeToken = (token) => jwt.decode(token, JWT_SECRET);

const tokenValidation = async (req, res) => {
  const token = req.headers.Authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
};

const registerValidation = async (req, res, next) => {
  const { email, name } = req.body;

  const findEmail = await User.findOne({ where: { email } });

  const findName = await User.findOne({ where: { name } });

  if (findEmail || findName) {
    return res.status(409).json({ message: 'Email or name already registered' });
  }
  
  return next();
};

module.exports = {
  generateToken,
  tokenValidation,
  decodeToken,
  registerValidation,
};