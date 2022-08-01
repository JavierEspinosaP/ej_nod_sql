
const checkApiKey = function (req, res, next){

    //En el futuro se comprobará la apikey en BBD
    if(req.query.APY_KEY){
        next(); //pasa a la siguiente tarea
    }else{
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída")
    }
}
module.exports = checkApiKey;