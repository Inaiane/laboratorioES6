import {currentInstance} from './controllers/ImcController';


let imc = currentInstance();
document.querySelector('.form').onsubmit = imc.adicionaPaciente.bind(imc);