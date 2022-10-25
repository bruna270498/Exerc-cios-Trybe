import React from 'react';

class Forms extends React.Component{
    constructor() {
        super();

        this.SalvarNome = this.SalvarNome.bind(this)
        this.SalvarSenha = this.SalvarSenha.bind(this)
        this.Texto = this.Texto.bind(this)
        this.state = {
            nome: '',
            senha: '',
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
            <input name="nome" type={"text"} value={this.state.Salvar} onChange={this.SalvarNome}></input>
            <br /><input name="senha" type={"password"} value={this.state.SalvarSenha} onChange={this.SalvarSenha}></input>
            <br /><textarea name="texto" value={this.state.Salvar} onChange={this.Salvar}></textarea>
            <input type={"checkbox"} name="VaiComparecer" value={this.state.Salvar} ></input>
            </fieldset>
           </form>

        </div>
        )
    }
}

export default Forms;