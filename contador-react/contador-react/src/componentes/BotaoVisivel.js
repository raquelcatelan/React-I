import React from 'react'

const BotaoVisivel = props => {
    return (

        <div>
            <button onClick={props.onClickMetodo} >
            {props.visibilidade === true
                ? "Fechar Contador"
                : "Abrir Contador"}
            </button>
           
        </div>

    )


}

export default BotaoVisivel;