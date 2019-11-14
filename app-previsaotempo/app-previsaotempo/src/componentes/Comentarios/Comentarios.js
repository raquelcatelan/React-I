import React , {Component} from 'react';

class Comentarios extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

            

            <div className="comentario"  >  
            <img className="comentario__perfil" src={this.props.imagem} ></img>
            <h2 className="comentario__nome" >{this.props.nome}</h2>
    
            <h3 className="comentario__subtitulo" >{this.props.subtitulo}</h3>
    
            
            <hr></hr>
            <p > {this.props.texto}</p> 

          
    </div>


              

        )
    }
}

export default Comentarios;