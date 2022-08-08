const express = require('express');
const router = express.Router();
const Order = require('../models/order');


router.get('/', (req, res) =>
{
    Order.find()
        .populate('product')
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

router.post('/', (req, res) =>
{
    const order = new Order({
        product: req.body.productID,
        quantity: req.body.quantity
    })
    order.save()
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

router.get('/:orderID', (req, res) =>
{
    const id = req.params.orderID;
    res.status(200).send(id);
})

router.delete('/:orderID', (req, res) =>
{
    const id = req.params.orderID;
    res.status(200).send(id);
})

module.exports = router;