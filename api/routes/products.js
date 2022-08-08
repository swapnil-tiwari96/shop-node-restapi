const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const ProductsController = require('../controller/products')

router.get('/', ProductsController.getAll);

router.post('/', checkAuth, ProductsController.createProduct);

router.patch('/:productID', ProductsController.getOne)

router.delete('/:productID',)

module.exports = router;
