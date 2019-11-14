import React, { Component } from 'react';


class Previsao extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           
            <div>
                <h1 className="previsao__data " >{this.props.data} </h1>
                <p className="previsao__resumo" > {this.props.resumo}</p>
                <img className="previsao__img" src={this.props.imagem} ></img>
                <table className="previsao-temperatura" >

                    <tr>
                        <td className="previsao-temperatura__linha" >Máxima</td>
                        <td className="previsao-temperatura__linha" >{this.props.max} </td>
                    </tr>

                    <tr>
                        <td className="previsao-temperatura__linha" >Minima</td>
                        <td className="previsao-temperatura__linha" >{this.props.min}</td>
                    </tr>


                </table>

            </div>

            

        )
    }
}

export default Previsao;