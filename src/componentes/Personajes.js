import React from 'react';

class Personajes extends React.Component{

    state = {
        personajes : []
    }

    componentDidMount(){
    
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({personajes: respuesta}))
    }

    mostrarPersonajes = () => {

        if(this.state.personajes.length === 0) return null;
        
        return(
            <div className="contenedorPP">
                {this.state.personajes.map(person => (
                    <div className="tarjeta">
                            <div><img className="imagen" alt="Foto Personaje" src={person.image}/></div>
                            <div>Nombre: {person.name}</div>
                            <div>Actor: {person.actor}</div>
                            <div>Género: {person.gender}</div>
                            <div>Especie: {person.species}</div>
                                
                    </div>
                ))}
            </div>
        )
    }
    

    render(){
        return(
            <div>
                <div className="Pprincipales">
                    <h3 className="tituloPP">Personajes Principales</h3>
                </div>
                {this.mostrarPersonajes()}
            </div>
        )
    }
}

export default Personajes;