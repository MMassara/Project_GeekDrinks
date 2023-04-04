const userService = require('../service/User.service');

const addUserByAdm = async (req, res, next) => {
  try {
    const newUser = req.body;
    const { status, message } = await userService.addUserByAdm(newUser);

    // CATCH ERROR GENERATOR
    return res.status(status).json({ message });
  } catch (err) {
    next(err);
  }
};

module.exports = { addUserByAdm };
