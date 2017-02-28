export class Paciente {

    constructor(nome, altura, peso){

        this._nome = nome;
        this._altura = altura;
        this._peso = peso;
        Object.freeze(this);
    }

    get nome(){

        return this._nome;
    }

    get altura(){

        return this._altura;
    }

    get peso(){

        return this._peso;
    }

    get imc(){

        let imc = Math.floor(this._peso / (this._altura * this._altura));
        return imc;
    }


}