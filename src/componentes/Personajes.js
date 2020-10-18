import React from 'react';

class Personajes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            personajes:[]
        }
    }

    componentDidMount(){
        this.setState({personajes:this.props.personajes})
    }

    mostrarPersonajes = () => {

        if(this.state.personajes.length === 0) return null;
        
        return(
            <div className="contenedor">
                {this.state.personajes.map(person => (
                    <div key={person.actor} className="caja">
                        <div className="info">
                            <img id="imagen" alt="Imagen" src={person.image}/>
                            <div className="infoTarjeta">
                                <p><strong>Actor:</strong> {person.actor}</p>
                                <p><strong>Nombre:</strong> {person.name}</p>
                                <p><strong>Especie:</strong> {person.species}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    
    render(){
        return(
            <div>
                <div className="Pprincipales">
                    <h3 className="tituloPP">Personajes</h3>
                </div>
                {this.mostrarPersonajes()}
            </div>
        )
    }
}

export default Personajes;