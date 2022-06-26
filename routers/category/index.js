const express = require('express');
const { addCategory, getAllCategorys, getCategoryById, removeCategory } = require('../../controllers/category.controller');
const router = express.Router()

/**
 * @swagger
 * /api/category:
 *   post:
 *     parameters:
 *      - in: body
 *        name: category
 *        description: New category
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            description:
 *              type: string
 *            language:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', async function (req, res) {
    let body = {
        name: req.body.name ?? req.query.name,
        language: req.body.language ?? req.query.language,
        description: req.body.description ?? req.query.description,
    };
    let response = await addCategory(body);

    if (response.success == true) {
        res.status(201).json(response);
    } else {
        res.status(404).json(response);
    }
})

router.get('/', async (req, res) => {
    let response;
    if (req.query.id) {
        response = await getCategoryById(req.query.id);
    } else {
        response = await getAllCategorys();
    }
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

router.delete('/', async (req, res) => {
    let response = await removeCategory(req.query.id)
    try {
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(response);
    }
});

module.exports = router;