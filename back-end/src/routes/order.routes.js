const { Router } = require('express');
const orderControlller = require('../controller/order.controller');

const router = Router();

router.get('/customer/orders/:id', orderControlller.findSalesById);
router.get('/seller/orders/:id', orderControlller.findSalesById);
router.put('/customer/orders/:id', orderControlller.changeStatus);
router.put('/seller/orders/:id', orderControlller.changeStatus);

module.exports = router;
