import React from 'react';
import Resultado from '../Resultado';

class Slytherin extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            slytherin:[],
            nombre:"Slytherin"
        }
    }

    componentDidMount(){
        this.setState({slytherin:this.props.slytherin})
    }

    render(){
        return(
            <Resultado nombre={this.state.nombre} casa={this.state.slytherin}/>
        )
    }
}

export default Slytherin;