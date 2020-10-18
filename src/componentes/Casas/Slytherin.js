import React from 'react';

class Slytherin extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            slytherin:[]
        }
    }

    componentDidMount(){
        this.setState({slytherin:this.props.slytherin})
    }

    render(){
        return(
            <div className="contenedor">
                {this.state.slytherin.map(person => (
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

export default Slytherin;