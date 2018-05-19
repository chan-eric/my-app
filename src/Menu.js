import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'


export default class Menu extends Component {


    render() {
      return (
          <div className="Menubar">
            <ul className="Menu">            
		  				<li><NavLink activeClassName={"selected"} exact={true} to="/">Home</NavLink></li>
                        <li><NavLink activeClassName={"selected"} to="/contact">About</NavLink></li>
                        <li><NavLink activeClassName={"selected"} to="/courses">Courses</NavLink></li>
            </ul> 
          </div>
	  );
  }
}