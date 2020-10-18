import React from 'react';
// import MenuCasas from './MenuCasas';
import '../index.css';

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
                <p>HELLOW</p>
            </React.Fragment>
        )
    }
}

export default Casas;