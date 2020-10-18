import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import './index.css';
import Personajes from './componentes/Personajes';
import Principal from './componentes/Principal';
import Estudiantes from './componentes/Estudiantes';
import Profesores from './componentes/Profesores';
import Casas from './componentes/Casas';

class App extends React.Component{

  state = {
    personajes:[],
    estudiantes:[],
    profesores:[],
    casas:[],
    menuT:"flex",
    menuF:"none"
  }

  componentDidMount(){

    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({personajes: respuesta}))

    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({estudiantes: respuesta}))

    fetch('http://hp-api.herokuapp.com/api/characters/staff')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({profesores: respuesta}))
  }

  menuCasas = () => {

    // var menuC = document.getElementById('navegacionCasas');
    // menuC.style.display = 'flex';

    console.log("Testa");

  }

  render(){
    return(
      <Router>
        <div className="cabecera">
          <h1>Harry Potter</h1>
        </div>
        <div className="navegacion">
          <Link to="/" className="enlace">Principal</Link>
          <Link to="/personajes" className="enlace">Personajes</Link>
          <Link to="/estudiantes" className="enlace">Estudiantes</Link>
          <Link to="/profesores" className="enlace">Profesores</Link>
          <Link to="/casas" className="enlace">Casas</Link>
        </div>
        <div id="navegacionCasas">
          <Link to="/personajes" className="enlace">Gryffindor</Link>
          <Link to="/estudiantes" className="enlace">Hufflepuff</Link>
          <Link to="/profesores" className="enlace">Ravenclaw</Link>
          <Link to="/casas" className="enlace">Slytherin</Link>
        </div>
        <Route exact path="/" render={()=>{
          return <div>
            <Principal/>
          </div>
        }}>
        </Route>
        <Route exact path="/personajes" render={()=>{
          return <div>
            <Personajes menu="this.state.menuF" personajes={this.state.personajes}/>
          </div>
        }}>
        </Route>
        <Route exact path="/estudiantes" render={()=>{
          return <div>
            <Estudiantes menu="this.state.menuF" estudiantes={this.state.estudiantes}/>
          </div>
        }}>
        </Route>
        <Route exact path="/profesores" render={()=>{
          return <div>
            <Profesores menu="this.state.menuF" profesores={this.state.profesores}/>
          </div>
        }}>
        </Route>
        <Route exact path="/casas" render={()=>{
          return <div>
            <Casas menu={this.menuCasas()}/>
          </div>
        }}>
        </Route>
      </Router>
    )
  }
}
export default App;