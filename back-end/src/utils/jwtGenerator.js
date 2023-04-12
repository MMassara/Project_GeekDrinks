const jwt = require('jsonwebtoken');
const fs = require('fs');
const userService = require('../service/User.service');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
  });

const decodeToken = (token) => jwt.decode(token, JWT_SECRET);

const tokenValidation = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await userService.findOne(decoded.data.email);

    if (!user) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    req.role = user.role;

    next();
  } catch (err) { return res.status(401).json({ message: 'Token must be a valid token' }); }
};

const registerValidation = async (req, res, next) => {
  const { email, name } = req.body;

  const findEmail = await userService.findOne('email', email);

  const findName = await userService.findOne('name', name);

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