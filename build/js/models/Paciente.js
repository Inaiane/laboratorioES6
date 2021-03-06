"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paciente = exports.Paciente = function () {
    function Paciente(nome, altura, peso) {
        _classCallCheck(this, Paciente);

        this._nome = nome;
        this._altura = altura;
        this._peso = peso;
        Object.freeze(this);
    }

    _createClass(Paciente, [{
        key: "nome",
        get: function get() {

            return this._nome;
        }
    }, {
        key: "altura",
        get: function get() {

            return this._altura;
        }
    }, {
        key: "peso",
        get: function get() {

            return this._peso;
        }
    }, {
        key: "imc",
        get: function get() {

            var imc = Math.floor(this._peso / (this._altura * this._altura));
            return imc;
        }
    }]);

    return Paciente;
}();