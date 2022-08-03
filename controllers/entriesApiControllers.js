const entry = require('../models/entry')

const getEntries = async (req, res) => {
    let entries;
    entries = await entry.getAllEntries();
    return res.status(200).json(entries);
};

const createEntry = async (req, res) => {
    const newEntry = req.body; // {title, content, email, category}
    try{
      const response = await entry.createEntry(newEntry)
    res.status(201).json({})  
    }
    catch(err){
    res.status(400).json({"error": err})
    }
}

const updateEntry = async (req, res) => {
    const editEntry = req.body;
    
    try {
        const response = await entry.updateEntry(editEntry)
        res.status(200).json({ "update": response, data: editEntry })
    }
    catch (err) {
        res.status(400).json({ "message": "bad request" })
    }
    //meter try catch
}

const deleteEntry = async (req, res) => {
    const newEntry = req.body; // {title, content, email, category}
    try{const response = await entry.deleteEntry(newEntry)
    res.status(201).json({"delete": response,  
    "data": newEntry})}
    catch{
    res.status(400).json({"message": "bad request",  
    "data": newEntry})
    }
}


module.exports = {
    getEntries, 
    createEntry, 
    updateEntry,
    deleteEntry
}