import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  //setting state with a property
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //to update state:
    //1 - first we need to get a copy of the existing state - never want to reach into state and modify it directly (mutation)
    //will cause perf issues or updating out of order
    const fishes = { ...this.state.fishes };
    // 2 - add our new fish to the fishes obj
    fishes[`fish${Date.now()}`] = fish; //returns the ms since 1970 as our unique value

    //set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Only the best pfffffppt" age={12} cool={true} />
          <ul className="fishes">
            <Fish />
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
