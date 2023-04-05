const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/jwtGenerator');

const login = async (body) => {
  const { email, password } = body; 
  const hashMd5 = md5(password);

  const result = await User.findOne({ where: { email, password: hashMd5 } });

  if (result === null) {
    return result;
  }

  const { role, name, id } = result;
  const token = generateToken({ email, id });

  const roleObj = {
    id,
    name,
    email,
    role,
    token,
  };
  return roleObj;
};

module.exports = {
    login,
};
