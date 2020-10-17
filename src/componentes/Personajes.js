import React from 'react';
// import Imagen from './Imagen';

class Personajes extends React.Component{

    state = {
        personajes : []
      }

    componentDidMount(){

        // this.setState({personajes:["Manuel"]})
    
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({personajes: respuesta}))
    }

    mostrarPersonajes = () => {

        if(this.state.personajes.length === 0) return null;
        
        return(

            <div>
                {this.state.personajes.map(person => (
                        console.log(person.name)
                ))}
            </div>
        )
    }
    

    render(){
        return(
            <div>
                {this.mostrarPersonajes()}
            </div>
        )
    }
}

export default Personajes;