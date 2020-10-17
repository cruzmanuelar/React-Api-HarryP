import React from 'react';
import './index.css';
import Cabecera from './componentes/Cabecera';
import Personajes from './componentes/Personajes';

class App extends React.Component{

  render(){
    return(
      <React.Fragment>
        <Cabecera/>
        <Personajes/>
      </React.Fragment>
    )
  }
}
export default App;
