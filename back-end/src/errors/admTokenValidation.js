const { tokenValidation } = require('../utils/jwtGenerator');
const GenerateError = require('./generateError');

// ADM TOKEN VALIDATION PERM
const admValid = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    const { validate } = tokenValidation(authorization);

  if (validate.role === 'administrator') {
    return next(); 
  }

  throw new GenerateError(401, 'Permission denied'); 
} catch (err) {
    next(err);
  }
};

module.exports = admValid;