const Joi = require('joi');

const registeresByAdm = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(/^[\w-.]+@[\w-]+\.\w{2,4}(\.\w{2})?$/).required(),
  password: Joi.string().min(6).required().messages({
    'string.pattern.base': 'Password should be at least 6 characters',
    'string.empty': 'Password canot be empty',
    'any.required': 'Password is required',
  }),
  role: Joi.string().valid('customer', 'seller').required(),
});

module.exports = { registeresByAdm };