import React from 'react';

class Estudiantes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            estudiantes:[],
            menu:""
        }
    }

    componentDidMount(){
        this.setState({estudiantes:this.props.estudiantes,menu:this.props.menuF})
        var propi = document.getElementById('navegacionCasas');
        propi.style.display = this.state.menu
    }

    mostrarEstudiantes = () => {

        if(this.state.estudiantes.length === 0) return null;
        
        return(
            <div className="contenedor">
                {this.state.estudiantes.map(person => (
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
                    <h3 className="tituloPP">Estudiantes</h3>
                </div>
                {this.mostrarEstudiantes()}
            </div>
        )
    }
}

export default Estudiantes;