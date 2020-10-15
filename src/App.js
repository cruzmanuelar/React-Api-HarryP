import React from 'react';
// import Cabecera from './componentes/Cabecera';
import './index.css';
import Personajes from './componentes/Personajes';

class App extends React.Component{

  state = {
    personajes : []
  }

  componentDidMount(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({personajes: respuesta}))
  }

  render(){
    return(
      <Personajes parame={this.state.personajes}/>
    )
  }
}
export default App;
