import React from 'react';
import ResultadoP from './ResultadoP';

class Profesores extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            profesores:[],
            nombre:"Profesores",
            menu:""
        }
    }

    componentDidMount(){
        this.setState({profesores:this.props.profesores,menu:this.props.menuF})
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.menu
    }

    render(){
        return(
            <ResultadoP nombre={this.state.nombre} personajes={this.state.profesores}/>
        )
    }
}

export default Profesores;