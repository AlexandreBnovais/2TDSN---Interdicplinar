const express = require('express');
const route = express();
const vagasController = require('../controllers/vagasController');
const userControll = require('../controllers/userController');
const userVacancyController = require('../controllers/userVacancyController');


route.get('/', (req,res) => {
    res.send('API is running');
});
route.get('/login', userControll.getUser);

route.post('/novo', userControll.createUser);

route.get('/vagas', vagasController.listVagas);

route.get('/vagas/:id', vagasController.listVagasById);

route.post('/novaCandidatura', userVacancyController.userVacancie);

route.get('/candidaturas/:id', userVacancyController.listUserVacancy);

module.exports = route;

