/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Cabecera extends React.Component{

    render(){
        return(
            <div className="cabecera">
                <h1>Harry Potter</h1>
                <nav className="navegacion">
                    <a href="#">Principal</a>
                    <a href="#">Personajes</a>
                    <a href="#">Estudiantes</a>
                    <a href="#">Profesores</a>
                    <a href="#">Casas</a>
                </nav>
            </div>
        )
    }
}

export default Cabecera;