import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <p className="App-intro">
		<table>
          {this.state.items.map((item, i) => {
            console.log(item);
            //return <li key={item.description}> {item.}</li>

            return <Item data={item} />;
          })}
        </table>
        </p>
      </div>
    );
  }
}

export default App;