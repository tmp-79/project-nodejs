const express = require('express');
const { addTemplate } = require('../../controllers/template.controller');
const router = express.Router()


router.get('/', async function (req, res) {
    res.status(200);
    res.send({
        data: "NodeJs Serve running -- product"
    })
})

router.post('/', async function (req, res) {
    let body = {
        name: req.body.name ?? req.query.name,
        language: req.body.language ?? req.query.language,
        description: req.body.description ?? req.query.description,
        views: req.body.views ?? req.query.views,
        purchases: req.body.purchases ?? req.query.purchases,
        price: req.body.price ?? req.query.price,
        image: req.body.image ?? req.query.image,
    };
    let response = await addTemplate(body);
    if (response.success == true) {
        res.status(201).json(response);
    } else {
        res.status(404).json(response);
    }
})
module.exports = router;