import React from 'react';
import Resultado from '../Resultado';

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
            <Resultado nombre={this.state.nombre} casa={this.state.ravenclaw}/>
        )
    }
}

export default Ravenclaw;