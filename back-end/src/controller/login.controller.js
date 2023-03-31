const { loginService } = require('../service');

const login = async (req, res) => {
  const { body } = req;

  const result = await loginService.login(body);
 
  if (result === null) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.status(200).json(result);
};

module.exports = {
    login,
};