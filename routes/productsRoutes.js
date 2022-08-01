//Rutas de productos
const express = require('express')
const productsController = require("../controllers/productsControllers");
const productsRouter = express.Router();
// const checkApiKey = require('../middlewares/auth_API_KEY')


productsRouter.get('/:id?', productsController.getProduct)
// productsRouter.post('/',checkApiKey, productsController.createProduct)
// productsRouter.delete("/",checkApiKey, productsController.deleteProduct)

module.exports = productsRouter;