const { pool } = require('../config/config');

const testController = async (req, res) => {
    try {
        const [row] = await pool.promise().query('SELECT * FROM users');

        console.log('Query result: ', row); 
        res.status(200).json({message: 'Test successful', data: row});

    }catch (error) {
        console.error('Error executing query: ', error);
        res.status(500).json({message: 'Error executing query', error: error.message});
    }
}

module.exports = { testController };