import {Paciente} from "../models/Paciente";
import {ListaPacientes} from "../models/ListaPacientes";
import {ListaPacientesView} from "../views/ListaPacientesView";

class ImcController {
    
    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputAltura = $('#altura');
        this._inputPeso = $('#peso');
        this._listaPacientes = new ListaPacientes();
        this._listaPacientesView = new ListaPacientesView($('#listaPacientesView'));
        this._listaPacientesView.update(this._listaPacientes);
        
    }

    adicionaPaciente(event){

        event.preventDefault();

        this._listaPacientes.adiciona(this._criaPaciente());
        this._listaPacientesView.update(this._listaPacientes);
        this._limpaFormulario();

    }

    _criaPaciente() {

        return new Paciente(this._inputNome.value, parseFloat(this._inputAltura.value), parseFloat(this._inputPeso.value));
    }

    _limpaFormulario(){

        this._inputNome.value = '';
        this._inputAltura.value = 0.0;
        this._inputPeso.value = 0;
        this._inputNome.focus();
    }

    
}
let imcController = new ImcController();

export function currentInstance() {

    return imcController;

}