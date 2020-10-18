import React from 'react';

class Hufflepuff extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hufflepuff:[]
        }
    }

    componentDidMount(){
        this.setState({hufflepuff:this.props.hufflepuff})
    }

    render(){
        return(
            <div className="contenedor">
                {this.state.hufflepuff.map(person => (
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
}

export default Hufflepuff;