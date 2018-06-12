import React from "react";
import "./css/Item.css";

const Item = props => (
  <div className="Item">
    <tr>
      <td>
        <img src={props.data.img} alt="Smiley face" />
      </td>
      <td valign="top">
        <h2>{props.data.name} </h2>
		<h4> 价格 {props.data.price} </h4>
		{props.data.description}
      </td>
    </tr>
  </div>
);

export default Item;