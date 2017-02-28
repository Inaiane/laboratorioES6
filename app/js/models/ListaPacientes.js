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
        
        this._pacientes = JSON.parse(localStorage.pacientes);
    }

    adiciona(paciente) {
        
        this._pacientes.push(paciente);
        localStorage.pacientes = JSON.stringify(this._pacientes);
    }

    get pacientes() {

        return [].concat(this._pacientes);
    }
}