import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { FilterableTable } from 'react-filterable-table';

import { empresaActions } from '../../_actions';


class EmpresaPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(empresaActions.getAll());
    }

    render() {
        const { empresas } = this.props;
        const FilterableTable = require('react-filterable-table');
        console.log(empresas.items)
        // Fields to show in the table, and what object properties in the data they bind to
        const fields = [
            { name: 'nome', displayName: "Nome", inputFilterable: true, sortable: true },
            { name: 'usuarios', displayName: "Usuários", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'empresasProdutos', displayName: "Produtos", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'codigo', displayName: "Código", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'statusText', displayName: "Status", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'dtCadastroFormat', displayName: "Dt. Cad", inputFilterable: true, exactFilterable: true, sortable: true }
        ];

        return (
            <div className="col-md-12 col-md-offset-3">
                <h4>Empresas</h4>
                {empresas.loading && <em>Carregando empresas</em>}
                {empresas.error && <span className="text-danger">ERROR: {empresas.error}</span>}
                {empresas.items &&
                <FilterableTable
                    namespace="Empresa"
                    initialSort="nome"
                    filterMessage="Buscar por empresa, usuário ou código"
                    addItemText="Adicionar Empresa"
                    data={empresas.items}
                    fields={fields}
                    noRecordsMessage="Não há empresas para exibir"
                    noFilteredRecordsMessage="Não há empresas compatíveis com o filtro."
                />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { empresas } = state;
    return {
        empresas
    };
}

const connectedEmpresaPage = connect(mapStateToProps)(EmpresaPage);
export { connectedEmpresaPage as EmpresaPage };