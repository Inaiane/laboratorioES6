'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaPacientesView = exports.ListaPacientesView = function () {
    function ListaPacientesView(elemento) {
        _classCallCheck(this, ListaPacientesView);

        this._elemento = elemento;
    }

    _createClass(ListaPacientesView, [{
        key: 'update',
        value: function update(model) {

            this._elemento.innerHTML = this._template(model);
        }
    }, {
        key: '_template',
        value: function _template(model) {

            return '<table>\n                <thead>\n                    <tr>\n                        <th>Nome</th>\n                        <th>Peso(kg)</th>\n                        <th>Altura(m)</th>\n                        <th>IMC</th>\n                    </tr>\n                </thead>\n                <tbody>\n                ' + model.pacientes.map(function (p) {
                return '\n                    <tr class="paciente">\n                        <td class="info-nome">' + p.nome + '</td>\n                        <td class="info-peso">' + p.peso + '</td>\n                        <td class="info-altura">' + p.altura + '</td>\n                        <td class="info-imc">' + p.imc + '</td>\n                    </tr>\n                    ';
            }).join('') + '\n                </tbody>\n\t\t\t</table>';
        }
    }]);

    return ListaPacientesView;
}();