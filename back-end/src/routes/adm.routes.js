const express = require('express');
const adminController = require('../controller/adm.controller');
const { tokenValidation } = require('../utils/jwtGenerator');
const { registerValidation } = require('../utils/jwtGenerator');

const router = express.Router();

router.get('/users', adminController.getUsers);
router.post(
  '/user/admin/register',
  tokenValidation,
  registerValidation,
  adminController.createUser,
);
router.delete('/user/:id', tokenValidation, adminController.deleteUser);

module.exports = router;
