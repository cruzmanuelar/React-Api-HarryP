import React from 'react';
import ResultadoCasas from '../ResultadoCasas';

class Ravenclaw extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ravenclaw:[],
            nombre: "Ravenclaw"
        }
    }

    componentDidMount(){
        this.setState({ravenclaw:this.props.ravenclaw})
    }

    render(){
        return(
            <ResultadoCasas nombre={this.state.nombre} casa={this.state.ravenclaw}/>
        )
    }
}

export default Ravenclaw;