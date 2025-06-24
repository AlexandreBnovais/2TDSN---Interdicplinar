const { pool } = require ('../config/config.js');

exports.getUser = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM usuarios'); 
        res.status(200).json({message: 'Query successfully', users: rows});

    } catch (err) {
        console.log('Error select data')
        res.status(500).json({
        error: err.menssage});    
    }
};

exports.createUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha) {
        res.status(400).json({message: `missed required fields: ${nome}, ${email}, ${senha}`});
    }
    
    try {
        const [rows] = await pool.promise().query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]
        ); 
        res.status(201).json({message: 'create user successfully', user: rows.insertId }); 

    } catch (err) {
        console.error('Database query failed', err);
        res.status(500).json({
            message: 'Database query failed',
            error: err.message
        });
    }
};