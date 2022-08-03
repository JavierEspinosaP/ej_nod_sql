const authors = require('../models/authors')

const getAuthors = async (req, res) => {
    try {
        if(req.query.email){
            let entries = await authors.getAuthorByMail(req.query.email);
            return res.status(200).json(entries);  
        } else{
            let entries = await authors.getAllAuthors();
            return res.status(200).json(entries);  
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

const createAuthors = async (req, res) => {
    const newEntry = req.body; // {id_author, name, surname, image}
    try {
    const response = await authors.createAuthor(newEntry)
    res.status(201).json({message: `usuario creado: ${req.body.name} ${req.body.surname}`})   
    }
    catch(error){
    res.status(400).json({"error": error})
    }
    
}

const updateAuthors = async (req, res) => {
    const editEntry = req.body;
    try {
        const response = await authors.updateAuthor(editEntry)
        res.status(200).json({ message: `usuario actualizado: ${req.body.name} ${req.body.surname}`})
    }
    catch (err) {
        res.status(400).json({ "message": err })
    }
}

const deleteAuthors = async (req, res) => {
    const newEntry = req.body; // {name}
    try{const response = await authors.deleteAuthors(newEntry)
    res.status(418).json({"message": `Se ha borrado ${req.body.name} ${req.body.surname}`})}
    catch(error){
    res.status(400).json({"error": error})
    }
}

module.exports = {
    getAuthors, 
    createAuthors, 
    updateAuthors,
    deleteAuthors
}