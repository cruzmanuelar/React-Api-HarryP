import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Slytherin from './Casas/Slytherin';
import Ravenclaw from './Casas/Ravenclaw';
import Hufflepuff from './Casas/Hufflepuff';
import Gryffindor from './Casas/Gryffindor';

class MenuCasas extends React.Component{

    state = {
            slytherin:[],
            ravenclaw:[],
            hufflepuff:[],
            gryffindor:[]
    }

    componentDidMount(){
        fetch('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({slytherin: respuesta}))
        
        fetch('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({ravenclaw: respuesta}))

        fetch('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({hufflepuff: respuesta}))

        fetch('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
        .then(respuesta => respuesta.json())
        .then(respuesta => this.setState({gryffindor: respuesta}))
    }

    render(){
        return(
            <React.Fragment>
                <Router>
                    <div className="navegacion">
                        <Link to="/gryffindor" className="enlace">Gryffindor</Link>
                        <Link to="/hufflepuff" className="enlace">Hufflepuff</Link>
                        <Link to="/ravenclaw" className="enlace">Ravenclaw</Link>
                        <Link to="/slytherin" className="enlace">Slytherin</Link>
                    </div>
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
            </React.Fragment>
        )
    }
}

export default MenuCasas;