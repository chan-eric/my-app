import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './css/App.css';
import logo from './logo.svg';
import Table from "./Table";
import Contact from "./Contact";


class App extends Component {
    constructor(props) {
      super(props);
    }
	
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          

          <div className="Menubar">
            <ul className="Menu">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul> 
          </div>
        </header>
		
      
		
		  <div className="App-intro">

        <div className="Banner"></div>
          <Route exact path='/' component={Table}/>
          <Route path='/contact' component={Contact}/>	
		  
		  </div>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;