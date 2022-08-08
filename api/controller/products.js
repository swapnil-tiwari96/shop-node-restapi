const Product = require('../models/product');

exports.getAll = (req, res) =>
{
    Product.find()
        .exec()
        .then(docs => res.status(200).send(docs)
        )
        .catch(err => res.status(500).send(err))
}

exports.createProduct = (req, res) =>
{
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
}

exports.getOne = (req, res) =>
{
    const id = req.params.productID;
    const updateOps = {};
    for (const ops of req.body)
    {
        updateOps[ops.propName] = ops.value;
    }
    Product.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err))
}

exports.deleteOne = (req, res) =>
{
    const id = req.params.productID;
    Product.deleteOne({ _id: id })
        .exec()
        .then(result => res.status(200).send(result))
        .catch(err => err.status(500).send(err))
}