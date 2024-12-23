// middleware di errore, mostra errore 404
const error404 = (req, res) => {
    res.status(404).send('404: page not found');
}

// esportazione
module.exports = error404;