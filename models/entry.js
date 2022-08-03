require('dotenv').config();
const entries_queries = require('../queries/entries_queries')
const pool = require('../utils/db_pgsql')

// GET
const getEntry = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entries_queries.getEntry)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entries_queries.getAllEntries)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const {title,content,email,category} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entries_queries.createEntry
                                    ,[title,content,email,category])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}


//UPDATE

const updateEntry = async (entry) => {

    const {title,content,email,category} = entry;
    let client,result;
    try{
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(entries_queries.updateEntry
                                    ,[title,content,category])
    result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result

}


// DELETE

const deleteEntry = async (entry) => {
    const {title} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entries_queries.deleteEntry
                                    ,[title])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}

const entries = {
    getEntry,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}

module.exports = entries;

