
//Primero siempre módulos externos
const express = require('express')
const emoji = require('emoji-whale')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');


//Rutas de productos
const entriesApiRouter = require('../Ejercicio_node_sql/routes/entriesApiRouter')
const authorsApiRouter = require('../Ejercicio_node_sql/routes/authorsApiRouter')
//Luego propios modulos
const calc = require('./utils/calculator');

// Tu middleware
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

//WEB URL
// http://localhost:3000/products

//API URLS
// http://localhost:3000/api/products GET
// http://localhost:3000/api/products/3
// http://localhost:3000/api/products POST
// http://localhost:3000/api/products DELETE

//Home
//http://localhost:3000/
app.get('/', (req, res) => {
  console.log(cowsay.say('Hola que tal', { cow: owl }));
  let msj = 'Hola desde mi primer servidor :) !!!! '+emoji
  res.render('my_view',{section:"home",msj})
})

//http://localhost:3000/pokemon/charmander
//http://localhost:3000/pokemon/mew
app.get('/pokemon/:name?', (req, res) => {
    console.log(req.params);
    let msj = "";
    if (req.params.name) {
        msj = 'Aquí te envío a: ' + req.params.name;
    } else {
         msj = 'Aquí te envío a todos los pokemonssss'
    }
     res.render('my_view',{section:"pokemon",msj})
  },   
  ),

app.get('/perritos', (req, res) => {
      let msj = "¿cuanto son 2+2?"+calc.add(2,2);
      console.log(cowsay.say(msj, {cow:owl}));
      res.send('Aquí te enviaría mis perritos y...'+msj+""+emoji)
  }),
//Middleware error 404
// Respuesta por defecto para rutas no existentes
app.use(manage404);

app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: owl }))
});