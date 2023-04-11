const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/jwtGenerator');
const GenerateError = require('../errors/generateError');

const createUser = async ({ name, email, password, role }) => {
  const userPassword = md5(password);
  const verifyUser = await User.findOne({ where: { email } });
  if (verifyUser) throw new Error('User already registered');

  await User.create({ name, email, password: userPassword, role });

  const result = await User.findOne({ where: { email } });
  return { id: result.id, name: result.name, email: result.email, role: result.role };
};

const addUserByAdm = async ({ name, email, password, role = 'customer' }) => {
  const user = await User.findOne({ where: { email, name } });
  // console.log(user);

  if (!user) {
    // CREATE NEW USER BASED ON MAX ID FROM DATA BASE + 1
    const maxId = await User.max('id');
    const hashMd5 = md5(password);
    await User.create({ id: maxId + 1, name, email, password: hashMd5, role });

    // GENERATE TOKEN
    const token = generateToken({ name, email, role });

    // RETURN NEW USER INFO
    return { status: 201, message: { name, email, role, token } };
    }

    throw new GenerateError(409, 'User already registered');
};

module.exports = {
  createUser,
  addUserByAdm,
};
