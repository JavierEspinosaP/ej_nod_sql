const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  })

// GET
const getEntry = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
                SELECT e.id_entry,e.title,e.content,e.date,a.email,e.category
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                ORDER BY e.title;`)
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
        const data = await client.query(`SELECT * FROM entries;`)
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
        const data = await client.query(`INSERT INTO entries(title,content,id_author,category) 
                                    VALUES ($1,$2,(SELECT id_author FROM authors WHERE email=$3),$4)`
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
    const data = await client.query(`UPDATE entries
                                    SET content = $2, category = $3
                                    WHERE title=$1`
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
        const data = await client.query(`DELETE FROM entries
                                        WHERE title=$1`
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


// Pruebas

    // getEntriesByEmail("birja@thebridgeschool.es")
    // .then(data=>console.log(data))



// getAllEntries()
// .then(data=>console.log(data))



// let newEntry = {
//     title:"Nos gustan las tortillas",
//     content:"En el Marquina las tortillas vuelan antes de las 12",
//     email:"albertu@thebridgeschool.es",
//     category:"gastronomía"}

// createEntry(newEntry)
// .then(data=>console.log(data))
