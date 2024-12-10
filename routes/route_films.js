// variabili d'importazione
const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/controller_films.js');

// index
router.get('/', filmsController.index);

// store C

// show R

// update U

// delete D

// esportazione
module.exports = router;