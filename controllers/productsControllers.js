
//Controlador, Lógica de negocio de la app

//Otra manera es así, es mejor ya que se puede trabajar en cada función independientemente
const fetch =  require("node-fetch");
const getProduct = async (req, res) => {
            if (req.params.id) {
                try {
                    let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
                    let products = await response.json(); //{}
                    res.status(200).render('products', {"products":[products]}); // Pinta datos en el pug
                }
                catch (error) {
                    console.log(`ERROR: ${error.stack}`)
                    res.status(404).render('products', {"products":[]});
                }
            } else {
                try {
                    let response = await fetch(`https://fakestoreapi.com/products`); // []
                    let products = await response.json(); // []
                    res.status(200).render('products', {products}); // Pinta datos en el pug
                }
                catch (error) {
                    console.log(`ERROR: ${error.stack}`)
                    let products = []
                    res.status(404).render('products', {products});
                }
            }
        }

// const createProduct = async (req, res) => {
//             console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
//             const newProduct = req.body; // {} nuevo producto a guardar
        
//             // Líneas
//             //para guardar 
//             // en una BBDD SQL o MongoDB
//         try{let response = await fetch('https://fakestoreapi.com/products', {
//                 method: "POST",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newProduct)
//             })
//             let answer = await response.json(); // objeto de vuelta de la petición
//             console.log("Este es el console.log de lo que devuelve la api",answer);
        
//             res.status(200).send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);
//         }
//         catch(error){
//             console.log(`ERROR:${error.stack}`)
//             res.status(400).send(`Error guardando el producto ${answer.title}`)
//         }}
            

// const deleteProduct = async (req,res)=> {
//     const msj ="Has enviado un DELETE para borrar product";
//     console.log(msj);
//     res.send(msj);
//   };

module.exports = {
    getProduct,
    // createProduct,
    // deleteProduct,
}
