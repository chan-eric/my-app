import React, { Component } from "react";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "./css/App.css";
import logo from "./logo.svg";
import Table from "./Table";
import Contact from "./Contact";

class App extends Component {
 
  render() {
    return (
		
		
      <BrowserRouter basename="/my-app">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="Banner" />			
		
			<Navbar >
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav className="nav">
	   	 			<NavItem eventKey={1} href={`${process.env.PUBLIC_URL}/`}>
	     	 			Home
	    			</NavItem>
	   	 			<NavItem eventKey={2} href={`${process.env.PUBLIC_URL}/contact`}>
	     	 			Contact Us
	    			</NavItem>
					<Link to="/contact"/>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
          </header>

          <div className="App-intro">

            <Route exact path="/" component={Table} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
