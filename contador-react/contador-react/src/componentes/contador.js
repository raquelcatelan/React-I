
import React from 'react';
import BotaoVisivel from './BotaoVisivel';
import BotaoFinalizar from './BotaoFinalizar';
import BotoesContador from './BotoesContador';


export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            visibilidade: true,
            freeze: false
        };


    }

    adicionarUm = () => {
        this.setState((prevState) => {

            return {
                contador: prevState.contador + 1
            }
        })
    }

    reduzirUm = () => {
        this.setState((prevState) => {

            return {
                contador: prevState.contador - 1
            }
        })
    }

    resetar = () => {

        this.setState(() => {
            return {
                contador: 0,
                freeze: false
            }

        })
    }


    visivel = () => {

        this.setState((prevState) => {
            return {
                visibilidade: !prevState.visibilidade
            }
        })
    }



    congelar = () => {
        this.setState(() => {

            return {
                freeze: true
            }

        })
    }

    render() {
        return (
            <div>
                <p>{this.state.contador}</p>

                <BotaoVisivel
                    onClickMetodo={this.visivel}
                    visibilidade={this.state.visibilidade}
                />

                {this.state.visibilidade && (
                    <BotoesContador
                        disabled={this.state.freeze}
                        cliqueAddUm={this.adicionarUm}
                        cliqueSubUm={this.reduzirUm}
                        cliqueResetar={this.resetar}
                    />
                )}

                {this.state.contador !== 0 && (
                    <BotaoFinalizar
                        cliqueCongelar={this.congelar}
                    />
                )}

            </div>
        );
    }
}



