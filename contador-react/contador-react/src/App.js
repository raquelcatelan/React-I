import React from 'react';
import logo from './logo.svg';
import './App.css';


class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      visibilidade: true,
      freeze:false
    };
    
    
  }

  adicionarUm = () => {
    this.setState((prevState) => {

      return {
        contador: prevState.contador + 1
      }
    })
  }

  reduzirUm = () => {
    this.setState((prevState) => {

      return {
        contador: prevState.contador - 1
      }
    })
  }

  resetar = () => {

    this.setState(() => {
      return {
        contador: 0
      }

    })
  }

  visivel = () =>{

    this.setState((prevState) => {
      return{
      visibilidade: !prevState.visibilidade
      }
    })
  }

  congelar =() => {
    this.setState((prevState) => {

      return{
        freeze: !prevState.freeze
      }

    })
  }

  render() {
    return (
      <div>
      <p>{this.state.contador}</p>
       
        <button onClick={this.visivel} >{this.state.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}</button>
        {this.state.visibilidade=== true ? (
        <div>
        <button className="botaoMaisUm" onClick={this.adicionarUm}  disabled={this.state.freeze} >+1</button>
        <button className="botaoMenosUm" onClick={this.reduzirUm} disabled={this.state.freeze} >-1</button>
        <button className="resetar" onClick={this.resetar} disabled={this.state.freeze} >resetar</button>
       <button onClick={this.congelar}  >Finalizar Contador </button>
        </div>
      ) : ''}
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">

      <h2>Contador:</h2>

      <Contador

      />


    </div>
  );
}

export default App;
