export class ListaPacientesView{


    constructor(elemento){
        
        this._elemento = elemento;

    }

    update(model){

         this._elemento.innerHTML = this._template(model);
    }

    _template(model){
        
        return `<table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso(kg)</th>
                        <th>Altura(m)</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                ${model.pacientes.map( p => `
                    <tr class="paciente">
                        <td class="info-nome">${p.nome}</td>
                        <td class="info-peso">${p.peso}</td>
                        <td class="info-altura">${p.altura}</td>
                        <td class="info-imc">${p.imc}</td>
                    </tr>
                    `).join('')}
                </tbody>
			</table>`
    }
}