import React from 'react';
import Cards from './componentes/cards';
import Sol from './assets/sol.png';
import Nuvem from './assets/nuvens.png'
import './App.css';

function App() {
  return (
    <div className="App previsao-container">
      <Cards
        data="31/05/2019"
        clima="Ensolarado"
        img={Sol}
        maxima="31ºC"
        minima="20ºC"
      // temperatura={{
      //   maxima: 31,
      //   minima: 20
      // } eu poderia mudar a props para {props.temperatura.maxima ou .minima} por que esta em modo de array
    // }
      />



      <Cards
        data="01/06/2019"
        clima="Nublado"
        img={Nuvem}
        maxima="25ºC"
        minima="18ºC"
      />

    </div>
  );
}

export default App;
