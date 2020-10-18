import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import './index.css';
import Personajes from './componentes/Personajes';
import Principal from './componentes/Principal';
import Estudiantes from './componentes/Estudiantes';
import Profesores from './componentes/Profesores';
import Casas from './componentes/Casas';
import Gryffindor from './componentes/Casas/Gryffindor';
import Hufflepuff from './componentes/Casas/Hufflepuff';
import Ravenclaw from './componentes/Casas/Ravenclaw';
import Slytherin from './componentes/Casas/Slytherin';

class App extends React.Component{

  state = {
    personajes:[],
    estudiantes:[],
    profesores:[],
    gryffindor:[],
    hufflepuff:[],
    ravenclaw:[],
    slytherin:[],
    casas:[],
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

    fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({gryffindor: respuesta}))

    fetch('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({ravenclaw: respuesta}))

    fetch('http://hp-api.herokuapp.com/api/characters/house/hufflepuff')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({hufflepuff: respuesta}))

    fetch('http://hp-api.herokuapp.com/api/characters/house/slytherin')
    .then(respuesta => respuesta.json())
    .then(respuesta => this.setState({slytherin: respuesta}))
  }

  render(){
    return(
      <Router>
        <div className="cabecera">
          <h1>Harry Potter</h1>
        </div>
        <div className="navegacion">
          <Link to="/" className="enlace">Principal</Link>
          <Link to="/personajes" id="personajes" className="enlace">Personajes</Link>
          <Link to="/estudiantes" id="estudiantes" className="enlace">Estudiantes</Link>
          <Link to="/profesores" id="profesores" className="enlace">Profesores</Link>
          <Link to="/casas" id="casas" className="enlace">Casas</Link>
        </div>
        <div id="navegacionCasas">
          <Link to="/gryffindor" id="gryffindor" className="enlace">Gryffindor</Link>
          <Link to="/hufflepuff" id="hufflepuff" className="enlace">Hufflepuff</Link>
          <Link to="/ravenclaw" id="ravenclaw" className="enlace">Ravenclaw</Link>
          <Link to="/slytherin" id="slytherin" className="enlace">Slytherin</Link>
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
            <Casas/>
          </div>
        }}>
        </Route>
        <Route exact path="/gryffindor" render={()=>{
          return <div>
            <Gryffindor gryffindor={this.state.gryffindor}/>
          </div>
        }}>
        </Route>
        <Route exact path="/hufflepuff" render={()=>{
          return <div>
            <Hufflepuff hufflepuff={this.state.hufflepuff}/>
          </div>
        }}>
        </Route>
        <Route exact path="/ravenclaw" render={()=>{
          return <div>
            <Ravenclaw ravenclaw={this.state.ravenclaw}/>
          </div>
        }}>
        </Route>
        <Route exact path="/slytherin" render={()=>{
          return <div>
            <Slytherin slytherin={this.state.slytherin}/>
          </div>
        }}>
        </Route>
      </Router>
    )
  }
}
export default App;