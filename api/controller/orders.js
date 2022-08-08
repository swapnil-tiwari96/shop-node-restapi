const Order = require('../models/order');

exports.getAll = (req, res) =>
{
    Order.find()
        .populate('product')
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

exports.createOrder = (req, res) =>
{
    const order = new Order({
        product: req.body.productID,
        quantity: req.body.quantity
    })
    order.save()
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

exports.getOne = (req, res) =>
{
    const id = req.params.orderID;
    res.status(200).send(id);
}

exports.deleteOne = (req, res) =>
{
    const id = req.params.orderID;
    res.status(200).send(id);
}