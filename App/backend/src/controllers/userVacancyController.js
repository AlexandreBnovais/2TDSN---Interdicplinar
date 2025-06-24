const { pool } = require('../config/config');

// Controller para criar candidatura 
exports.userVacancie = async (req, res) => {
    const {user_id, vacancy_id, status} = req.body;
    
    //Verifica se os campos estão preechidos 
    if(!user_id || !vacancy_id ) {
        res.status(400).json({message: 'missed required id'})
    }

    try {
        //Verifica se o usuario existe
        const [userResult] = await pool.promise().execute(
            'SELECT id FROM users WHERE id = ?', [user_id]
        );

        if(userResult.length === 0) {
            res.status(404).json({message: 'Usuario não cadastrado'})
        }

        //Verifica se a vaga existe
        const [jobResult] = await pool.promise().execute(
            'SELECT id FROM vagas WHERE id = ?', [vacancy_id]
        );

        if(jobResult.length === 0) {
            res.status(404).json({message: 'Vaga não encontrada'})
        }

        // Verificar se o usuário já se candidatou para essa vaga
        const [existingApplication] = await pool.promise().execute(
            'SELECT id FROM candidaturas WHERE id_usuario = ? AND id_vaga = ?',
            [user_id, vacancy_id]
        );

        if (existingApplication.length > 0) {
            res.status(409).json({ message: 'Você já se candidatou para esta vaga.' });
        };

        // Efetua uma candidatura
        const [rows] = await pool.promise().execute(
            'INSERT INTO candidaturas(id_usuario, id_vaga) VALUES (?,?)',
            [user_id, vacancy_id]
        );
        res.status(201).json({message: 'Candidatura efetuada com sucesso!', sucess: rows.insertId});

    }catch(error) {
        console.log('Erro ao candidatar-se', error);
        res.status(500).json({message: 'Error no servidor interno', err: error.message});
    } 
} 

// Controller para listar todas as candidaturas do usuario
exports.listUserVacancy = async (req,res) => {
    const user_id = req.params;

    try {
        const [rows] = await pool.promise().execute(
            `SELECT
            id_cand,
            status,
            data_candidatura,
            titulo,
            descricao,
            localizacao 
            FROM candidaturas c
            JOIN vagas v ON c.id_vaga = v.id
            WHERE c.id_usuario = ?`,[user_id]
        );

        res.json(rows);
    }catch (err) {
        console.error('Erro ao buscar candidaturas do usuário:', err);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}  

