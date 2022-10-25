import React from 'react';
import NomeSenha from './NomeSenha';
import Texto from './Texto';

class Forms extends React.Component{
    constructor() {
        super();

        this.Salvar = this.Salvar.bind(this)
        this.SalvarSenha = this.SalvarSenha.bind(this)
        this.state = {
            nome:'',
            senha:'',
            texto:'',
            VaiComparecer: false,
        };
    }
    //isso é um event handler genérico:
    //porque se o nome mudar evita que meu código quebre
    //e também nós permite usar em varias tags
    Salvar({target}) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        })
    }
    SalvarSenha(event) {
        this.setState({
            senha:event.target.value
        })
    }

    render() {
        return (
        <div>
           <form>
            <fieldset>
            <NomeSenha Salvar={this.Salvar} SalvarSenha={this.SalvarSenha} />
            <Texto value={this.state.Salvar} Salvar={this.Salvar} />
            <br /><input type={"checkbox"} name="VaiComparecer" value={this.state.Salvar} onChange={this.Salvar}></input>
            </fieldset>
           </form>

        </div>
        )
    }
}

export default Forms;