require('dotenv').config();
const queries = require('../queries/queries.json')
const credentials = require('../utils/db_pgsql')

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  })  

// GET

const getAllAuthors = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query("SELECT * FROM authors")
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
        const data = await client.query(`SELECT * FROM authors WHERE email=$1`, [email])
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
        const data = await client.query(`INSERT INTO authors(name,surname,email,image) 
                                    VALUES ($1,$2,$3,$4)` ,[name,surname,email,image])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

//[POST] http://localhost:3000/api/authors/ Se envía por POST los datos del autor a crear y retorna un status 201.
// Payload {message: "usuario creado: albertu@thebridgeschool.es"}




//UPDATE

const updateAuthor = async (entry) => {

    const {name,surname,email,image} = entry;
    let client,result;
    try{
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(`UPDATE authors
                                    SET surname= $2, email= $3, image= $4
                                    WHERE name=$1`
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
        const data = await client.query(`DELETE FROM authors
                                        WHERE name=$1`
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

const entries = {
    getAllAuthors,
    getAuthorByMail,
    createAuthor,
    updateAuthor,
    deleteAuthors
}

module.exports = entries;