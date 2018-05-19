import React, { Component } from 'react';
import Item from "./Item";
import data from "./data.json";

export default class Table  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        items: data
      };
    }
	
  render() { return ( <table>
          {this.state.items.map((item, i) => {
            //console.log(item);
            //return <li key={item.description}> {item.}</li>

            return <Item data={item} />;
          })}
        </table>
	  )
  }
}
