const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'proUnitDB',
    connectionLimit: 10,
    waitForConnections: 1
});

process.on('SIGINT', () => {
    pool.end(err => {
        if(err) {
            console.error('Error closing the pool', err);
        }else {
            console.log('Database pool closed')
        }
        process.exit(0)
    })
})

module.exports = pool.promise;