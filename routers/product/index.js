const express = require('express');
const router = express.Router()


router.get('/', async function (req, res) {
    res.status(200);
    res.send({
        data: "NodeJs Serve running -- product"
    })
})

module.exports = router;