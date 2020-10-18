import React from 'react';
import ResultadoCasas from '../ResultadoCasas';

class Gryffindor extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            gryffindor:[],
            nombre:"Gryffindor"
        }
    }

    componentDidMount(){
        this.setState({gryffindor:this.props.gryffindor})
    }

    render(){
        return(
            <ResultadoCasas nombre={this.state.nombre} casa={this.state.gryffindor}/>
        )
    }
}

export default Gryffindor;