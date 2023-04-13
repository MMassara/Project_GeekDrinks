const { Op } = require('sequelize');
const { User } = require('../database/models');

const getUsers = async () => {
  const result = await User.findAll({
    where: {
      role: {
        [Op.not]: 'administrator',
      },
    },
  });

  return result;
};

const deleteUser = async (id) => {
  await User.destroy(
    { where: { id } },
  );
};

const createUser = async (name, email, password, role) => {
  const { data } = await User.create({
    name,
    email,
    password,
    role,
  });

  return data;
};

module.exports = {
  getUsers,
  deleteUser,
  createUser,
};