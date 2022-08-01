//Rutas de productos
const express = require('express')
const productsApiController = require("../controllers/productsApiControllers");
const productsApiRouter = express.Router();
const checkApiKey = require('../middlewares/auth_API_KEY')

// products API

productsApiRouter.get('/:id?', productsApiController.getProduct)
productsApiRouter.post('/',checkApiKey, productsApiController.createProduct)
productsApiRouter.delete("/",checkApiKey, productsApiController.deleteProduct)

module.exports = productsApiRouter;

//http://localhost:3000/api/products --> Esto es lo que hay que conseguir