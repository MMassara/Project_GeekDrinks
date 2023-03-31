const { Router } = require('express');
const { saleController } = require('../controller');

const router = Router();

router.post('/sales', saleController.createSale);
router.get('/sales', saleController.get);
router.get('/sales/:id', saleController.getById);

module.exports = router;