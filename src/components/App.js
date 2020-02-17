import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  //setting state with a property
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    console.log('adding a fish');
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Only the best pfffffppt" age={12} cool={true} />
          {/*have to use squigglies for numbers and booleans*/}
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
