const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'mehvish ', 
    password: 'Mahvish33@', 
    database: 'flashcards_db' 
});

module.exports = pool;
