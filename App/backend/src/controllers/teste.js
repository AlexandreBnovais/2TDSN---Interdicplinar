const { pool } = require('../config/config');
 
exports.testController = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM usuarios');
        console.log('Rows: ', rows);
        res.status(200).json({message: 'Test successfully executed', data: rows});

    }catch (error) {
        console.error('Error executing test: ', error);
        res.status(500).json({message: 'Error executing test', failed: error.message});
    }
}