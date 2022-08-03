//REQUIRES
require('dotenv').config();
const author_queries = require('../queries/author_queries')
const pool = require('../utils/db_pgsql')


// GETS
const getAllAuthors = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(author_queries.getAllAuthors)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}
const getAuthorByMail = async (entry) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(author_queries.getAuthorByMail, [email])
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
const createAuthor = async (entry) => {
    const {name,surname,email,image} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(author_queries.createAuthor ,[name,surname,email,image])
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
const updateAuthor = async (entry) => {

    const {name,surname,email,image} = entry;
    let client,result;
    try{
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(author_queries.createAuthor
                                    ,[name,surname,email,image])
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
const deleteAuthors = async (entry) => {
    const {name} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(author_queries.deleteAuthors
                                    ,[name])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}
//VARIABLE PARA EXPORTAR VARIABLES
const entries = {
    getAllAuthors,
    getAuthorByMail,
    createAuthor,
    updateAuthor,
    deleteAuthors
}
//EXPORTACIÓN
module.exports = entries;