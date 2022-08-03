//Rutas de authors
const express = require('express')
const authorsApiControllers = require("../controllers/authorsApiControllers");
const authorsApiRouter = express.Router();


authorsApiRouter.get("/", authorsApiControllers.getAuthors); 
authorsApiRouter.post("/", authorsApiControllers.createAuthors);
authorsApiRouter.put("/", authorsApiControllers.updateAuthors);
authorsApiRouter.delete("/", authorsApiControllers.deleteAuthors)


module.exports = authorsApiRouter;