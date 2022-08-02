//Rutas de entries
const express = require('express')
const entriesApiControllers = require("../controllers/entriesApiControllers");
const entriesApiRouter = express.Router();


entriesApiRouter.get("/", entriesApiControllers.getEntries); 
entriesApiRouter.post("/", entriesApiControllers.createEntry);
entriesApiRouter.put("/", entriesApiControllers.updateEntry);
entriesApiRouter.delete("/", entriesApiControllers.deleteEntry)




//GET http://localhost:3000/entries -> ALL
//GET http://localhost:3000/entries?email=hola@gmail.com -> por email
//POST http://localhost:3000/entries?email=hola@gmail.com

module.exports = entriesApiRouter;