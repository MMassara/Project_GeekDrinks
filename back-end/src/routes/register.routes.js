const { Router } = require('express');
const { userController } = require('../controller');

const router = Router();

router.post('/register', userController.create);

module.exports = router;