const { Router } = require('express');
const { productController } = require('../controller');

const router = Router();

router.get('/products', productController.get);

module.exports = router;
