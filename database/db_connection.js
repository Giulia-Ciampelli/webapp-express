// variabili d'importazione
const mysql = require('mysql2');

// connessione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connesso a MySql!');
})

// esportazione
module.exports = connection;