const express = require('express');
const rootRouter = express.Router()

let category  = require('./category/index')
rootRouter.use('/category',category)

let product  = require('./product/index')
rootRouter.use('/product',product)

module.exports = rootRouter;