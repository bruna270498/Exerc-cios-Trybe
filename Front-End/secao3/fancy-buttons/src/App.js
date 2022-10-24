import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.btn1 = this.btn1.bind(this)
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.state = {
      numerosClick: 0,
      clicksBtnOne: 0
    }
  }

  btn1() {
    this.setState((estadoAnterior, _props) => ({
      numerosClick: estadoAnterior.numerosClick + 1
    }))
    console.log(this)
    console.log('Bruna')
  }

  // Fazemos a definição do estado utilizando a sintaxe Public Class Field
  state = {
    numerosClique: 0
  }
  
   btn2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numerosClick: estadoAnterior.numerosClique + 1
    }))
    console.log(this)
    console.log('Leo')
  }
  
   btn3() {
    console.log(this)
    console.log('Morena')
  }
  handleButtonOne() {
    const { clicksBtnOne } = this.state;
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`);
    });
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  render () {
    const { numeroDeClique, clicksBtnOne } = this.state;
    return (
      <>
      <button onClick={this.btn1}>{`Clicado ${this.state.numerosClick}`}</button>
      <button onClick={this.btn2}>{`Clicado ${ numeroDeClique }`}</button>
      <button onClick={this.btn3}>Morena</button>
      <button
        type="button"
        onClick={ this.handleButtonOne }
        style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      </>
    )
  }
}

export default App;
