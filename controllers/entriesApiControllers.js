const entry = require('../models/entry')

//GET http://localhost:3000/entries -> ALL
//GET http://localhost:3000/entries?email=hola@gmail.com -> por email
//POST http://localhost:3000/entries?email=hola@gmail.com


const getEntries = async (req, res) => {
    let entries;
    if (req.query.email){
        entries = await entry.getEntry(req.query.email);
    }
    else{
        entries = await entry.getAllEntries();
    }  return res.status(200).json(entries);
};

const createEntry = async (req, res) => {
    const newEntry = req.body; // {title, content, email, category}
    const response = await entry.createEntry(newEntry)
    res.status(201).json({"saved": response,  
    data: newEntry})
}

const updateEntry = async (req, res) => {
    const editEntry = req.body; 
    const response = await entry.updateEntry(editEntry)
    res.status(200).json({"update": response, data: editEntry})
}

module.exports = {
    getEntries, 
    createEntry, 
    updateEntry,
    //deleteEntry, --> DELETE method http
}