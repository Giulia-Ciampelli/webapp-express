// variabili d'importazione
const connection = require('../database/db_connection.js');

// funzione index
const index = (req, res) => {
    const sql = `SELECT * FROM movies`;

    // creazione query
    connection.query(sql, (err, results) => {
        
        // test 500
        if (err) return res.status(500).json({ error: err });

        // test 404
        if (!results.length) return res.status(404).json({
            error: 'No tags found'
        })

        // restituzione json con libri
        res.status(200).json({
            movies: results,
            count: results.length
        })
    })
}

// funzione store C

// funzione show R

// funzione update U

// funzione delete D

// esportazione moduli
module.exports = {
    index
}