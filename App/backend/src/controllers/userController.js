const { pool } = require ('../config/config.js');
const bcrypt = require('bcrypt');

exports.getUser = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM usuarios'); 
        res.status(200).json({message: 'Query successfully', users: rows});

    }catch(err) {
        console.log('Error select data')
        res.status(500).json({
        error: err.menssage});    
    }
};

exports.createUser = async (req, res) => {
    //Desestruturando corpo da requisição
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha) {
        res.status(400).json({message: `missed required fields: ${nome}, ${email}, ${senha}`});
    }
    
    try {
        //transforma senha em uma cadeia de hash 
        const hashedPassword = await bcrypt.hash(senha, 10);

        //Insere dados a tabla usuarios
        const [rows] = await pool.promise().execute(
            'INSERT INTO usuarios(nome, email, senha_hash) VALUES (?, ?, ?)', [nome, email, hashedPassword]
        ); 
        res.status(201).json({message: 'create user successfully', user: rows.insertId }); 

    }catch(err) {
        console.error('Database query failed', err);
        res.status(500).json({ message: 'Database query failed', error: err.message});
    }
};