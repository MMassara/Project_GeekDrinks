const md5 = require('md5');
const admService = require('../service/adm.service');

const getUsers = async (req, res) => {
  const users = await admService.getUsers();

  return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  const adminRole = req.role;
  const { id } = req.params;

  if (adminRole !== 'administrator') {
    return res.status(409).json({ message: 'Acess denied' });
  }

  await admService.deleteUser(id);

  return res.status(204).json({ message: 'User deleted' });
};

const createUser = async (req, res) => {
  const adminRole = req.role;
  const { name, email, password, role } = req.body;

  if (adminRole !== 'administrator') {
    return res.status(409).json({ message: 'Acess denied' });
  }

  const userPassword = md5(password);
  await admService.createUser(name, email, userPassword, role);

  return res.status(201).json({ message: 'New user registered successfully' });
};

module.exports = {
  getUsers,
  deleteUser,
  createUser,
};
