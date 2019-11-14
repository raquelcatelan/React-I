import React from 'react';
import CriaComentarios from "./componentes/componentes"
import Cat1 from "./assets/img/higiene-animais.jpg";
import Cat2 from "./assets/img/xgato2.jpg"
import './App.css';




function App() {
  return (
    <div className="App">
      <CriaComentarios
         img={Cat1}
        nome="Godofredo"
        subtitulo="socorro que video ruim"
        comentario="faz melhor "
      />
      <CriaComentarios
        img={Cat2}
       nome="Vitor "
       subtitulo="QUE VIDEOOOOO MASSAAAAA"
       comentario="TU É ZIKA MEU"
      
      />
    </div>
  );
}

export default App;
