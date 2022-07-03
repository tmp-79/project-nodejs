const express = require('express');
const { addTemplate, getTemplateById, getAllTemplates, removeTemplate, updateTemplate } = require('../../controllers/template.controller');
const router = express.Router()


router.post('/', async function (req, res) {
    let body = {
        name: req.body.name,
        language: req.body.language,
        description: req.body.description,
        views: req.body.views,
        purchases: req.body.purchases,
        price: req.body.pricee,
        image: req.body.image,
    };
    console.log("Body: ",req)
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

router.put('/', async (req, res) => {
    let id = req.query.id;
    let body = req.body;
    if (!id || !body.name) {
        res.status(400).json({
            success: false,
            message: "Update thất bại, thiếu dữ liệu",
            data: null
        })
        return
    }
    const response = await updateTemplate(id, body);
    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(500).json(response);
    }
})


router.delete('/', async (req, res) => {
    let response = await removeTemplate(req.query.id)
    try {
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(response);
    }
});

module.exports = router;