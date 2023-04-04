const { Router } = require('express');
const orderControlller = require('../controller/order.controller');

const router = Router();

router.get('/customer/orders/:id', orderControlller.findSalesById);

module.exports = router;
