const express = require('express');
const { testController } = require('../controllers/teste');
const route = express.Router();


route.get('/test', async (req, res) => {
    try { 
        const result = await testController(req, res);
        res.status(200).json(result)
    }catch (error) {
        console.error('Error in /test route ', error);
        res.status(500).json({message: 'Error in /test route', error: error.message});
    }
});

module.exports = route;