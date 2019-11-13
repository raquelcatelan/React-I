import React from 'react';





const  Cards = props =>  {
    return (

        
            <div className="previsao" >

                <h1 className="previsao__data " >{props.data} </h1>
              <p className="previsao__resumo" > {props.clima}</p>
                <img className="previsao__img"  src={props.img} ></img>
                <table className="previsao-temperatura" >

                    <tr>
                        <td className="previsao-temperatura__linha" >Máxima</td>
                        <td className="previsao-temperatura__linha" >{props.maxima} </td>
                    </tr>

                    <tr>
                        <td className="previsao-temperatura__linha" >Minima</td>
                     <td className="previsao-temperatura__linha" >{props.minima}</td>
                    </tr>


                </table>

            </div>
        



    )
}

export default Cards; 