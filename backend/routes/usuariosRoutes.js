const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Registro y login
router.post('/registro', usuariosController.registro);
router.post('/login', usuariosController.login);

module.exports = router;
