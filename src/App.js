import React from 'react';
import Cabecera from './componentes/Cabecera';
import './index.css';
//import Personajes from './componentes/Personajes';

class App extends React.Component{

  state = {
    personajes : []
  }

  consultarApi = () => {

    const url = 'http://hp-api.herokuapp.com/api/characters';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({personajes: resultado}))
  }

  componentDidMount(){
    this.consultarApi();
  }
  render(

  ){
    return(
      <Cabecera parame={this.state.personajes}/>
    )
  }
}
export default App;
