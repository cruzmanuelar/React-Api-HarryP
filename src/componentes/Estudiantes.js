import React from 'react';
import ResultadoP from './ResultadoP';

class Estudiantes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            estudiantes:[],
            nombre:"Estudiantes",
            menu:""
        }
    }

    componentDidMount(){
        this.setState({estudiantes:this.props.estudiantes,menu:this.props.menuF})
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.menu
    }

    render(){
        return(
            <ResultadoP nombre={this.state.nombre} personajes={this.state.estudiantes}/>
        )
    }
}

export default Estudiantes;