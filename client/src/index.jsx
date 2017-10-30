import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx'
import AddGrocery from './components/AddGrocery.jsx' 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addItemToGroceryList(id, quantity, name) {
    let item = {
      id: id,
      quantity: quantity,
      description: name
    }
    let newList = this.state.list.slice(0);
    newList.push(item);
    this.setState({
      list: newList
    })
  }

  onClickRemoveItem(id) {
    let updatedList = this.state.list.filter( item => {
      return item.id !== id;
    });
    this.setState({
      list: updatedList
    })
   }

  onClickAddQuantity(item) {
    let newList = this.state.list.slice(0);
    newList.forEach( listItem => {
      if(listItem.id === item.id && item.quantity >=0) {
        listItem.quantity = Number(item.quantity) + 1 ; 
      } 
    });
    this.setState({
      list: newList
    });
  }

   onClickRemoveQuantity(item) {
     let newList = this.state.list.slice(0);

     newList.forEach( listItem => {
       if(listItem.id === item.id && item.quantity >0) {
         listItem.quantity = item.quantity - 1; 
  
       } 
     })
     this.setState({
       list: newList
     });
  }

  render() { 
    return (
    <div>
      <div className="add-grocery">
        <AddGrocery addItem={(id, quantity, name) => this.addItemToGroceryList(id, quantity, name)} />
      </div>
      <div className='grocery-list'>
        <GroceryList 
          cart={this.state.list}
          removeItem={(id) => this.onClickRemoveItem(id)}
          subQuantity={(item) => this.onClickRemoveQuantity(item)}
          addQuantity={(item) => this.onClickAddQuantity(item)}
          />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));