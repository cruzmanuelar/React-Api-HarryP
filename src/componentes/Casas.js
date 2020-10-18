import React from 'react';
import '../index.css';
import Gry from '../img/gry.jpg';
import Hu from '../img/hu.jpg';
import Raven from '../img/raven.jpg';
import Sy from '../img/sy.jpg';

class Casas extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            propiedad : 'flex'
        }
    
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.propiedad;
    }

    render(){
        return(
            <React.Fragment>
                <div className="contenedorImagenes2">
                    <div className="contenedorImagen2">
                        <img alt="imgCasa" src={Gry} className="imagenesCasas"></img>
                        <div className="infoTarjeta2">
                            <div className="textoTarjeta">
                                <p>Gryffindor</p>
                                <p>Fundador: Godric Gryffindor</p>
                                <p>Simbolo: León</p>
                            </div>
                        </div>
                    </div>
                    <div className="contenedorImagen2">
                        <img alt="imgCasa" src={Hu} className="imagenesCasas"></img>
                        <div className="infoTarjeta2">
                            <div className="textoTarjeta">
                                <p>Hufflepuff</p>
                                <p>Fundador: Helga Hufflepuff</p>
                                <p>Simbolo: Tejón</p>
                            </div>
                        </div>
                    </div>
                    <div className="contenedorImagen2">
                        <img alt="imgCasa" src={Raven} className="imagenesCasas"></img>
                        <div className="infoTarjeta2">
                            <div className="textoTarjeta">
                                <p>Ravenclaw</p>
                                <p>Fundador: Rowena Ravenclaw</p>
                                <p>Simbolo: Águila</p>
                            </div>
                        </div>
                    </div>        
                    <div className="contenedorImagen2">
                        <img alt="imgCasa" src={Sy} className="imagenesCasas"></img>
                        <div className="infoTarjeta2">
                            <div className="textoTarjeta">
                                <p>Slytherin</p>
                                <p>Fundador: Salazar Slytherin</p>
                                <p>Simbolo: Serpiente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Casas;