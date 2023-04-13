const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async ({ name, email, password, role }) => {
  const userPassword = md5(password);
  const verifyUser = await User.findOne({ where: { email } });
  if (verifyUser) throw new Error('User already registered');

  await User.create({ name, email, password: userPassword, role });

  const result = await User.findOne({ where: { email } });
  return { id: result.id, name: result.name, email: result.email, role: result.role };
};

module.exports = {
  createUser,
};
