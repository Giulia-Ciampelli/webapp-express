// middleware di errore, mostra errore 404
const error404 = (req, res) => {
    res.status(404).send('404: pagina non trovata');
}

// esportazione
module.exports = error404;