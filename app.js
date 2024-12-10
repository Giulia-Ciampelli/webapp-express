// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();

// variabili env
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// router
const filmsRouter = require('./routes/route_films.js');

// futuri middleware
// #endregion variabili d'importazione

// elaborazione corpo json
app.use(express.json());

// impostazione iniziale server
app.listen(PORT, (req, res) => {
    console.log(`Server attivo su: ${HOST}:${PORT}`);
})

// uso cors su rotte (necessario per frontend in futuro)
app.use(cors());

// uso router
app.use('/films', filmsRouter);