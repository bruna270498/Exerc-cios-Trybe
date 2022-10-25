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
        };
    }
    SalvarNome(event) {
        console.log(event)
        this.setState({
            nome: event.target.value
        })
    }
    SalvarSenha(event) {
        this.setState({
            senha:event.target.value
        })
    }
    Texto(event) {
        this.setState({
            texto:event.target.value
        })
    }
    render() {
        return (
        <div>
           <form>
            <input name="nome" type={"text"} value={this.state.SalvarNome} onChange={this.SalvarNome}></input>
            <br /><input name="senha" type={"password"} value={this.state.SalvarSenha} onChange={this.SalvarSenha}></input>
            <br /><textarea name="texto" value={this.state.Texto} onChange={this.Texto}></textarea>
            <input type={"checkbox"} value={} ></input>
           </form>

        </div>
        )
    }
}

export default Forms;