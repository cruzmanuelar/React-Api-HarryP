import React from 'react';

class Profesores extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            profesores:[]
        }
    }

    componentDidMount(){
        this.setState({profesores:this.props.profesores})
    }

    mostrarProfesores = () => {

        if(this.state.profesores.length === 0) return null;
        
        return(
            <div className="contenedor">
                {this.state.profesores.map(person => (
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
                    <h3 className="tituloPP">Profesores</h3>
                </div>
                {this.mostrarProfesores()}
            </div>
        )
    }
}

export default Profesores;