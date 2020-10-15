/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Cabecera extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data : this.props.parame
        }

    }
    

    render(){
        return(
            <div className="cabecera">
                <div>
                    <a href="#"><h1>Harry Potter</h1></a>
                </div>
                <div>
                    <nav className="navegacion">
                        <a href="#">Principal</a>
                        <a href="#">Personajes</a>
                        <a href="#">Estudiantes</a>
                        <a href="#">Profesores</a>
                        <a href="#">Casas</a>
                    </nav>
                </div>
                <div>
                    {console.log(this.state.data)}
                </div>
            </div>
        )
    }
}

export default Cabecera;