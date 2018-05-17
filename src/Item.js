import React from "react";
import "./Item.css";

const Item = props => (
  <div className="Item">
    <tr>
      <td>
        <img src={props.data.img} alt="Smiley face" />
      </td>
      <td valign="top">
        <h1>{props.data.name}</h1>
        {props.data.description}
      </td>
    </tr>
  </div>
);

export default Item;