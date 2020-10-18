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
                <div className="contenedorImagenes">
                    <img alt="imgCasa" src={Gry} className="imagenesCasas"></img>
                    <img alt="imgCasa" src={Hu} className="imagenesCasas"></img>
                    <img alt="imgCasa" src={Raven} className="imagenesCasas"></img>
                    <img alt="imgCasa" src={Sy} className="imagenesCasas"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default Casas;