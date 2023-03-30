const { loginService } = require('../service');

const login = async (req, res) => {
  const { body } = req;

  const result = await loginService.login(body);
 
  if (result === null) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json(result);
};

module.exports = {
    login,
};