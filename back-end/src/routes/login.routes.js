const { Router } = require('express');
const { loginController, userController } = require('../controller');

const router = Router();

router.post('/login', loginController.login);
router.post('/register', userController.create);

module.exports = router;