import React from "react";


const ComentariosDetalhes = props => {
    return (

        <div>
        <h2 className="comentario__nome" >{props.nome}</h2>

        <h3 className="comentario__subtitulo" >{props.subtitulo}</h3>

        
        <hr></hr>

      
</div>

    )


}

const DetalhesAuthor = props => {

    return(
     
        <p > {props.comentario}</p> 
        )
}

const Comentario = props => {
    return (
        <div>

        <ComentariosDetalhes
        nome= {props.nome}
        subtitulo= {props.subtitulo}
        />
        <DetalhesAuthor
        comentario= {props.comentario}
        />
        </div>
    )
}

const CriaComentarios = props => {
    return (
        <div className="comentario" >

            <img className="comentario__perfil" src={props.img} ></img>

            <Comentario
                    nome= {props.nome}
                    subtitulo= {props.subtitulo}
                    comentario= {props.comentario}
            />

        </div>
           
       

       
    )
}

export default CriaComentarios