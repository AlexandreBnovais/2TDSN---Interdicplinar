const db = require ('../config/config.js');

exports.getUser = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM usuarios'); 
        res.json (rows);

    } catch (err) {
        res.status (500).json({
        error: err. menssage});
    
    }
    };

    exports.createUser = async (req, res) => {
        const { nome, email, senha } = req.body;
        
        try {
            const [result] = await db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]); 

            res.json({ id: result.insertId, nome, email });
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    };