import React from 'react';

class ResultadoP extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Pprincipales">
                    <h3 className="tituloPP">{this.props.nombre}</h3>
                </div>
                <div className="contenedor">
                {this.props.personajes.map(person => (
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
            </React.Fragment>
        )
    }
}

export default ResultadoP;
