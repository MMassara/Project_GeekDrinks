const express = require('express');
const adminController = require('../controller/adm.controller');
const { tokenValidation } = require('../utils/jwtGenerator');
const { registerValidation } = require('../utils/jwtGenerator');

const router = express.Router();

router.post(
  '/admin/user/register',
  tokenValidation,
  registerValidation,
  adminController.createUser,
);
router.get('/admin/users', adminController.getUsers);
router.delete('/admin/user/:id', tokenValidation, adminController.deleteUser);

module.exports = router;
