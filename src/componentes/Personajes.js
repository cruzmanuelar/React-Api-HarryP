import React from 'react';
import ResultadoP from './ResultadoP';

class Personajes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            personajes:[],
            nombre:"Personajes",
            menu:"",
        }
    }

    componentDidMount(){
        this.setState({personajes:this.props.personajes,menu:this.props.menuF})
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.menu
    }
    
    render(){
        return(

            <ResultadoP nombre={this.state.nombre} personajes={this.state.personajes}/>
        )
    }
}

export default Personajes;