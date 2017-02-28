'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        key: '_initPacientes',
        value: function _initPacientes() {

            if (!localStorage.pacientes) {
                localStorage.pacientes = JSON.stringify([]);
            }

            this._pacientes = JSON.parse(localStorage.pacientes);
        }
    }, {
        key: 'adiciona',
        value: function adiciona(paciente) {

            this._pacientes.push(paciente);
            localStorage.pacientes = JSON.stringify(this._pacientes);
        }
    }, {
        key: 'pacientes',
        get: function get() {

            return [].concat(this._pacientes);
        }
    }]);

    return ListaPacientes;
}();