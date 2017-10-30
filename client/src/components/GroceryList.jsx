import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = ({cart, removeItem, subQuantity, addQuantity}) => (
  <div className="groceries-list">
    <h3>Grocery List</h3>
    <div className="groceries">
      {cart.map(function(item){
        return <GroceryItem 
                  item={item} 
                  key={item.id}
                  removeItem={removeItem}  
                  subQuantity={subQuantity}
                  addQuantity={addQuantity}/>   
      })}
    </div>
  </div>
);

export default GroceryList;