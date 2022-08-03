const queries = {
    "getAllAuthors" : "SELECT * FROM authors",
    "getAuthorByMail" : `SELECT * FROM authors WHERE email=$1`,
    "createAuthor": `INSERT INTO authors(name,surname,email,image) VALUES ($1,$2,$3,$4)`,
    "updateAuthor": `UPDATE authors SET surname= $2, email= $3, image= $4 WHERE name=$1`,
    "deleteAuthors": `DELETE FROM authors WHERE name=$1`
}

module.exports = queries;