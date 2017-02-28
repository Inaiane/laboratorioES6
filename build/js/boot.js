'use strict';

var _ImcController = require('./controllers/ImcController');

var imc = (0, _ImcController.currentInstance)();
document.querySelector('.form').onsubmit = imc.adicionaPaciente.bind(imc);