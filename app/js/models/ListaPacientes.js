import {Paciente} from "./Paciente";
export class ListaPacientes {

    constructor() {

        this._pacientes = [];
        this._initPacientes();
        
        console.log('this._pacientes');
        console.log(this._pacientes);
    }

    _initPacientes() {

        if (!localStorage.pacientes) {
            localStorage.pacientes = JSON.stringify([]);
        }
        let i = 0;
        let arrayPacientes = JSON.parse(localStorage.pacientes);

        for(i = 0; i < arrayPacientes.length; i++){
            let paciente = new Paciente(arrayPacientes[i]._nome, arrayPacientes[i]._altura, arrayPacientes[i]._peso);

            this._pacientes.push(paciente);
        }
        console.log("this._pacientes");
        console.log(this._pacientes);
    }

    adiciona(paciente) {
        
        this._pacientes.push(paciente);
        localStorage.pacientes = JSON.stringify(this._pacientes);
    }

    get pacientes() {

        return [].concat(this._pacientes);
    }
}