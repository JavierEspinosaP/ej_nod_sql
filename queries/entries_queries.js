const queries = {
    
    "getEntry":`SELECT e.id_entry,e.title,e.content,e.date,a.email,e.category
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    ORDER BY e.title;`,

    "getAllEntries" : `SELECT * FROM entries;`,

    "createEntry" : `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,(SELECT id_author FROM authors WHERE email=$3),$4)`,

    "updateEntry": `UPDATE entries
    SET content = $2, category = $3
    WHERE title=$1`,

    "deleteEntry": `DELETE FROM entries
    WHERE title=$1`,
}

module.exports = queries;