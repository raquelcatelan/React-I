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
        nome="Bichano"
        subtitulo="QUE GATO FOFO"
        comentario="ESSE GATO É MUITO FOFO MUITO LINDO EU AMO MUITO"
      />
      <CriaComentarios
        img={Cat2}
       nome="Gatuxo"
       subtitulo="QUE GATO lindo"
       comentario="  oh bicnhinho..."
      
      />
    </div>
  );
}

export default App;
