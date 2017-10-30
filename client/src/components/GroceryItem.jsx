import React from 'react';

const GroceryItem = (props) => (
 
  <div className="grocery-items"> 
    <div className="item-description">{props.item.description}</div>
     <span>{props.item.quantity}</span>
   </div>
 
)

export default GroceryItem;