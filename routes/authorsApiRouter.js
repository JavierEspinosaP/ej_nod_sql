//Rutas de authors
const express = require('express')
const authorsApiControllers = require("../controllers/authorsApiControllers");
const authorsApiRouter = express.Router();




authorsApiRouter.get("/", authorsApiControllers.getAllAuthors); 
authorsApiRouter.post("/", authorsApiControllers.createAuthors);
authorsApiRouter.put("/", authorsApiControllers.updateAuthors);
authorsApiRouter.delete("/", authorsApiControllers.deleteAuthors)




//GET http://localhost:3000/authors -> ALL
//GET http://localhost:3000/authors?email=hola@gmail.com -> por email
//POST http://localhost:3000/authors?email=hola@gmail.com

module.exports = authorsApiRouter;