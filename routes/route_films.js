// variabili d'importazione
const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/controller_films.js');

// index
router.get('/', filmsController.index);

// store C
router.post('/reviews/:movie_id', filmsController.reviewStore);

// show R
router.get('/:id', filmsController.show);

// update U

// delete D

// esportazione
module.exports = router;