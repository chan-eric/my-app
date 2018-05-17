import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Item from "./Item";
import data from "./data.json";


class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        items: data
      };
    }
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
		
      <div id="menubar">
        <ul id="menu">
         
          <li class="selected"><a href="index.html">Home</a></li>
          <li><a href="examples.html">Examples</a></li>
          <li><a href="page.html">A Page</a></li>
          <li><a href="another_page.html">Another Page</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
		
		<div className="App-intro"><br/>
		<table>
          {this.state.items.map((item, i) => {
            console.log(item);
            //return <li key={item.description}> {item.}</li>

            return <Item data={item} />;
          })}
        </table>
		  </div>
      </div>
    );
  }
}

export default App;