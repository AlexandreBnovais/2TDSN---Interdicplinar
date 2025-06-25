const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if(err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    }
    console.log('Database connected sucessfully');
    connection.release();
});

process.on('SIGINT', () => {
    pool.end(err => {
        if(err) {
            console.error('Error closing the pool', err)
        }else {
            console.log('Database pool closed');
        }
        process.exit(0)
    })
});

module.exports = pool.promise();

