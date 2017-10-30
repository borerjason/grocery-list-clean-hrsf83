import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries-list">
    <h3>Grocery List</h3>
    <div className="groceries">
      {props.cart.map(function(item){
        return <GroceryItem 
                  item={item} 
                  key={item.id}
                  removeItem={props.removeItem}  
                  subQuantity={props.subQuantity}
                  addQuantity={props.addQuantity}/>   
      })}
    </div>
  </div>
);

export default GroceryList;