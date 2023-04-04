const { Router } = require('express');
const admController = require('../controller/adm.controller');
const admValid = require('../errors/admTokenValidation');

const router = Router();

router.post('/admin/manage', admValid, admController.addUserByAdm);

module.exports = router;
