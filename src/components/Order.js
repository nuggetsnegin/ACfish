import React, { Component } from 'react';

class Order extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return <li>Sorry {fish ? fish.name : 'fish'} is no longer available!</li>;
    }

    return (
      <li>
        {count}x {fish.name} {count * fish.price} Bells
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      //boolean to check if fish available
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal; //fish not available keep adding up additional ones
    }, 0); //return a tally, starts at 0
    return (
      <div className="order-wrap">
        <h2>Sell</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>Total: {total} bells</strong>
        </div>
      </div>
    );
  }
}

export default Order;
