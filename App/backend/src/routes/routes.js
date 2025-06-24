const express = require('express');
const route = express();
const vagasController = require('../controllers/vagasController');
const userControll = require('../controllers/userController')

route.get('/', (req,res) => {
    res.send('API is running');
});
route.get('/login', userControll.getUser);

route.post('create', userControll.createUser);

route.get('/vagas', vagasController.listVagas);

route.get('/vagas/:id', vagasController.listVagasById);

module.exports = route;

