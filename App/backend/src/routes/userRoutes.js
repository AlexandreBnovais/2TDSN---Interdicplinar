const express = require('express');
const router = express.Router();
const userController = require("../controllers/usercontrol");

//listar usuários 
router.get('/users', userController.getUser);

// Criar usuário

router.post('/users', userController.createUser);

module.exports = router;