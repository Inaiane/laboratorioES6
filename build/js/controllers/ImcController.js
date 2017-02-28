"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.currentInstance = currentInstance;

var _Paciente = require("../models/Paciente");

var _ListaPacientes = require("../models/ListaPacientes");

var _ListaPacientesView = require("../views/ListaPacientesView");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImcController = function () {
    function ImcController() {
        _classCallCheck(this, ImcController);

        var $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputAltura = $('#altura');
        this._inputPeso = $('#peso');
        this._listaPacientes = new _ListaPacientes.ListaPacientes();
        this._listaPacientesView = new _ListaPacientesView.ListaPacientesView($('#listaPacientesView'));
        this._listaPacientesView.update(this._listaPacientes);
    }

    _createClass(ImcController, [{
        key: "adicionaPaciente",
        value: function adicionaPaciente(event) {

            event.preventDefault();

            this._listaPacientes.adiciona(this._criaPaciente());
            this._listaPacientesView.update(this._listaPacientes);
            this._limpaFormulario();
        }
    }, {
        key: "_criaPaciente",
        value: function _criaPaciente() {

            return new _Paciente.Paciente(this._inputNome.value, parseFloat(this._inputAltura.value), parseFloat(this._inputPeso.value));
        }
    }, {
        key: "_limpaFormulario",
        value: function _limpaFormulario() {

            this._inputNome.value = '';
            this._inputAltura.value = 0.0;
            this._inputPeso.value = 0;
            this._inputNome.focus();
        }
    }]);

    return ImcController;
}();

var imcController = new ImcController();

function currentInstance() {

    return imcController;
}