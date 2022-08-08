const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const OrdersController = require('../controller/orders');

router.get('/', checkAuth, OrdersController.getAll);

router.post('/', checkAuth, OrdersController.createOrder);

router.get('/:orderID', checkAuth, OrdersController.getOne);

router.delete('/:orderID', checkAuth, OrdersController.deleteOne)

module.exports = router;