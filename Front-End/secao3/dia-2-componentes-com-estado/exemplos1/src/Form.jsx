import React from 'react';

class Form extends React.Component() {
  constructor() {
    super()
    this.salvarNome= this.salvarNome.bind(this)
    this.state = {
      nome: '',
      senha: ''
    }
  }
  salvarNome(event) {
    this.setState({
      nome: event.target.value
    })
  }
  salvarSenha = (event) => {
    this.setState({
      senha: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Formulario de exercicio</h1>
        <form >
          <select>
            <option>São Paulo</option>
            <option>Minas Gerais</option>
            <option>Bahia</option>
            </select><br/>
          <input type={"text"} name="nome" value={this.state.nome} onChange={this.salvarNome}></input><br/>
          <textarea type={"text"}></textarea><br/>
          <input type={"password"} name="senha" value={this.state.senha} onChange={this.salvarSenha}></input><br/>
        </form>
      </div>
    );

  }
}
export default Form;