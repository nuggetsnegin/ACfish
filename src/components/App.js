import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Only the best pfffffppt" age={12} cool={true} />{' '}
          {/*have to use squigglies for numbers and booleans*/}
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
