
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
const checkApiKey = require('./middlewares/auth_API_KEY')

const app = express()
const port = 3000

//View engine

app.set('view engine', 'pug');
app.set('views','./views');

//Permite leer body recibido en una petición
app.use(express.json())

// Middleware de acceso para TODAS las rutas
// app.use(checkApiKey)

// Middleware de acceso para las rutas de products
// app.use('/products',checkApiKey, productsRoutes);

//API
app.use('/api/entries', entriesApiRouter)
app.use('/api/authors', authorsApiRouter)

//Middleware error 404
// Respuesta por defecto para rutas no existentes
app.use(manage404);

app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: owl }))
});