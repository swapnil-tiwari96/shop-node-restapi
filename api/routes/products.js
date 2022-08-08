const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const checkAuth = require('../middleware/checkAuth');

router.get('/', (req, res) =>
{
    Product.find()
        .exec()
        .then(docs => res.status(200).send(docs)
        )
        .catch(err => res.status(500).send(err))
});

router.post('/', checkAuth, (req, res) =>
{
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));

});

router.get('/:productID', (req, res) =>
{
    const id = req.params.productID;
    Product.findById(id)
        .exec()
        .then(doc =>
        {
            if (doc)
            {
                res.status(200).send(doc)
            }
            else
            {
                res.status(404).send("Not found")
            }

        })
        .catch(err => res.status(500).send(err));
})

router.patch('/:productID', (req, res) =>
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
})

router.delete('/:productID', (req, res) =>
{
    const id = req.params.productID;
    Product.deleteOne({ _id: id })
        .exec()
        .then(result => res.status(200).send(result))
        .catch(err => err.status(500).send(err))
})

module.exports = router;
