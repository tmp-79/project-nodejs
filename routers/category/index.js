const express = require('express');
const { addCategory, getAllCategorys, getCategoryById } = require('../../controllers/category.controller');
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
    console.log(req)
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
    let response = await getAllCategorys(req.query.s, req.query.page, req.query.limit);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

router.get('/:id', async (req, res) => {
    let response = await getCategoryById(req.params.id);
    res.json(response);
});

module.exports = router;