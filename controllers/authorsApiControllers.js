const entry_authors = require('../models/entry_authors')

//GET http://localhost:3000/entries -> ALL
//GET http://localhost:3000/entries?email=hola@gmail.com -> por email
//POST http://localhost:3000/entries?email=hola@gmail.com


const getAllAuthors = async (req, res) => {
    try {
        if(req.query.email){
            let entries = await entry_authors.getAuthorByMail(req.query.email);
            return res.status(200).json(entries);  
        } else{
            let entries = await entry_authors.getAllAuthors();
            return res.status(200).json(entries);  
        }
    } catch (error) {
        return res.status(400).json({"Error: ": error});
    }
};

const createAuthors = async (req, res) => {
    const newEntry = req.body; // {id_author, name, surname, image}
    try {
    const response = await entry_authors.createAuthor(newEntry)
    res.status(201).json({message: `usuario creado: ${req.body.name} ${req.body.surname}`})   
    }
    catch(error){
    res.status(400).json({"error": error})
    }
    
}

const updateAuthors = async (req, res) => {
    const editEntry = req.body;
    try {
        const response = await entry_authors.updateAuthor(editEntry)
        res.status(200).json({ message: `usuario actualizado: ${req.body.name} ${req.body.surname}`})
    }
    catch (err) {
        res.status(400).json({ "message": err })
    }
    //meter try catch
}

const deleteAuthors = async (req, res) => {
    const newEntry = req.body; // {name}
    try{const response = await entry_authors.deleteAuthors(newEntry)
    res.status(418).json({"message": `Se ha borrado ${req.body.name} ${req.body.surname}`})}
    catch(error){
    res.status(400).json({"error": error})
    }
}


module.exports = {
    getAllAuthors, 
    createAuthors, 
    updateAuthors,
    deleteAuthors
}