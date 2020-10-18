import React from 'react';

class Principal extends React.Component{
    render(){
        return(
            <div>
                <p>Manuel {this.props.parame}</p>
            </div>
        )
    }
}

export default Principal;