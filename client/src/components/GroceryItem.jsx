import React from 'react';

const GroceryItem = (props) => (
  
  <div className="grocery-items"> 
    <div className="remove-main">
      <button 
        className="remove"
        onClick={() =>  props.removeItem(props.item.id)}>x
      </button>
    </div>
    <div className="item-description">{props.item.description}</div>
    <span className="quant">{props.item.quantity}</span>
    <div className="add-remove-buttons">
      <button 
        className="remove"
        onClick={() => {props.subQuantity(props.item)}}>-
      </button>
      <button 
        className="remove"
        onClick={() => {props.addQuantity(props.item)}}>+
      </button>
    </div>
   </div>
 
)

export default GroceryItem;

