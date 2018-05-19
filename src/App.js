import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "./css/App.css";
import logo from "./logo.svg";
import Table from "./Table";
import Contact from "./Contact";

class App extends Component {
 
  render() {
    return (
		
      <BrowserRouter>
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
	   	 			<NavItem className={window.location.pathname === "/" && "selected"} eventKey={1} href="/">
	     	 			Home
	    			</NavItem>
	   	 			<NavItem className={window.location.pathname.startsWith("/contact") && "selected"} eventKey={2} href="/contact">
	     	 			Contact Us
	    			</NavItem>
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
