import React from 'react';

const GroceryItem = (props) => (
  
  <div className="grocery-items"> 
    <button 
      className="remove"
      onClick={() =>  props.removeItem(props.item.id)}>x
    </button>
    <div className="item-description">{props.item.description}</div>
    <button 
      className="remove"
      onClick={() => {props.subQuantity(props.item)}}>-
    </button>
    <span>{props.item.quantity}</span>
    <button 
      className="remove"
      onClick={() => {props.addQuantity(props.item)}}>+
    </button>
   </div>
 
)

export default GroceryItem;

