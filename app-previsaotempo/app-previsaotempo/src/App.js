import React from 'react';
import Previsao from './componentes/Previsao/Previsao';
import Contador from './componentes/contador/Contador';
import Comentarios from './componentes/Comentarios/Comentarios';
import comentarios from './dados/comentarios';
import previsoes from './dados/previsoes';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibilidade: true
    }
  }
  render() {

    return (
      <div className="container">

            <div className="previsao" >
            {previsoes.map((previsao)=>(
              <Previsao
              data={previsao.data}
              resumo={previsao.resumo}
              imagem={previsao.imagem}
              
              max= {previsao.max}
              min={previsao.min}
              
              />
                
            ))}
               </div>
        <Contador />

        <div className="comentarios" >
          {comentarios.map((comentario) => (

            <Comentarios

              nome={comentario.autora.nome}
              imagem={comentario.autora.imagem}
              subtitulo={comentario.subtitulo}
              texto={comentario.texto}

            />

          ))
          }
        </div>
      </div>
    );
  }
}



export default App;
