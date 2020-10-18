import React from 'react';

class Principal extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            menu:""
        }
    }

    componentDidMount(){
        this.setState({menu:this.props.menuF})
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.menu
    }

    render(){
        return(
            <div className="contenedor">
                <p>Manuel {this.props.parame}</p>
            </div>
        )
    }
}

export default Principal;