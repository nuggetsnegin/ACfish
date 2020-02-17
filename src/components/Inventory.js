import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

//state is just an OBJECT that lives inside a component that stores all the data of that component needs + children needs
//single source of truth
class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Pocket</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishies
        </button>
      </div>
    );
  }
}

export default Inventory;
