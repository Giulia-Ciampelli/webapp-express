// variabili d'importazione
const connection = require('../database/db_connection.js');

// funzione index
// questa funzione mostra tutti i film
const index = (req, res) => {
    const sql = `SELECT * FROM movies`; // query per mostrare tutta la tabella dei film

    // creazione query
    connection.query(sql, (err, results) => {

        // test 500
        if (err) return res.status(500).json({ error: err });

        // test 404
        if (!results.length) return res.status(404).json({
            error: 'Nessun film trovato'
        })

        // restituzione json con film
        res.status(200).json({
            movies: results,
            count: results.length
        })
    })
}

// funzione store C
// questa funzione permette di aggiungere nuove recensioni collegate ad un determinato film
const reviewStore = (req, res) => {
    const movie_id = req.params.movie_id;
    const { name, vote, text } = req.body;
    const sql = `
    INSERT INTO reviews (movie_id, name, vote, text)
    VALUES (?, ?, ?, ?)
    `; // query per inserire i dati della nuova recensione nella tabella, valori nascosti con ? per evitare sql injections

    // validazione dati, tutti i dati presenti
    if (!name || !text) {
        return res.status(422).json({
            error: 'Invalid data. Please fill all the required fields correctly.'
        })
    }

    // validazione lunghezza commento
    if (text.length < 10 || text.length > 500) {
        return res.status(422).json({
            error: 'Your comment must be between 10 and 500 characters.'
        })
    }

    // validazione voto
    if (vote < 1 || vote > 5) {
        return res.status(422).json({
            error: 'Your rating must be between 1 and 5 stars.'
        })
    }

    // creazione query
    connection.query(sql, [movie_id, name, vote, text], (err, results) => {

        // test 500
        if (err) return res.status(500).json({ error: err });

        console.log('Review inserted successfully:', results);

        // restituzione dati
        res.status(201).json({
            success: true,
            message: 'Thank you for your review! You\'ll be sent to the previous page in a couple of seconds.'
        })
    })
}

// funzione show R
// questa funzione mostra sia i film che le sue recensioni, ordinate per data (dal più recente)
const show = (req, res) => {
    const movieSql = `SELECT * FROM movies WHERE id=?`; // query per mostrare i film
    const reviewSql = `
    SELECT *
    FROM reviews
    WHERE movie_id=?
    ORDER BY id DESC
    `; // query per mostrare le recensioni appartenenti ad un film (determinato dal movie_id), ordinate per data
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