"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListaPacientes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Paciente = require("./Paciente");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaPacientes = exports.ListaPacientes = function () {
    function ListaPacientes() {
        _classCallCheck(this, ListaPacientes);

        this._pacientes = [];
        this._initPacientes();

        console.log('this._pacientes');
        console.log(this._pacientes);
    }

    _createClass(ListaPacientes, [{
        key: "_initPacientes",
        value: function _initPacientes() {

            if (!localStorage.pacientes) {
                localStorage.pacientes = JSON.stringify([]);
            }
            var i = 0;
            var arrayPacientes = JSON.parse(localStorage.pacientes);

            for (i = 0; i < arrayPacientes.length; i++) {
                var paciente = new _Paciente.Paciente(arrayPacientes[i]._nome, arrayPacientes[i]._altura, arrayPacientes[i]._peso);

                this._pacientes.push(paciente);
            }
            console.log("this._pacientes");
            console.log(this._pacientes);
        }
    }, {
        key: "adiciona",
        value: function adiciona(paciente) {

            this._pacientes.push(paciente);
            localStorage.pacientes = JSON.stringify(this._pacientes);
        }
    }, {
        key: "pacientes",
        get: function get() {

            return [].concat(this._pacientes);
        }
    }]);

    return ListaPacientes;
}();