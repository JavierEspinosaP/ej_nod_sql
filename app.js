
//Módulos externos
const express = require('express')
const emoji = require('emoji-whale')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');


//Rutas
const entriesApiRouter = require('../Ejercicio_node_sql/routes/entriesApiRouter')
const authorsApiRouter = require('../Ejercicio_node_sql/routes/authorsApiRouter')
//Luego propios modulos

//Middlewares
const manage404 = require('./middlewares/error404')

const app = express()
const port = 3000

//Permite leer body recibido en una petición
app.use(express.json())


//API
app.use('/api/entries', entriesApiRouter)
app.use('/api/authors', authorsApiRouter)

//Middleware error 404
app.use(manage404);

app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: owl }))
});