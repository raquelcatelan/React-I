import React from 'react';

const BotoesContador = props => {
    return(
        

                    <div>
                        <button className="botaoMaisUm" onClick={props.cliqueAddUm} disabled={props.disabled} >+1</button>
                        <button className="botaoMenosUm" onClick={props.cliqueSubUm} disabled={props.disabled} >-1</button>
                        <button className="resetar" onClick={props.cliqueResetar} >resetar</button>
                       

                    </div>
                

        
    )
}

export default BotoesContador;