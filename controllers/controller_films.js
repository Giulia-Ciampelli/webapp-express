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
            error: 'Nessun film trovato'
        })

        // restituzione json con libri
        res.status(200).json({
            movies: results,
            count: results.length
        })
    })
}

// funzione store C
const reviewStore = (req, res) => {
    const movie_id = req.params.movie_id;
    const { name, vote, text } = req.body;
    const sql = `
    INSERT INTO reviews (movie_id, name, vote, text)
    VALUES (?, ?, ?, ?)
    `;

    // creazione query
    connection.query(sql, [movie_id, name, vote, text], (err, results) => {
        
        // test 500
        if (err) return res.status(500).json({ error: err });

        console.log('Review inserted successfully:', results);

        // restituzione dati
        res.status(201).json({
            success: true
        })
    })
}

// funzione show R
const show = (req, res) => {
    const movieSql = `SELECT * FROM movies WHERE id=?`;
    const reviewSql = `
    SELECT *
    FROM reviews
    WHERE movie_id=?
    `;
    const id = req.params.id;

    // creazione query film
    connection.query(movieSql, [id], (err, movieResults) => {

        // test 500
        if (err) return res.status(500).json({ error: err });

        // test 404
        if (!movieResults.length) return res.status(404).json({
            error: 'Nessun film trovato'
        })

        // creazione query review
        connection.query(reviewSql, [id], (err, reviewResults) => {

            // test 500
            if (err) return res.status(500).json({ error: err });

            // preparazione dati film e review
            const movie = {
                ...movieResults[0],
                reviews: reviewResults
            }

            // restituzione dati
            res.status(200).json(movie);
        })
    })
}

// funzione update U

// funzione delete D

// esportazione moduli
module.exports = {
    index,
    show,
    reviewStore
}