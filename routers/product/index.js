const express = require('express');
const { addTemplate, getTemplateById, getAllTemplates, removeTemplate } = require('../../controllers/template.controller');
const router = express.Router()


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


router.get('/', async (req, res) => {
    let response;
    if (req.query.id) {
        response = await getTemplateById(req.query.id);
    } else {
        response = await getAllTemplates();
    }
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

router.delete('/', async (req, res) => {
    let response = await removeTemplate(req.query.id)
    try {
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(response);
    }
});

module.exports = router;