import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 5,
      quantity: '',
      name: ''
    }
  }
  addItemToList() {
    this.props.addItem(this.state.id, this.state.quantity, this.state.name)
    let nextID = this.state.id + 1;
    this.setState({
      id: nextID
    })
  }

  render () {
    return (
      <div className="add-grocery">
        <input 
          className="new-item" 
          placeholder="Add new item"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        <input 
          className="item-quantity" 
          placeholder="Add quantity"
          value={this.state.quantity}
          onChange={(e) => this.setState({quantity: e.target.value})}  
        />
        <button 
          className="add"  
          onClick={() => this.addItemToList()}>Add</button>

    </div>       

    );
  }

}

export default AddGrocery;

