import React from 'react';

class NomeSenha extends React.Component {
    render() {
        const { Salvar, SalvarSenha } = this.props;
        return (
            <>
            <input name="nome" type={"text"}  onChange={ Salvar}></input>
            <br /><input name="senha" type={"password"} onChange={SalvarSenha}></input>
            </>
        )
    }
}

export default NomeSenha;