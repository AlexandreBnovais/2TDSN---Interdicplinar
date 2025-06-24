const { pool } = require('../config/config');

exports.listVagas = async (req, res) => {
    try {
        const [rows] = await pool.promise().query(
            'SELECT id, titulo, descricao, localizacao, requisitos FROM vagas'
        );
        if(rows.length === 0) {
            res.status(404).json({message: 'Vagas não encontradas'});
        }
        res.status(200).json({message: 'Query vacancies successfully', rows})

    }catch(error) {
        console.error('Failed query server', error);
        res.status(500).json({message: 'Failed query Server', erro: error})
    }
};

exports.listVagasById = async (req, res) => {
    const id_vagas = req.params.id;

    if(!id_vagas || isNaN(id_vagas)) {
        return res.status(404).json({message: 'Vacancy not found'})
    }

    try {
        const [rows] = await pool.promise().query(
            'SELECT id, titulo, descricao, localizacao, requisitos FROM vagas WHERE id = ?', id_vagas
        );

        if(rows.length === 0) {
            return res.status(404).json({message: 'Vagas não encontradas'});
        }
        return res.status(200).json({message: 'Query vacancies successfully', rows})
               
    }catch(error) {
        console.error('Failed query server', error);
        return res.status(500).json({message: 'Failed query Server', erro: error.message})
    }
}