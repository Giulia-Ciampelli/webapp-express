// middleware di errore, mostra errore 500 (errore server)
const error500 = (req, res) => {
    res.status(500).send('500: server error');
}

// esportazione
module.exports = error500;