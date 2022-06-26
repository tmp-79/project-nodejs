const express = require('express');
const { addCategory, getAllCategorys } = require('../../controllers/category.controller');
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
        name: req.body.name,
        language: req.body.language,
        description: req.body.description,
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

module.exports = router;