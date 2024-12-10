// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();

// variabili env
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// router
const filmsRouter = require('./routes/route_films.js');

// middlewares
const logger = require('./middlewares/logger.js');
const error404 = require('./middlewares/error404.js');
const error500 = require('./middlewares/error500.js');
// #endregion variabili d'importazione

// elaborazione corpo json
app.use(express.json());

// impostazione iniziale server
app.listen(PORT, (req, res) => {
    console.log(`Server attivo su: ${HOST}:${PORT}`);
})

// uso cors su rotte (necessario per frontend in futuro)
app.use(cors());

// uso logger (RICORDA: mettere prima del ruoter, o non funziona)
app.use('/films', logger);

// uso router
app.use('/films', filmsRouter);

// uso error404
app.use(error404);

// uso error500 (serve?)
app.use(error500);