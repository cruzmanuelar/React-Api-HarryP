import React from 'react';
import ResultadoCasas from '../ResultadoCasas';

class Hufflepuff extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hufflepuff:[],
            nombre:"hufflepuff"
        }
    }

    componentDidMount(){
        this.setState({hufflepuff:this.props.hufflepuff})
    }

    render(){
        return(
            <ResultadoCasas nombre={this.state.nombre} casa={this.state.hufflepuff}/>
        )
    }
}

export default Hufflepuff;