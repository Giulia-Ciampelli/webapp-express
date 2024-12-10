// middleware di log, logga data, metodo e URL
const logger = (req, res, next) => {
    const now = new Date();
    console.error(`
        Date: ${now}
        Method: ${req.method}
        URL: ${req.url}`);
    next();
}

// esportazione
module.exports = logger;